-- List the five countries with the greatest improvement in the number of gold medals
-- compared to the Tokyo Olympics. For each of these five countries,
-- list all their all-female teams. Sort the output first by the increased number of
-- gold medals in descending order,
-- then by country code alphabetically, and last by team code alphabetically.
-- paris olympics

WITH paris_gold_medals as (select c.country_code,
                                  count(winner_code) as gold_medal
                           from medals m
                                    left join (select code, country_code
                                               from athletes
                                               union
                                               select code, country_code
                                               from teams) as c on m.winner_code = c.code
                           where medal_code = 1
                           group by c.country_code)
select * from (
select paris_gold_medals.country_code,
       paris_gold_medals.gold_medal - coalesce(tm.gold_medal, 0) as improvement
from paris_gold_medals
         left join tokyo_medals tm on paris_gold_medals.country_code = tm.country_code
order by improvement desc
limit 5 ) as top5_improvement,
LATERAL (
      select t.code
      from teams t
               join athletes a on a.code = t.athletes_code
      where t.country_code = top5_improvement.country_code
      group by t.code, t.country_code
      having count(distinct a.gender) = 1
         and min(a.gender) = 1
 ) as female_teams
ORDER BY improvement desc, country_code, code;

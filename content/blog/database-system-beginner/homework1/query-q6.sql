
-- List the five countries with the greatest improvement in the number of gold medals
-- compared to the Tokyo Olympics. For each of these five countries,
-- list all their all-female teams. Sort the output first by the increased number of
-- gold medals in descending order,
-- then by country code alphabetically, and last by team code alphabetically.

select * from tokyo_medals


-- paris olympics
select * from (
                  select
                      c.country_code,
                      count(winner_code) - coalesce(tm.gold_medal,0) as gold_medal_improvement
                  from medals m
                           left join (select code, country_code
                                      from athletes
                                      union
                                      select code, country_code
                                      from teams) as c on m.winner_code = c.code
                           left join tokyo_medals tm on tm.country_code = c.country_code
                  where medal_code = 1
                  group by c.country_code
                  order by count(winner_code) - coalesce(tm.gold_medal,0) desc limit 5
                ) as top5_improvement,
LATERAL (
            select t.code, t.country_code
    from teams t
             join athletes a on a.code = t.athletes_code
    where t.country_code = top5_improvement.country
    group by t.code, t.country_code
    having count(distinct a.gender) = 1 and min(a.gender) = 1
) as a

WITH medal_count AS (select medals.discipline,
                            COALESCE(athletes.country_code, t.country_code) as country_code,
                            count(*)                                        as medal_number
                     from medals
                              left join (select code, teams.country_code from teams group by code, country_code) as t
                                        on t.code = medals.winner_code
                              left join athletes on athletes.code = medals.winner_code
                     group by medals.discipline, COALESCE(athletes.country_code, t.country_code))
select coaches.name, mc.medal_number
from coaches
         left join medal_count mc on mc.discipline = coaches.discipline and coaches.country_code = mc.country_code
where mc.medal_number > 0
order by mc.medal_number desc, coaches.name desc;

-- day 3: come up with a different query


WITH winner_code_country AS (
    SELECT code, country_code
    FROM athletes
    UNION
    SELECT code, country_code
    FROM teams
),
medals_count AS (
 SELECT m.discipline, wcc.country_code, COUNT(m.winner_code) AS count
 FROM medals m
          JOIN winner_code_country wcc ON wcc.code = m.winner_code
 GROUP BY m.discipline, wcc.country_code
)
SELECT c.name AS COACH_NAME, mc.count AS MEDAL_NUMBER
FROM coaches c
INNER JOIN medals_count mc ON mc.country_code = c.country_code AND mc.discipline = c.discipline
ORDER BY mc.count DESC, c.name;
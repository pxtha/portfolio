WITH country_code AS (SELECT code, country_code
                      FROM athletes
                      UNION
                      SELECT code, teams.country_code
                      FROM teams),
     rank_apperance AS (SELECT r.date,
                               COUNT(participant_code)                                                                 AS top5_apperance,
                               c.country_code,
                               RANK() OVER (PARTITION BY r.date ORDER BY COUNT(participant_code) DESC, c.country_code) AS rank
                        FROM results r
                                 LEFT JOIN country_code c ON c.code = r.participant_code
                        WHERE r.rank IS NOT NULL
                          AND r.rank <= 5
                        GROUP BY r.date, c.country_code),
     country_rank AS (SELECT RANK() OVER (ORDER BY population desc)           AS rank_population,
                             RANK() OVER (ORDER BY "GDP ($ per capita)" DESC) AS rank_gdp,
                             c.code
                      FROM countries c)
SELECT r.date,
       r.country_code,
       r.top5_apperance,
       cr.rank_gdp,
       cr.rank_population

FROM rank_apperance r
         LEFT JOIN country_rank cr ON r.country_code = cr.code
WHERE r.rank = 1
ORDER BY r.date;

--- approach 2: no CTE

select rank_apperance.date,
       rank_apperance.country_code,
       rank_apperance.apperance as top5_apperance,
       country_rank.rank_gdp,
       country_rank.rank_population
    from (select r.date,
                 c.country_code,
                 count(r.participant_code)                                                                 as apperance,
                 rank() over (partition by r.date order by count(r.participant_code) desc, c.country_code) as rank
          from results r
                   left join (select code, country_code
                              from athletes
                              union
                              select code, country_code
                              from teams) as c on r.participant_code = c.code
          where rank <= 5
            and rank is not null
          group by c.country_code, r.date)
        as rank_apperance
    left join (select code,
               rank() over (order by population desc)           as rank_population,
               rank() over (order by "GDP ($ per capita)" desc) as rank_gdp
            from countries)
        as country_rank on rank_apperance.country_code = country_rank.code
where rank_apperance.rank = 1
--
-- Summary
-- CTEs: Best for readability and maintainability but may have performance issues with large datasets.
-- Subqueries: Avoids CTE overhead but can be less readable and harder to maintain.

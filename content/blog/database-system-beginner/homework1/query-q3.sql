-- Find all athletes in Judo discipline, and also list the number of medals they have won. Sort output in descending order by medal number first, then by name alphabetically.
-- Version: 1.0
 with medals_count as (
select count(*) as medals_count,
       coalesce(t.athletes_code, m.winner_code) as code
from medals m
       left join teams t on m.winner_code = t.code
group by coalesce(t.athletes_code, m.winner_code))
select
    a.name as ATHELE_NAME,
    m.medals_count as MEDAL_NUMBER
from athletes a
         left join medals_count m on a.code = m.code
where a.disciplines like '%judo%'
order by m.medals_count desc, a.name;


--- DuckDB: LATERAL JOIN
select a.name as NAME, m.medals_count as MEDAL
from athletes a,
     LATERAL (
         select count(*)                                 as medals_count,
             coalesce(t.athletes_code, m.winner_code) as code
              from medals m
                       left join teams t on m.winner_code = t.code
              where a.code = coalesce(t.athletes_code, m.winner_code)
              group by coalesce(t.athletes_code, m.winner_code)
     ) as m
where a.disciplines ilike '%judo%'
order by m.medals_count desc, a.name;
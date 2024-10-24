-- For all venues that have hosted Athletics discipline competitions,
-- list all athletes who have competed at these venues, and sort them by the distance from their nationality country to the country they
-- represented in descending order, then by name alphabetically.
-- Version: 1.0
-- sqlite

explain
query plan with result_atheletes as (select coalesce(t.athletes_code, r.participant_code) as code, r.venue
                          from results r
                                   left join teams t on r.participant_code = t.code
                          group by coalesce(t.athletes_code, r.participant_code))
select a.name,
       a.nationality_code,
       a.country_code,
       (
           (c1.latitude - c2.latitude) * (c1.latitude - c2.latitude) +
           (c1.longitude - c2.longitude) * (c1.longitude - c2.longitude)
           ) AS distance
from venues v
         left join result_atheletes r on r.venue = v.venue
         left join athletes a on r.code = a.code
         LEFT JOIN countries c1 ON a.nationality_code = c1.code
         LEFT JOIN countries c2 ON a.country_code = c2.code
where v.disciplines like '%Athletics%'
  and r.code is not null
order by distance desc, a.name;

--

explain
query plan WITH result_athletes AS (
    SELECT
        COALESCE(t.athletes_code, r.participant_code) AS code,
        r.venue
    FROM results r
             LEFT JOIN teams t ON r.participant_code = t.code
    GROUP BY COALESCE(t.athletes_code, r.participant_code)
),
 athlete_distances AS (
     SELECT
         a.name,
         a.code,
         a.nationality_code,
         a.country_code,
         (
             (c1.latitude - c2.latitude) * (c1.latitude - c2.latitude) +
             (c1.longitude - c2.longitude) * (c1.longitude - c2.longitude)
             ) AS distance
     FROM result_athletes ra
              LEFT JOIN athletes a ON ra.code = a.code
              LEFT JOIN countries c1 ON a.nationality_code = c1.code
              LEFT JOIN countries c2 ON a.country_code = c2.code
     WHERE a.nationality_code IS NOT NULL AND a.country_code IS NOT NULL
     )
SELECT ad.name,
       ad.nationality_code,
       ad.country_code
FROM venues v
         LEFT JOIN result_athletes ra ON ra.venue = v.venue
         LEFT JOIN athlete_distances ad ON ra.code = ad.code
WHERE v.disciplines LIKE '%Athletics%'
ORDER BY ad.distance DESC, ad.name;

-- using LATERAL JOIN



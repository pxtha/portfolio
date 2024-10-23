-- For all venues that have hosted Athletics discipline competitions,
-- list all athletes who have competed at these venues, and sort them by the distance from their nationality country to the country they
-- represented in descending order, then by name alphabetically.
-- Version: 1.0
-- sqlite

with result_atheletes as (select coalesce(t.athletes_code, r.participant_code) as code                          from results r
                                   left join teams t on r.participant_code = t.code
                          group by coalesce(t.athletes_code, r.participant_code))


select a.name, a.nationality_code, a.country_code,
       (
           (c1.latitude - c2.latitude) * (c1.latitude - c2.latitude) +
           (c1.longitude - c2.longitude) * (c1.longitude - c2.longitude)
           ) AS distance
from result_atheletes rs
         left join athletes a on rs.code = a.code
         LEFT JOIN countries c1 ON a.nationality_code = c1.code
         LEFT JOIN countries c2 ON a.country_code = c2.code
where a.nationality_code is not null and a.country_code is not null
order by distance desc, a.name


select * from (
                  select *, Rank() over (partition by code order by  athletes_code desc ) as rank from teams
              ) as rank_table
 where rank_table.rank = 2
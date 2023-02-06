/*
 * DML = Data Manipulation Language
 * psql -h localhost -p 5432 -U postgres -d matchmydev
 * \i data.dml.sql
 * \q
 */

DELETE from projects; 


INSERT INTO projects (name,code,description,start_date,end_date,production)
	VALUES
	('devops cloud', 'Si020798', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,','2022-05-11','2024-05-24', 'true'),
	('devops expert', 'pd090498', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,','2020-02-09','2026-05-30', 'false'),
	('developer java', 'ro020798', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,','2012-07-29','2030-05-12', 'true'),
	('developer vue.js', 'az020798', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,','2019-04-15','2022-07-14', 'false');

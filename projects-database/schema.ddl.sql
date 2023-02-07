/*
 * DDL = Data Definition Language
 * psql -h localhost -p 5432 -U postgres -d matchmydev 
 * \i schema.ddl.sql
 * \q
 */


DROP TABLE IF EXISTS projects;


CREATE TABLE projects (  
	id SERIAL PRIMARY KEY,  
	name varchar(150) UNIQUE NOT NULL,
	code varchar(20) NOT NULL,
	description varchar(1000) NOT NULL,
	start_date date NOT NULL,
	end_date date,
	production BOOLEAN NOT NULL
);
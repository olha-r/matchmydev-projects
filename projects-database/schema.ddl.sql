/*
 * DDL = Data Definition Language
 * psql -h localhost -p 5432 -U postgres -d matchmydev 
 * \i schema.ddl.sql
 * \q
 */


DROP TABLE IF EXISTS projects;


CREATE TABLE projects (  
	id SERIAL PRIMARY KEY,  
	name varchar(200) UNIQUE NOT NULL,
	code varchar NOT NULL,
	description text NOT NULL,
	start_date date NOT NULL,
	end_date date NOT NULL,
	production BOOLEAN NOT NULL
);
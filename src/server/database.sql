CREATE DATABASE scholarshipdb;

CREATE TABLE scholarships (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    url VARCHAR(255),
    description TEXT,
    saved BOOLEAN DEFAULT TRUE
);
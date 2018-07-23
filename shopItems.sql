-- DROP TABLE IF EXISTS shopItems;

CREATE TABLE shopItems(
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    photo VARCHAR(300),
    type VARCHAR(200),
    price NUMERIC(5,2)
);

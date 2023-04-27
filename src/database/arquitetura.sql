-- Active: 1682600205271@@127.0.0.1@3306
CREATE TABLE brands(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    brand_id TEXT NOT NULL,
    Foreign Key (brand_id) REFERENCES brands(id)
);

SELECT * FROM brands;

SELECT * FROM products;

INSERT INTO brands (id, name)
VALUES
    ("b001", "samsung"),
    ("b002", "apple"),
    ("b003", "xiaomi"),
    ("b004", "umidigi");

INSERT INTO products (id, name, price, description, brand_id)
VALUES
    ("p001", "A03", 999.99, "celular de entrada", "b001"),
    ("p002", "note20", 5000, "celular top de linha", "b001"),
    ("p003", "iphone 14", 1000000.00, "celular top de linha", "b002"),
    ("p004", "poco x5", 1999.99 , "celular intermediario", "b003"),
    ("p005", "A11 pro max", 999.99 , "celular de entrada", "b004");

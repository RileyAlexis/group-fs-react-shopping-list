CREATE TABLE shoppingList(
    "id" SERIAL PRIMARY KEY,
    "item" varchar(80),
    "quantity" decimal,
    "unit" varchar(20),
    "complete" boolean
)

INSERT INTO shoppingList (item, quantity, unit)
VALUES ('Skittles', '6', 'bag'),
('Bagels', '3', 'bag'),
('Jelly Beans', '2', 'bag'),
('Doughnuts', '12', 'box'),
('Reeses Peanut Butter Cups', '14', 'packs')

ALTER TABLE "shoppinglist"
ADD COLUMN "complete" BOOLEAN;
-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
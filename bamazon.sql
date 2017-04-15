CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE Products (
	ItemID INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(255) NOT NULL,
    DepartmentName VARCHAR(255) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY(ItemID)
);
INSERT INTO Products 
	(ProductName,DepartmentName,Price,StockQuantity)

VALUES
	('iPhone 7','Cell Phones',399.99,1000),
    ('Phone Charger','Cell Phones',499.99,5000),
    ('American Apparel Hoodie','Clothing',29.99,200),
    ('Dress','Clothing',9.99,300),
    ('Microwave','Appliances',699.99,50),
    ('Fridgerator','Appliances',599.99,20),
    ('Violin','Instruments',199.99,10),
    ('Flute','Instruments',199.99,12),
    ('PS4','Electronics',399.99,10000),
    ('DS','Electronics',399.99,20000);

CREATE TABLE Departments (
	DepartmentID INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR(255) NOT NULL,
    OverheadCosts DECIMAL(10,2) DEFAULT 0.00 NOT NULL,
    ProductSales DECIMAL(10,2) DEFAULT 0.00,
    PRIMARY KEY(DepartmentID)
);
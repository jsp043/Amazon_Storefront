//Customer End

var mysql = require('mysql');
var accounting = require('accounting'); 
var inquirer = require('inquirer'); 
var chalk = require('chalk');

var connection = mysql.createCollection({
	host: "localhost",
	port: 3306, 
	user: "root",
	password: "".
	database: "bamazon"
}); 

connection.connect(function(err) {
	if (err) throw err; 
	start();
});

var amx, col = ['Item ID', 'Product Name', 'Price'];

var start = function() {
	var query = Bamazon.createQuery(col);
	connection.query(query, function(err, res) { 
		handleQuery(res);
		}); 
};

var buyItem = function(max) {
	inquirer.prompt([{
		name: "id", 
		type: "input", 
		message: "What item product ID would you like to buy?", 
		validate: function(value){ 
			if (value>=0 && value <= max && value%1 === 0) { 
				return true;
			} else {
				return 'Type in a valid ID'; 
			}
	}
} , { 
	name: "quantity",
	type: "input",
	message: "How many would you like to buy?", 
	validate: Bamazon.validateQuatntity 
}]).then(function(answer) {
	checkQuantity(answer);
}); 

var checkQuantity = function(result) {
	var query = 'SELECT StockQuantity, Price, DepartmentName FROM Products WHERE ItemID = ?';
	var params = result.id;
	connection.query(query, params, function (err,res) {
		if (res[0].StockQuantity < result.quantity) {
			console.log('Not enough stock. Please try again');
		} else { 
		var totalStock = answer.quantity * res[0].Price; 
		var newStock = res[0].StockQuantity - answer.quantity;
		updateQuantity(answer.id, total, newStock);
		queryTotal(res[0].DepartmentName, total); 
		}
	});
}; 

var updateQuantity = function(id,total,newStock) {
  var query = 'UPDATE Products SET StockQuantity = ? WHERE ItemID = ?';
  var params = [newQuantity,id];
  connection.query(query, params, function(err, res) {
    console.log(chalk.bold.blue('\nTotal cost: ') + chalk.bold.yellow(accounting.formatMoney(total)));
    console.log(chalk.bold.blue('Thank you come again!'));
  });
};



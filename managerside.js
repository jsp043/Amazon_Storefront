//Manager side 

var mysql = require('mysql');
var inquirer = require('inquirer');
var accounting = require('accounting');
var chalk = require('chalk');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "", //Your password
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

var start = function() {
  console.log('');
	inquirer.prompt([
	  {
	    type: 'list',
	    name: 'menu',
	    message: 'What would you, the seller, like to change?',
	    choices: [
	    	'1) Look at Products',
	    	'2) Add Inventory',
	    	'4) Add New Product', 
	    ]
	  }
	]).then(function (answers) {
	  switch(answers.menu) {
	  	case '1) View Products for Sale': viewProducts(); break;
	  	case '2) Add to Inventory': addInvent(); break;
	  	case '3) Add New Product': addProducts(); break;
	  }
	});
};
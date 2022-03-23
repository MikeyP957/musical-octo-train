# musical-octo-train
Backend Routing Exercise

## User Story
I want to be able to add transactions to a database that includes a payer, an amount of points and a pre-determined time-stamp. Negative point amounts are not allowed.

I want to be able to view my point balances for each transaction that includes only the payer and the amount of points for that transaction.

I want to be able to spend points so that oldest points are spent first and no payer has negative points. After the data has been updated I want to see the changes made.

## Prerequisites
- You have installed Node.js
- You have installed MySQL

[Node.js Download](https://nodejs.org/en/download/) or using homebrew:
```
$ brew install node 
```
[MySQL Download](https://dev.mysql.com/downloads/mysql/)
or using homebrew:
```
$ brew install mysql
```
## Installing musical-octo-train
Once node and mySQL are installed, open the home directory and in the terminal run:
```
$ npm i
```
 And seed the database. 
```
$ npm run seed
```


## Use

Start the server.
```
$ npm start
```
Download either [insomnia](https://insomnia.rest/download) or [postman](https://www.postman.com/downloads/), or
 use homebrew:
```
brew install --cask insomnia
```
```
brew install --cask postman
```
Once a client is installed go to go to http://localhost:3000 to create, read, or update rows from the database.

### Inserting Transactions
To add data to the database follow the schema:
```
{
    "payer":"Dannon"
    "points":500
    "timestamp": "2020-10-31T10:00:00Z"
}
```
- note: points must be greater than 0

### Viewing Transactions
To view all transactions submit a get request from http://localhost:3000/transactions/view/

To view point balances for each transaction submit a get request from http://localhost:3000/transactions/view/balance

### Spending Points
To spend points send a put request to http://localhost:3000/transactions/spend
with request 
```
{"points":300}
```
## Contact
If you want to contact me you can reach me at peraram2@gmail.com 

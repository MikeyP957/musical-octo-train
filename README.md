# musical-octo-train
Backend Routing Exercise

## user story
I want to be able to add transactions to a database that includes a payer, an amount of points and a pre-determined time-stamp. Negative point ammounts are not allowd.

I want to be able to view my point balances for each transaction that includes only the payer and the amount of points for that transaction.

I want to be able to spend points so that oldest points are spent first and no payer has negative points. After the data has been updated I want to see the changes made.

## getting started
This application runs with Node.js with a MySQL database. To download the latest version of Node.js you can download it here: [Node.js Download](https://nodejs.org/en/download/) or using homebrew:
```
$ brew install node 
```
To download mySQL you can download it here: [MySQL](https://dev.mysql.com/downloads/mysql/)
or using homebrew:
```
$ brew insatll mysql
```
Once node and mySQL are insalled open the home directory and in the terminal run:
```
$ npm i
```


## running the service
Seed the database 
```
$ npm run seed
```
start the server
```
$ npm start
```
Download either [insomnia](https://insomnia.rest/download) or [postman](https://www.postman.com/downloads/), or
 download with homebrew:
```
brew install --cask insomnia
```
```
brew install --cask postman
```
Once a client is installed go to go to http://localhost:3000 to create, read, update or delete rows from the database.

## inserting data
To add data to the database follow the schema:
```
{
    "payer":"Dannon"
    "points":500
    "timestamp": "2020-10-31T10:00:00Z"
}
```
- note: points must be greater than 0

## viewing data
To view all transactions submit a get request from http://localhost:3000/transactions/view/

To view point balances for each transaction submit a get request from http://localhost:3000/transactions/view/balance

## spending points
To spend points send a put request to http://localhost:3000/transactions/spend
with request 
```
{"points":300}
```
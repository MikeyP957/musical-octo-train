# musical-octo-train

Backend Routing Exercise

## User Story

I want to be able to add transactions to a database that includes a payer, an amount of points and a pre-determined time-stamp. Negative point amounts are not allowed.

I want to be able to view my point balances for each transaction that includes only the payer and the amount of points for that transaction.

I want to be able to spend points so that oldest points are spent first and no payer has negative points. After the data has been updated I want to see the changes made.

## Prerequisites

- You have installed Node.js
- You have installed MySQL
- You have installed a database tool such as MySQL WorkBench or DBeaver

[Node.js Download](https://nodejs.org/en/download/) or using homebrew:

```
$ brew install node
```

[MySQL Download](https://dev.mysql.com/downloads/mysql/)
or using homebrew:

```
$ brew install mysql
```

[MySQL WorkBench Download](https://dev.mysql.com/downloads/workbench/) or using homebrew:

```
brew install --cask mysqlworkbench
```

## Installing musical-octo-train

Using MySQL WorkBench or DBeaver start a local connection and create an empty database `store_db`

```
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;
```

To connect to the database a `.env` file should be created and completed with the password for the local connection. An example can be found in the home directory as `.env.EXAMPLE`

While in the home directory, install Node packages using the command:

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

### Inserting Transactions

To make a post request go to http://localhost:3000/transactions/add and insert rows with the following schema:

```
{
    "payer":"Dannon",
    "points":500,
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

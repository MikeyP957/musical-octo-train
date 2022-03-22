# musical-octo-train
Backend Routing Exercise

## user story

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
seed the database 
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
}
```
The timestamp is handled by the database and will create a timestamp upon creation and stored as createdAt. When a row is updated the timestamp is changed to reflect the updated time with field updatedAt
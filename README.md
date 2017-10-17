# engined-database

Database agent for engined, used to managing various database backend.

[![NPM](https://nodei.co/npm/engined-database.png)](https://nodei.co/npm/engined-database/)

## Installation

Install via NPM:

```shell
npm install engined-database
```

## Usage

Start engined-database service in engined, see example below:

```javascript
const { Manager } = require('engined');
const DatabaseService = require('engined-database');

const database = DatabaseService();

const main = async () => {

	// Create manager
	let serviceManager = new Manager({ verbose: true });

	// Adding service to manager
	serviceManager.add('Database', database);

	// Start all services
	await serviceManager.startAll();
};

main();
```

## Using specific database backend

Here is example to get agent for specific backend to save file:

```javascript

// Using MySQL database backend
let mysqlAgent = this.getContext('Database').getAgent('mysql');

let users = mysqlAgent.model('User').findAll();
```

## Register database backend

```javascript

// Register agent for customized database backend
this.getContext('Database').registerAgent('mydb', agent);
```

## License
Licensed under the MIT License
 
## Authors
Copyright(c) 2017 Fred Chien（錢逢祥） <<cfsghost@gmail.com>>

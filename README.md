# Chat server redux

Welcome to the world of databases! This project is divided in four steps, the first two should take one day each, and the remaining two can be done in the last day. For each section use the respective folder in the `/server` directory, and save the required dependencies in the global `package.json`.

If you’re working on a Mac, to install the various databases use [Homebrew](http://brew.sh/).

### SQL

For starters complete these two tutorials on SQL: [part one](http://www.sqlcourse.com/) (chapters 2-8), and [part two](http://www.sqlcourse.com/) (chapters 2-10).

Now copy all the files you had in the `/server/koa` folder of the `chat-server` repo into the `/server/sql` folder of this repo.

Finally replace the JSON data-store with a SQL database of your choice (e.g. [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), or [SQLite](https://www.sqlite.org/)).

### ORM

SQL syntax and direct database string output are not the most friendly to work with… that’s why ORMs were born! Take a look at this [Sequelize example](http://docs.sequelizejs.com/en/1.7.0/articles/express/), and make sure you can fully understand it before moving forward (if you get stuck ask for help).

Now copy all the files you have in the `/server/sql` to the `/server/orm` folder, and refactor your code to switch from bare SQL to Sequelize.

### Mongo

Start by reading this MongoDB [tutorial](https://www.tutorialspoint.com/mongodb/) and [introduction](https://scotch.io/tutorials/an-introduction-to-mongodb).

Now copy all the files you have in the `/server/sql` to the `/server/mongo` folder, and refactor your code to switch from SQL to MongoDB.

Once you have finished, check out [Mongoose](http://mongoosejs.com/) and refactor your code once again to use it as ORM.

### Redis

Complete this interactive [Redis tutorial](https://try.redis.io/).

Now copy all the files you have in the `/server/sql` to the `/server/redis` folder, and refactor your code to switch from SQL to Redis.

## Getting started

To install the required dependencies run `npm install`.

Now copy all the files you had in the `/client` folder of the `chat-server` repo into the `/client` folder of this repo.

You’re ready to go! Remember to make small, incremental, and descriptive commits along the way.

## Extra credits

- Modify the client and server code so that it supports multiple users through login (for now a simple username is enough).
- Make your chat app real-time with [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (using the [Socket.io](http://socket.io/) library).

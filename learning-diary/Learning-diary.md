# Tien Pham #0596083

### LEARNING DIARY - MODULE

### 21.6.2020

####  NodeJS
I chose to use VSCode since I have a lot of experience using it in real work life. For me, it is easy to use and definitely the best editor out there for web application development. It is very popular in the web dev community, completely open source.
I have node.js installed, Node v12.14.0
I also have git installed, and I use MacOS.
I also learned that REPL is Read Eval Print Loop.

I have some experience working with Node.js in the past. I revised that Node.js  is a javascript runtime built on Chrome's V8 engine. Node.js is Javascript running on the server. It is used to build powerful, fast and scalable web applications, uses an event-driven, non-blokcing I/O model

I also learned that the event loop is single-threaded, supports concurrency via events and callbacks. EvevntEmitter class is used to bind events and event listeners.

We can build a lot of things with Node.js. REST APIs and backend applications for example. Also real-time services, blogs, CMS, Social Applications, utilities and tools, and any thing that is not CPU-intensive

I also relearned that NPM is Node.js package manager, which is used to install node programs/modules. It is easy to specify and link dependencies. I learned that modules get installed into "node_modules" folder by running 

```
npm install express

or to install globally

npm install -g express
```

####  MongoDB
I learned that MongoDB is a NoSQL database, data and records are stored as documents and they use JSON like syntax. NoSQL is different from SQL. NoSQL needs to plan out database, but still easier to get up and running with it than traditional SQL databases.
The video is quite outdated to install MongoDB, it's not able to be installed like the video anymore, however I already have MongoDB installed fortunately. My MongoDB version is 3.4.7. 

Inside MongoDB shell, to show the MongoDB databases locally we can `show dbs`

MongoDB objects can have different types of values inside it
```
{
  first_name: 'Tien',
  last_naem: 'Pham',
  memberships: ["mem1", "mem2"],
  address: {
    street: "main str",
    city: "Helsinki"
  }
}
```

To create user for DB
```
db.createUser({
  user: "tien",
  pwd: "1234",
  roles: ["readWrite", "dbAdmin"]
})
```

We will have the message that user was added successfully
```
Successfully added user: {
  "user": "tien",
  "roles": [
    "readWrite",
    "dbAdmin"
  ]
}
```

Collecions are similar to table in SQL, to create collection:
```
db.createCollection("customers")
```

To add to the above created collection: 
```
db.customers.insert({firstName: "Tien", last_name:"Pham"})
```

To find in DB: 
```
db.customers.find()
```

`_id` is auto created ID 

I learned that to add multiple values to table we can do like this: 
```
db.customers.insert([{firstName: "Tien", last_name:"Pham"},{firstName: "John", last_name:"Doe", gender: "female"}]);
```

So we can have whatever fields we want on whatever documents we want
I learned that to update a field we want to do like this: 
```
db.customers.update({firstName: "Tien"}, {first_name:"Tien", last_name:"Pham", gender: "male" });
```

To update and modify only part of the field we can use operator `$set`
```
db.customers.update({firstName: "Tien"}, {$set: { gender: "female" }});
```

I learned that we can use also operator `$inc` to increment numeric values
To remove a field we can use operator `$unset`
If we want to update something that might not be there, we can use operator `{upsert: true}`

To rename we can use operator `$rename`

I also learned that if we want to remove entry we can use `db.customers.remove()`

I also learned how to use different find commands to find different results inside the collection. 
```
db.customers.find({firstName: "Tien"});
db.customers.find({age: {$gt: 5}});
db.customers.find().sort({age: -1}); 
```


To conclude, I have learned the syntax of different MongoDB commands and learned how to use them inside MongoDB shell, also learned how to use different operators for MongoDB

#### Express JS Crash Course
I have some experience with using Express in my professional life, however it is nice to relearn a lot of it in the Express JS Crash Course.

I learned that Express is a minimalistic, open source web framework for Node.js. It is used to build powerful web applications and APIS, the most popular framework for Node.js and uses MVC concepts.
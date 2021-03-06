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

### 28.6.2020

#### Express JS Crash Course
I have some experience with using Express in my professional life, however it is nice to relearn a lot of it in the Express JS Crash Course.

I learned that Express is a minimalistic, open source web framework for Node.js. It is used to build powerful web applications and APIS, the most popular framework for Node.js and uses MVC concepts.

To install express we need to have Node.js and NPM installed
```
npm init
npm install express
```

I learned that to have an express app running we can have the following in app.js, then run `node app.js`
```js
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

To handle a get request to "/" route we can use the following handler:
```
app.get('/', function(req,res){
  res.send('Hello World')
})
```

I learned that iddleware is a function that has access to request and response object nd also access to the next piece of middleware that is gonna fire after it
```
var logger = function(req, res, next) {
  console.log("logging...");
  next();
};

app.use(logger);
```

The order of middleware is important

ejs is a powerful template engine, to use it just install it and put it in the express app.js file 
```
// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

Then we can use interpolation with ejs
```
	<h1><%= title %></h1>
	<ul>
	<% users.forEach(function(user){ %>
		<li><%= user.first_name %> <%= user.last_name %></li>
	<% }) %>
	</ul>
<% include partials/footer%>
```

#### Angular
I learned that to create an Angular project we can do the following command to create an Angular workspace
```
ng new angular-tour-of-heroes
```
It also creates the following workspace and starter project files:
A new workspace, with a root folder named angular-tour-of-heroes.
An initial skeleton app project, also called angular-tour-of-heroes (in the src subfolder).
An end-to-end test project (in the e2e subfolder).
Related configuration files.

To serve the app, we go to the workspace directory and launch the application.
```
cd angular-tour-of-heroes
ng serve --open
```

We can generate a new component by the following command 
```
ng generate component heroes
```

We can show a property in template by adding a property to Angular component
```
hero = 'Windstorm';

//heroes.component.html
{{hero}}
```

Format with the UppercasePipe: 
```
<h2>{{hero.name | uppercase}} Details</h2>
```

I learned about two-way binding in Angular:
```
<input [(ngModel)]="hero.name" placeholder="name"/>
```
I learned that although ngModel is a valid Angular directive, it isn't available by default.
It belongs to the optional FormsModule and you must opt-in to using it.

We can display list by using ngFor
```
<li *ngFor="let hero of heroes">
```
We shouldn't forget the asterisk (*) in front of ngFor. It's a critical part of the syntax.

The Angular class binding makes it easy to add and remove a CSS class conditionally. Just add [class.some-css-class]="some-condition" to the element you want to style.

I learned that keeping all features in one component as the application grows will not be maintainable. You'll want to split up large components into smaller sub-components, each focused on a specific task or workflow.

To generate new component also do as follow:
```
ng generate component hero-detail
```

I learned that `[hero]="selectedHero"` is an Angular property binding. It's a one way data binding from the selectedHero property of the HeroesComponent to the hero property of the target element, which maps to the hero property of the HeroDetailComponent.

I also learned the importance of services. Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

To create service we use the following command
```
ng generate service hero
```

I learned that using the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.

### 30.6.2020

I also learned that in Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

I learned that a routerLink attribute is the string that the router matches to the route to component. The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.

I learned that HttpClient is Angular's mechanism for communicating with a remote server over HTTP. we can make HttpClient available everywhere in the app in two steps. First, add it to the root AppModule by importing it:

```
import { HttpClientModule }    from '@angular/common/http';
```

Next, still in the AppModule, add HttpClient to the imports array:

```
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

In-memory Web API module is an interesting module, after installing the module, the app will make requests to and receive responses from the HttpClient without knowing that the In-memory Web API is intercepting those requests, applying them to an in-memory data store, and returning simulated responses.

I learned that HttpClient methods return one value. All HttpClient methods return an RxJS Observable of something. In general, an observable can return multiple values over time. An observable from HttpClient always emits a single value and then completes, never to emit again.

I learned that as a rule, an Observable does nothing until something subscribes. I also learned that a Subject is both a source of observable values and an Observable itself. we can subscribe to a Subject as we would any Observable.
we can also push values into that Observable by calling its next(value) method as the search() method does.

#### MEAN-Stack Front To Back

I learned that we can either use `cors` or the following way with express.js to enable cors
```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

`body-parser` is a middleware that for example when we submit the form we can get data on server

To use a static folder in express we can do the following 
```
app.use(express.static(path.join(__dirname, 'public')))
```

In mongoose, to find user by id we can do the following:
```
User.findById(id, callback);
```

To find user by name we can do the following:
```
const query = { username: username };
User.findOne(query, callback);
```

I learned that passportjs has a ton of strategies, we can use passport-jwt strategy to incorporate JWT with passport

I also learned that with PassportJS whenever we want to protect an Express route we can add the following to the route
```js
passport.authenticate('jwt', {session:false})

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
```

I learned that we can use `angular2-flash-messages` to display messages to the user that will disappear after a certain period of time.

To use router navigate in Angular 2 we need to import it to the file 
```
import { Router } from '@angular/router';
```
After that, we need to add it to constructor
```
constructor(private authService: AuthService,
    private router: Router) { }
```
Then in code we can navigate with router
```
this.router.navigate(['/login']
```

I learned that on Heroku we can configure Mlab add on so that we can use MongoDB with Heroku

### 2.7.2020

#### Course project

While working on the course project, I had the opportunity to brush up my skills with all parts of the MEAN stack. The project is a MEAN blog for myself, where I can post my new blogs, it has an admin panel where I can edit my own blog posts, publish a post, add new posts, and routing between pages. The blog is built with the whole MEAN stack, specifically with the following technologies:
- Angular 
- HTML 
- Bootstrap
- Node
- Express
- MongoDB

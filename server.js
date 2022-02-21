const path = require('path');
const express = require('express');
const routes = require('./controllers'); 
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);


const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => { // change force: false to true when making changes to Sequelize models
  app.listen(PORT, () => console.log('Now listening', `http://localhost:${PORT}`));
});
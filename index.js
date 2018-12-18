const express = require('express');
const app = express();
const projects = require('./data.json').projects;

app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.listen(3000, () => { console.log('app is listening on port 3000') });

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project/:id', (req, res, next) => {
  for (let project of projects) {
    if ( req.params.id === project.id ) {
      return res.render('project', { project });
    }
  }
  // project isn't in data. return 404
  next();
});

app.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

// intentionally throw an error
app.get('/error', (req, res) => {
  error = new Error('Route intentionally returns a 400 error');
  error.statusCode = 400;
  res.render('error', { error });
});

// capture undefined routes to show a 404 error.
app.use((req, res) => {
  error = new Error('The page was not found');
  error.statusCode = 404;
  res.render('error', { error });
});

// catch errors thrown by app for any request and route
app.use((err, req, res, next) => {
  res.status(err.statusCode);
  // display stack dump on formated error page
  res.locals.error = err;
  res.render('error');
});

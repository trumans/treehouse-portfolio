const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.listen(3000, () => { console.log('app is listening on port 3000') });

const projects = require('./data.json').projects;

app.use('/about', (req, res) => {
  console.log("In /about");
  res.render('about');
});

app.use('/project/:id', (req,res) => {
  console.log('In project route for', req.params.id);
  for (let project of projects) {
    if ( req.params.id === project.id ) {
      res.render('project', { project });
      break;
    }
  }
});

app.use('/', (req, res) => {
  console.log("In root fnc");
  res.locals.projects = projects;
  res.render('index');
});

# Treehouse portfolio for units 1-5 #

Project for Unit 6 - Node as a web server

Displays various client-side apps coded for units 1 - 5 of Full Stack JavaScript TechDegree program.
The project uses node.js as a web server for localhost:3000. Pages are rendered using Pug templates.

## Project Structure ##

### /project_starter_files ###

Mockup pages, CSS and starter Pug templates

### Public ###

Static files: CSS, images and client-side scripts

### Views ###

Pug templates for page rendering

### data.json ###

Projects' description and links to images.

### index.js ###

Main page which is launched in Node

## Routes ##

Routes are defined using Express get() and use() methods.

### / (root) ###

Main page displaying various projects. Project data is read from data.json. Page is rendered using index.pug

### /about ###

Information about my background, programming skills and contact info. Rendered using about.pug

### /project/... ###

The /project route searches the project data for an id that is equal to the URL segment following /project. If one is found the project data is passed to the project.pug template to render the project page. If a project is not found then the catch-all handler generates a 404 error.

### /error ###

Throw an error 400. Included to verify general error handler.

### catch-all route ###

If a route is not defined the catch-all handler creates an error object with status code 404 and forwards it to the general error handler.

### error handler ###

The general error handler renders a page using the error.pug template which displays the error message, status code and stack.

# Regarding Features for Extra Credit #

## Errors page ##

- Errors are redirected to an errors page defined with the error.pug template. It displays the error message, status code and stack. If status code is 404 an "error 404" image is displayed instead of the error message and status code.

## CSS ##

- On the index and project pages a different font is used for my name and the app names. They are imported from Google Fonts into layout.pug and used in the my-name and app-name classes defined at the bottom of style.css.

- On the index page hovering over a project expands it slightly. The effect is applied to index.pug using the app-cell class defined at the bottom of style.css.

- The "me" sidebar, on left side, has a background image of a computer screen. The image is added to layout.pug through the portfolio-bk-img class defined at the bottom of style.css. Also, the font colors for p and a elements in the portfolio-me class are changed to better contrast against the background image.

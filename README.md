# Treehouse portfolio for units 1-5 #

Project for Unit 6 - Node as a web server

Comments regarding Extra Credit functionality are at the bottom of this page.

Displays information pages for various client-side apps coded for units 1 - 5 in the Full Stack JavaScript TechDegree.
HTTP requests are handled with Express. Pages are rendered using Pug templates. 
Project pages include a link to their github repository from where they can be launched.

## To launch ##
1. In a terminal window: node index.js
2. In a browser open: localhost:3000

## Project Structure ##

### /project_starter_files ###

Mockup pages, CSS and starter Pug templates

### /public ###

Static files: CSS, images and client-side scripts

### /views ###

Pug templates for page rendering

### data.json ###

Projects' description and links to images and github.

### index.js ###

Main page which runs from Node

## Routes ##

Routes are defined using Express get() and use() methods.

### / (root) ###

Main page displaying various projects. Project data is read from data.json. Page is rendered using index.pug

### /about ###

Information about my background, programming skills and contact info. Rendered using about.pug

### /project/... ###

The /project route searches the project data for an id that is the same as the URL segment following /project/. If one is found the project data is passed to the project.pug template for rendering the project page. If a project is not found the catch-all handler generates a 404 error.

### /error ###

Throws an error 400. Included to verify general error handler.

### not-defined routes ###

If a route is not defined the catch-all handler creates an error object with status code 404 and forwards it to the general error handler.

### error handler ###

The general error handler renders a page using the error.pug template which displays the error message, status code and stack.

# Regarding Features for Extra Credit #

## Errors page ##

- Error conditions render a page using the error.pug template which displays the error message, status code and stack. If status code is 404 an "error 404" image is displayed instead of the error message and status code.

## CSS ##

- On the index and project pages a different font is used for my name and the app names. They are imported from Google Fonts into layout.pug and used in the my-name and app-name classes defined at the bottom of style.css.

- On the index page, hovering over a project expands it slightly. The effect is applied to index.pug using the app-cell class defined at the bottom of style.css.

- The "about me" sidebar has a background image of a computer screen. The image is added to layout.pug through the portfolio-bk-img class defined at the bottom of style.css. Also, in the portfolio-me class the font colors for paragraph and anchor elements are changed to contrast better against the background image.

# IT SPA

It's the second diploma project which I prepared for my postgraduate studies "frontend with React". This project was prepared using modern React with Redux with available hooks. For styling I used a little of a material UI with custom styled components styling. Structure of the project is a standard React structure with divided on components.

## How it works
![](mem.gif)

## Getting Started
1. git clone 
2. npm install
3. npm start - run the project

After finishing this orders you can display webpage on your device

Used technologies:
 1. Modern React with hooks - as a main library
 2. Redux with hooks - as a state management
 3. material UI for styling
 4. styled components for custom styling
 5. React lazy - for lzy loading images
 6. React router - for routing
 7. prettier and eslint for static code anlizing

Implemented solutions

 1. Routes /hot, /regular and /favourite
 2. Live filtering for mems (upvote - downvote > 5 ):
 HOT (upvote - downvote > 5)
 REGULAR (upvote - downvote <= 5)
 FAVOURITE - fav icon signed
 3. Simple menu for switching between sections
 3. Mem database in Redux store
 4. List of Mem components in grid - with scroll funcionality
 5. NavLink funcionality - clicked route has custom class
 6. Mem added to favourite
 7. Add new mem funcionality
    simple form validation: 
  - fields can't be empty
  - default image
  8.global styles

### Project architecture

Project is diveded on a few categories 
 1. assets - styles and all images
 2. components - smaller parts of code that build all views and main page components like navigation, modal, mem etc.
 3. reducers - initial redux state  
 4. views - all views that you can switch in navigation component  
 5. store - redux store
 6. root files: index.js,
 7. templates - material UI template - provide material UI styling with responsive app funcionality
 7. configuration files: eslint, gitigore, package.json etc.

### How did I create this project?

Project was prepared based on my own React and Redux template with custom prettier and eslint configuration

## Plan for future dvelopment
Unit tests in progress...

## Prettier and Eslint configuration
Project has implemented static code formaters

## Authors

* **Mateusz Grzejszczyk** - *Initial work* -

## License
Free licence

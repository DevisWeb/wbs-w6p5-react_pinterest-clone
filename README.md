# Fetch data - Create a [Pinterest](https://www.pinterest.com/) _[Clone](https://wbs-pinterest-clone.herokuapp.com/)_ with React

WBS Coding School - Team-Project 5 (week 6-7)

> Main goals while working with git and github in a remote team:
>
> **Routing, Fetch and Filter data using Axios Requests on Contentful API**
>
> > Prerequisites: React, ES6, HTML5, CSS3
>
> Time to accomplish: 2 weeks (2h+/day) | Team-Size: 4

---

### Table of Contents

- [Project Overview](#project-overview)
- [Requirements & Installation](#requirements-&-installation)
- [Technologies & Tools](#Technologies-&-Tools)
- [Resources](#resources)

---

# Project Overview

### Instructor-Guidance for developing this project

- **Preparation**

  - Contentful content types for user, post created
  - 4 users created, 20 posts created (entries)

- **Objectives**

  - Create a react app that uses that data on different routes

- **Steps required**

  - Initiate the react project
  - Link the project to github, set up collaborators

- **Further steps - What you will be able to do with this Application**

  - install and import react-router-dom in App.js
  - Define 2 main routes (more are optional): one route for allposts, the second for the best rated posts
  - Create two view components, one will be responsible to display on /allposts the other on /bestratedposts

    - **allposts view**

      - fetch all posts entries (axios) and display them in a card like component.
        The user referenced in the post must be displayed in the card (firstname lastname for example)
      - create an input field, a submit button (in our project we use a search bar)
      - on submit, fetch only the entries where the title contains the input text:

        [Contentful - Full text search on a field](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console)

      - update the state with the newly fetched entries

    - **best rated view**

      - Fetching posts where the grade field value is 5, using [search operator](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search) again
      - Fetch all entries where the grade is of 4 or more, order the entries by grade:

        [Contentful - Search Parameters](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order)

---

### Demo

For DEMO, go to: [Pinter-REST](https://wbs-pinterest-clone.herokuapp.com/)

# Requirements & Installation

This project requires [Node.js](https://nodejs.org/en/) v14.x.x to be installed on your machine.
To check your actual version, run:

```bash
$ node --version
```

### Installation

If you want to clone this repository, run:

```bash
$ git clone https://github.com/DevisWeb/wbs-w6p5-react_pinterest-clone.git
$ cd wbs-w6p5-react_pinterest-clone
$ npm install
$ npm start
```

---

# Technologies & Tools

| Technologies / Tools          | Used               | Notes                                   |
| :---------------------------- | :----------------- | :-------------------------------------- |
|                               |                    |                                         |
| [React](https://reactjs.org/) | :white_check_mark: | JavaScript Library                      |
| JS ES6                        | :white_check_mark: | ECMAScript 6                            |
| JSX                           | :white_check_mark: | Syntax extension to JavaScript          |
| CSS 3                         | :white_check_mark: | The Base for a nice UI                  |
|                               |                    |                                         |
| Github                        | :white_check_mark: | Version Control                         |
| Postman                       | :white_check_mark: | Testing queries for fetching data       |
| Contentful                    | :white_check_mark: | API-first - Content Management Platform |
|                               |                    |                                         |
| Browser Extension React       | :white_check_mark: | Adds React debugging tools to browser   |
| Editor (VS Code) + Extensions | :white_check_mark: | Extension recommended: Prettier         |
|                               |                    |                                         |
| Trello                        | :white_check_mark: | Quick & easy Project-Management         |
| Discord / Google Meet         | :white_check_mark: | Team Communication                      |
| Heroku                        | :white_check_mark: | Publishing                              |

---

# Resources

Guidance from wbs-instructor for developing the project, see above

### Further resources

**Contentful - CMS**

- [Contentful.com - API Doc - content-delivery-API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [Contentful - Overview](https://www.contentful.com/help/contentful-overview/)

**Postman - Simlify API Development**

- [Postman](https://www.postman.com/)
- [Learning Postman](https://learning.postman.com/)
- [Installing Postman - recommended](https://learning.postman.com/docs/getting-started/installation-and-updates/)

**Contentful - CMS - Queries**

- [Contentful.com - Full text search on a field > Filter entry by text](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field)
- [Contentful - Filter entry by text - Console](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console)
- [Contentful - Get all entries of a space - Console](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console)
- [Contentful - Get all entries in special order](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order)

**Libraries, Imports used in this project**

- [ractjs - ReactDom - provide DOM-specific methods](https://reactjs.org/docs/react-dom.html)
- [reactrouter - BrowserRouter](https://reactrouter.com/web/api/BrowserRouter)
- [npmjs - react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [npmjs - react AXIOS](https://www.npmjs.com/package/react-axios)
- [reactRouter - Hooks: useHistory, useParams](https://reactrouter.com/web/api/Hooks)
- [reactjs - Hooks API Reference: useState, useEffect](https://reactjs.org/docs/hooks-effect.html)
- [reactjs - Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [reactRouter - NavLink - to add styling attributes](https://reactrouter.com/web/api/NavLink)
- [npmjs - react Masonry CSS](https://www.npmjs.com/package/react-masonry-css)
- [fontAwesome with React](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [npmjs - fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
- [npmjs - Pluralize: singularize or pluralize a given word](https://www.npmjs.com/package/pluralize)
- [reactjs - Fragments - group multiple elements](https://reactjs.org/docs/fragments.html)

**Pictures**

- [Lorem Picsum - stylish placeholders](https://picsum.photos/)
- [Robohash - generate unique images](https://robohash.org/)

**Environment Variables**

- [Create-react-app - Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

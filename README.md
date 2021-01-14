# Fetch data - Create a [Pinterest](https://www.pinterest.com/) Clone with React

WBS Coding School - Team-Project 5 (week 6)

> Main goals while working with git and github in a remote team:
>
> **Routing, Fetch and Filter data**
>
> > Prerequisites: React, ES6, OOP, HTML5, CSS3
>
> Time to accomplish: 2 weeks (2h+/day) | Team-Size: 4

---

### Table of Contents

- [Project Overview](#project-overview)
- [Requirements & Installation](#requirements-&-installation)
- [Resources](#resources)

---

# Project Overview

### Instructor-Guidance for developing-process

- **Preparation**

  - Contentful content types for user, post created
  - 4 users created, 20 posts created (entries)

- **Objectives left**

  - Create a react app that uses that data on different routes

- **Steps required**

  - Initiate the react project
  - Link the project to github, set up collaborators

- **Further steps**

  - install and import react-router-dom in App.js
  - Define 2 main routes (you can create more if you want to enhance your app) one route for allposts, the second for the best rated posts
  - Create two view components, one will be responsible to display on /allposts the other on /bestratedposts

    - **allposts view**

      - fetch all posts entries (axios) and display them in a card like component. The user referenced in the post must be displayed in the card (firstname lastname for example)
      - create an input field, a submit button
      - on submit, fetch only the entries where the title contains the input text, [Contentful - Full text search on a field](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console)
      - update the state with the newly fetched entries

    - **best rated view**
      - fetch all entries where the grade is of 4 or more, order the entries by grade, [Contentful - Search Parameters](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order)

### Demo

For DEMO, go to: link will be added soon

---

### Technologies & Tools

| Technologies / Tools | Used | Notes |
| :------------------- | :--- | :---- |
|                      |      |       |

---

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

# Resources

Resources from instructor of wbs:

- Guidance for developing the project, see above
- [Contentful.com - API Doc - content-delivery-API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [Contentful.com - Full text search on a field > Filter entry by text](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field)

### Further resources:

**Contentful - CMS**
[Contentful - Overview](https://www.contentful.com/help/contentful-overview/)
[Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
[Contentful - Filter entry by text](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field)
[Contentful - Filter entry by text - Console](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console)
[Contentful - Get all entries of a space - Console](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console)

**Environment Variables**
[Create-react-app - Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

# Palette Picker FE

Palette Picker is a React App allows users to view color palettes, name and save them in projects.

### Focuses

- Server-side testing.

- Complete CRUD endpoints.

- Connecting BE & FE repositories using CORS.

- ultiple environments:
  - Testing.
  - Making use of automatic continuous integration with TravisCI
deployment with Heroku.

- Developing professional-level workflow habits.
  - Using a PR template.
  - Conducting code reviews in PRs.
  - Detailed agile workflow using a kanban system or GH issues
keeping track of MVP features and nice-to-have features.
  - Agreeing to a commit message template.
  - Exploring git rebase and squashing.
  - Highly semantic, specific, professional documentation (README, API documentation, etc).
 
### Planning

- In developing our plan, we used Githubs built in projects board, in a kanban style.

[See our project board here](https://github.com/users/VPAbraham/projects/1)

- Previous to building this app, we developed a backend, with Node.js using the Express framework and a PostgreSQL database.

[View the backend repository developed alongside this application here](https://github.com/VPAbraham/palette-picker-BE)

- As we began the planning stage, we decided upon a relatively simple schema for our data.

![Backend schema](https://user-images.githubusercontent.com/30779453/70680645-17c87600-1c56-11ea-8f79-57ff0029c354.png)

- Ultimately, we decided upon this dataflow between our React app and database.

![Data map](https://user-images.githubusercontent.com/30779453/70680657-1e56ed80-1c56-11ea-826f-aeb1faca1a01.png)

### Inspiration

- Biking kits are great inspiration for simple, geometic designs. This jersey from TwinSix was a spark of inspiration since a plus symbol is made up of five equally sized squares and we wanted to display five colors.

<img width="564" alt="Screen Shot 2019-12-02 at 8 58 38 PM" src="https://user-images.githubusercontent.com/46699896/70727387-86114500-1cf7-11ea-97e3-01a7ec5f024b.png">

### Screenshots

InVision Prototype

- Next, a design is implemented and basic user flow is considered. Here is a clickable InVision Prototype: Click on a movies from the home screen then the main logo to get back.

https://projects.invisionapp.com/prototype/ck3vt0vk700dgef01pfzx9mcb/play

Live Site

- Palette Picker home page

![Palette Picker home page](https://user-images.githubusercontent.com/30779453/70680201-a9cf7f00-1c54-11ea-8cd9-62e952820e6e.png)

- Project and palette creation

![Project and palette creation](https://user-images.githubusercontent.com/30779453/70680206-ad630600-1c54-11ea-90d7-2a359366a957.png)

- Browse your saved palettes and projects

![Browse your saved palettes and projects](https://user-images.githubusercontent.com/30779453/70680204-ab994280-1c54-11ea-9ca8-50cafd256b9e.png)

### Tech

- Back-End: build using Express, knex, and PostgreSQL. Each API endpoint should respond with JSON-formatted data.

- Front-End: build using React utilizing SCSS.

- Tested with Jest/Enzyme.

### Team

- Victor Abraham (https://github.com/VPAbraham)

- Quinne Farenwald (https://github.com/qfarenwald)

### Set Up

Clone repo.
```
git clone 
```
Install dependencies.
```
npm install
```
Run browser.
```
npm start
```

And enjoy!

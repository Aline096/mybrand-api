# Badges

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Aline096/mybrand-api/tree/feat%2Fauthentication.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Aline096/mybrand-api/tree/feat%2Fauthentication)

[![Coverage Status](https://coveralls.io/repos/github/Aline096/mybrand-api/badge.svg?branch=feat/authentication)](https://coveralls.io/github/Aline096/mybrand-api?branch=feat/authentication)

# My Brand Api

## Description

This API serves as a middleman between a JavaScript-based front-end website and a MongoDB database for storing some of the site's data on a personal blog portfolio.


### API ENDPOINTS

#### Users

| HTTP Request | Endpoint               | Description                       |
| :----------- | :--------------------- | :-------------------------------- |
| `POST`       | `/api/user/signin`     | Admin signin         |

#### Article

| HTTP Request | Endpoint                 | Description                         |
| :----------- | :----------------------- | :---------------------------------- |
| `GET`        | `/api/article`          | Used to get all the article available |
| `POST`       | `/api/article`          | Used to create a new blog             |
| `GET`        | `/api/article/id` | Used to get a single blog           |
| `PUT`        | `/api/article/id` | Used to update a blog               |
| `DELETE`     | `/api/article/id` | Used to delete a blog               |

#### Comment

| HTTP Request | Endpoint               | Description                       |
| :----------- | :--------------------- | :-------------------------------- |
| `PATCH`       | `/api/comment/articleId`     | Used to put a comment on article        |

#### Like

| HTTP Request | Endpoint               | Description                       |
| :----------- | :--------------------- | :-------------------------------- |
| `PATCH`       | `/api/like/articleId`     | Used to like article        |
| `PUT`       | `/api/like/articleId`     | Used to unlike article        |

#### Message

| HTTP Request | Endpoint                       | Description                       |
| :----------- | :----------------------------- | :-------------------------------- |
| `GET`        | `/api/message`             | Used to get all the messages sent |
| `POST`       | `/api/message`             | Used to send message        |
| `GET`        | `/api/message/id` | Used to get a single blog         |
| `DELETE`     | `/api/message/id` | Used to delete a message          |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASEURL`

`DATABASEURL_TEST`

`JWT_SECRETE`

`CLOUDINARY_URL`


## Installation

-  Clone this repository or download it.
-  Run "npm install" in your terminal
-  Run "npm start" to run server


## Used Technologies

### Build With

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

### Tested With

- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

### Deployed

- [heroku](https://www.heroku.com/)

## Author

- [UWERA Aline](https://github.com/Aline096/)
# REST API students application

This is a CRUD application for student's info

The **Postgresql** database and **Sonarqube** are contained within the `docker-compose.yml` file



## Pre-requisites
- Docker
- NodeJs


**Add .env file into prisma folder with the database URL**

    DATABASE_URL="postgres://sonarqube:sonarqube@localhost:5433/students"

## Install packages
    npm install
## Set-up docker-compose environment
    docker-compose up -d

## Set-up prisma 
    cd src && npx prisma generate
## Run the tests
    npm run test
## Run the app
    npm start


    
#   REST API
### /api/students
* `GET` : Get all students
    #### GET request:
        http://localhost:4000/api/students
    #### Example output:
        [{"cedula":"1001636548","name":"Juan Camilo","email":"camilo@gmail.com","phone":"3203232323","career":"Ing sistemas"},{"cedula":"1001639741","name":"Juan Pablo","email":"pablito3@gmail.com","phone":"323256245","career":"Ing química"}]
* `POST` : Create a new student
    #### POST request:
        http://localhost:4000/api/students
    #### Body 
        {
        "cedula": "1001519284",
        "name": "Pablo Lopez Rosales",
        "email": "pablito10@gmail.com",
        "phone": "42423254232",
        "career": "Ing industrial"
        }
        
*  `PUT` : Update a specific student
    #### Put request
        http://localhost:4000/api/students

    **Updating name and email**
    #### Body
        {
        "cedula": "1001519284",
        "name": "Pablo Lopez Yepes Bedoya",
        "email": "pablito20@gmail.com",
        "phone": "42423254232",
        "career": "Ing industrial"
        }

*  `DELETE` : Delete a specific student
    #### Delete request
        http://localhost:4000/api/students



# dot-env-example

This project is a very simple application meant simply to show how to use the dotenv package in a nodejs project.

The dotenv package allows the use of a .env file to keep environment variables instead of declaring the values when the app is started.

i.e instead of having to do this,
```
HOST=localhost PORT=1337 node app.js
```

One can simply create a .env file and set the variables there.

*The project contains a env-example file that you can copy into the .env file to help you out.*

## Setup
```
npm install
```

## Use
__*Make sure you have created your .env file and have set values for HOST and PORT.*__

```
npm start
```

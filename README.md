# Cornucopia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Simple steps to get started
This paragraph just contains the steps to get started. For more information read the rest of this file.

Setup:
1. Install json-server
  `npm install -g json-server`
2. Run the json-server in this project's directory in a terminal and launch the JSON file
  `json-server --watch mock-data.json`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

For development purposes we use JSON server as the backend for our project. In order to get the json-server up and running complete the following steps:
1. Install json-server
  `npm install -g json-server`
2. Run the json-server in this project's directory in a terminal and launch the JSON file
  `json-server --watch mock-data.json`
  The browser will reload automatically when the JSON file with mock data changes.
3. Open your browser at the indicated URL. You can test the different paths using this URL followed by the path names specified in the mock-data.json file, e.g. http://localhost:{{port}}/products.
4. Use the json-server URL in the API services in the Angular app.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

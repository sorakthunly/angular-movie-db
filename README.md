![image](https://user-images.githubusercontent.com/19909685/60700707-2b9bdd80-9f3c-11e9-9da6-bccf0b336dbc.png)

Live Application with Firebase: https://angular-movie-db.firebaseapp.com

# Angular Movie DB

The application allows users to browse popular movies and search for any movies of their choice by keywords. Users can select any movie displayed to preview the detail.

## What's Included

- Unit testing with Jest instead of Angular default - Karma and Jasmine - for performance reason
- Continuous integration and deployment with Firebase and Circle CI
- Enhanced linting tools with Prettier and Tslint
- Commit hook for linting with Husky and Lint-staged

## Time Constraints (FYI)

- Test coverage isn't widespread, so only a handful are done
- In production, the app could be hosted on an Express server and route each API request through the server to mask the API Key and make it more secure rather than requesting from the Movie DB API directly. However, for time constraint reasons, I wrote an environment variables generator script so that the app could access them but the key only lives in the build (CICD) server (not exposed in codebase)

## Environment Variables

This application makes API authenticated requests. You should set the environment key(s) before running the development server or build.

```console
export API_KEY=yourapikeyhere
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://github.com/facebook/jest).

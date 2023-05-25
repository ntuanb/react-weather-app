# React Weather App

A forecast app that shows the weather details for the next 7 days based on the user's specified location.

## Requirements

- Node 16

### Install

- To install the reqiured files, run the following commmand:

```
npm i
```

### Development

To start a development server, run the follwoing command:

```
npm start
```

Once the server starts, visit the following url [http://localhost:3000/](http://localhost:3000/).

Change the location by typing in a valid address.

### Build 

To build the application for deployment, run the following command:

```
npm run build
```

### Deploy - Github Pages

To deploy to the Github Pages, update the `package.json` homepage and run the following command:

```
npm run deploy
```

### Linting, Unit and Integration Tests

The following commands can be added to the CI pipeline to ensure code quality is met.

Run the following command to run the linting and unit tests:

```
npm run lint
npm run unit
npm run integration
```
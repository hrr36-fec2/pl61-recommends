# Scootify (Recommended Tracks Component)

  Scootify is a music streaming service modeled after Spotify. This is the app responsible for the recommended tracks component.

## Related Projects

  - https://github.com/hrr36-fec2/Eliana-playback-service
  - https://github.com/hrr36-fec2/fren-playlist

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Recommends from './components/recommends.jsx';

ReactDOM.render(
  React.createElement(Recommends),
  document.getElementById('recommends')
);
```

## Requirements

- Node 11.6.0

## Development

Front end built with React and styled-components. Server uses Node.js with Express. Database implemented using MySQL.

*The app will auto-seed the database on load if no database with the name 'hrr36_fec2' is detected. Clicking the 'Refresh' button on the page while holding 'alt' and 'shift' keys will drop existing instance of the 'hrr36_fec2' database. Refresh the page to re-seed.*

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install

npm run seed
npm run build
npm start
```

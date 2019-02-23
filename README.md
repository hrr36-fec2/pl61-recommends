# Scootify (Recommended Tracks Component)

  Scootify is a music streaming service modeled after Spotify. This is the app responsible for the recommended tracks component

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

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install

npm run db
npm run seed
npm run build
npm start
```

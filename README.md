# Zepto AI Test

This web app fetches data from an api using [axios](https://www.npmjs.com/package/axios). Before the data is loaded, a loading animation appears on acitivity screen. Once the response from the api is received, the data is rendered. In case of any error, an error message is displayed.

## Try it Yourself

Either clone the app or download the master branch. You can clone using the following command.

`git clone https://github.com/alinauroz/zepto-ai-test.git`

After this go to the _zepto-ai-test_ directory and install dependencies using `npm i`. Once depencies are installed, you can start the web app using `npm run start` or `yarn start`.

## Available Scripts

You can use _yarn_ as well as _npm_. Below scripts assumes you are using _yarn_. If you are usinh _npm_, replace _yarn_ with _npm run_.

### `yarn start`

Runs the app in development mode. 

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode. Button component has the most tests.

### `yarn docs`
Generates the documentation of the app using [JSDoc](https://www.npmjs.com/package/jsdoc). The documentation is available in _docs_ directory.

### `yarn lint`

Identify and report the problematic patterns. This will help to keep consistency in the code.

### `yarn lint:fix`

Some problematic patterns are fixable automatically. This script will fix those problems.

## Directory Overview

### docs
contains the documentation

### src/components
contains the app components. Every directory inside this directory contains a jsx file and a css file. Most of them also have test files. Components can be tested using `yarn test`.

### src/hooks

contains custom hooks. So far, there is only one hook, _useRequest_. This hook uses _axios_ to send http/https requests. One of the benefits of using hook is below.

```
// without hooks
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState('');
const [response, setResponse] = useState(null);

useEffect(() => {
  // code to fetch data and update state
});

// with hooks
const { isLoading, error, response } = useRequest({ route: 'test/people', query: { period: 'day' } });

```

### src/res
contains files to store texts, colors, api data etc which will be used in the project.

### src/utils
contains only one function, toQueryStr, so far. 
_toQueryStr_
Using JSON instead of query string in the code decreases chances of an error. This functions takes an object and returns query string.
```
toQueryStr({
    period: 'day',
    limit: 10,
    offset: 100
});

// ?period=day&limit=10&offset=100
```

## Produce an Error

There many ways to create an error. The easiest way is to change the api address in _res/api.js_.
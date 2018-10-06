This project was initialised with [Create React App] which gives the boilerplate with the config to develop and run react app.

## Table of Contents

- [Instruction to run](#instruction-to-run)
- [Scope of Improvement](#scope-of-improvement)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Supported Browsers](#supported-browsers)

## Instruction to run
- Unzip the file.
- Open terminal.
- Go to the folder.
- Do `npm install`. (Make sure you have npm installed in your system)
- Do `npm start` to run the application. Check http://localhost:3000]
- Do `npm test` to run the tests. 

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    Component/
      Header/
        Header.css
        Header.js
        Header.test.js
      ResultPanel/
        EmployeePairTile/
          EmployeePairTile.css
          EmployeePairTile.js
          EmployeePairTile.test.js
        ResultPanel.css
        ResultPanel.js
        ResultPanel.test.jss
      Toolbar/
        ToolBar.css
        ToolBar.js
        ToolBar.test.js
    Services/
      ServiceProvider.js
    Utils/
      Svg.js
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

Only files inside `public` can be used from `public/index.html`.<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Scope Of Improvement
- The shuffle logic should be implemented in server and once shuffled the data should be stored, so that all the employee can see the same data. 
- This view is only for a week. It should be available for all the weeks and the user should get an option to select the week to view the pairs.
- If we can integrate this with a login page, then the person login in, should not see the pair in which he/she is a receiver.
- If the data is huge we can implement pagination with scrolling and call the end point for a particular page instead of getting all the data together.
- Along with this usecase we can have an admin page where only an admn can come an referesh the shuffle, if needed.
- If this is a part of big application we could have used a central store Redux to update the state. To reduce the complexity and the bundle size I haven't used redux for this small usecase.
- We could have used css preprocessor like SASS, LESS incase of big application to maintain css better.

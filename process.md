# This file contain the step by setp process of developing this web app
## Install react.js
- First create a react app by using `npx create-react-app ./` [./ will help us to make a create a react app in same folder]
    - This above command will create following files and folders
        - node_modules
        - public
        - src
        - .gitignore
        - package-lock.json
        - package.json
        - README.md
    - But we have to only work on src folder only.
- Next, delete `App.css`, `App.text,js`, `logo.svg`, `reportWebVitals.js`, `setupTest.js` files in the src folder. 
## Install TailWind.css
- Next install tailwind in the created react app by `npm install -D tailwindcss` 
    - This command will help us to install tailwind
- Next initalize the tailwind.config.js file by `npx tailwindcss init`
    - The above file help us to add the tailwind.config.js file to our react folder.
- Next modily the tailwind.config.js file by 
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Next modify the index.css by 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Next add global styles in the index.css
- `Note:` To access tailwind code pop ups install tailwind css intelisense vsCode extension.
- Next type `npm start` to start the application.
- we found that 3 errors popping up because we deleted the some folders before
- To remove error clear the code in app.js from header to header
- Then remove reportwebVitals import and last line the index.js file.
- Then we don't get any errors.
- Then create an `components` folder in src folder.
- Then create a `Navbar.jsx` file inside the components folder.
    - jsx is commonly used in react projects
    - Jsx is an extension of js
    - JSX allows developers to write HTML like code within JavaScript,
    - JSX code is transpiled (converted) into regular JavaScript code by tools like Babel before being executed by the browser.
    - where js is used in pure havascript projects.
- Then import the Navbar into the App.js
- Next install react icons by `npm install react-icons`
- Then start writing code on navbar.jsx
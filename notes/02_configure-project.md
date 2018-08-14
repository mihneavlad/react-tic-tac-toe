# Configuring a new react project w. eslint and sass

1. Run `npx create-react-app <app-name>`
2. Rename `<title>` in `public/index.html`
3. Delete all files from `src` except for `src/index.js` and `src/registerServiceWorker.js`
4. Add `.eslintrc` with the following lines:

  ```json
  {
    "extends": "react-app"
  }
  ```
5. Follow instruction in [Dominik's tutorial](https://github.com/noreading/react-redux-introduction#5-adding-scss-for-styles) to add sass to our project
6. Add `src/**/*.css` to `.gitignore`
7. Import our new styles into `index.js`: `import './<style-folder>/<file-name>.css'`;

## Exercise time
- Add sass to your existing Hello react project

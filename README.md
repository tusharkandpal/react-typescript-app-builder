# react-typescript-app-builder

A quick start package for your next `react w/ typescript` project

👉 [_Live Link_](https://react-typescript-app-builder.netlify.app/)

## Key Features

- [x] webpack and Babel support
- [x] Vendor chunking by default
- [x] ES6 fully supported
- [x] Hashing by default for .js
- [x] import/export (ES Modules support)
- [x] Config files for dev and prod mode

## Get Started

Install `degit` if it's not already installed

```cmd
npm i -g degit
```

Run the `degit` command to get the files from repo, give your app name

```cmd
degit tusharkandpal/react-typescript-app-builder#dev my-new-project
```

Go inside your app's directory

```cmd
cd my-new-project
```

Get the required node modules

```cmd
npm install
```

Start the dev server and start coding!

```cmd
npm run start
```

**Optional**:

If you want to add more loaders or plugins, please add them accordingly in the dev or prod webpack config.

## Dev Dependencies

- **webpack** - to configure the app
- **webpack-cli** - to use webpack on command line
- **webpack-dev-server** - used to live reload the webpage so that we can view our changes without refreshing the page manually.
- **webpack-merge** - `merge` function that concatenates arrays and merges objects creating a new object.
- **@types/react** - contains type definations for React.
- **@types/react-dom** - contains type definations for React DOM.
- **ts-loader** - to load `.tsx` files.
- **css-loader** - interprets @import and url() like import/require() and will resolve them.
- **style-loader** - Inject CSS into the DOM.
- **html-webpack-plugin** - to create HTML files and serve your bundle.


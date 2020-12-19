<$>[draft]
**Draft:** This is a Draft of the markdown file for the tutorial
<$>
# How to Build a Landing Page with Gatsby and TypeScript

### Introduction
Since TypeScript was first released in 2012, it has become a popular alternative to JavaScript. This is because its a superset of JavaScript that adds optional static typing *at build time*, which cuts down on debugging early on. At the same time, since it was first released in 2015, Gatsby has emerged as a great static site generator. It is ideal for building compelling static content such as landing pages, which we will be building in this tutorial. 

Landing pages are relatively light in complexity since they come with predicable components of content. For this tutorial we are going to build a landing page for a book store, and it will include: 

* a header that typically includes the name of the business and the product/ service
* a "hero image" that acts as a supportive visual for the business/ product
* some information about what the product/ service is and perhaps a list of features
* a signup form for the reader to be sent more information (usually by email)

This will be ideal for getting introduced to Gatsby, as well as learning to code with TypeScript. 

## Prerequisites
To follow this tutorial, you will need: 

* Node and npm (or yarn) installed
* the Gatsby CLI package (for creating the new project) installed
* Sufficient knowledge of JavaScript, especially with Objects and ES6+ syntax
* Familiarity with React, since Gatsby is a React-based frontend framework

Additionally, if you are using an editor besides Visual Studio Code, you may need to go through a few extra steps to make sure you have TypScript performing type-checks at build time and showing any errors. For example, if you're using Atom, you'll need to install [a package](https://atom.io/packages/atom-typescript) (and some others, maybe) to be able to achieve the TypeScript editing experience. 

## Step One - Create a New Gatsby Site with `gatsby new`
Before getting into TypeScript, we must first create the site as a new Gatsby project. 

Open your computer's console/ terminal and run the following command: 

```
gatsby new book-store-landing-page
```

This will take a few seconds to run as it sets up the necessary boilerplate files and folders for the Gatsby site. After it is finished, `cd` into the project's directory. 

```
cd book-store-landing-page
```

To make sure the site's development environment can start properly, run the following command: 

```
gatsby develop
```

After a few seconds, you should see the following message in the console: 

```
You can now view gatsby-starter-default in the browser.

  http://localhost:8000
```

Usually, the default port nunber is `8000` but you can change this by running `gatsby develop -p [some-other-number]`, instead. Head over to your preferred browser and type `http://localhost:8000` in the address bar to see the site. It should look like this: 


![Gatsby Default Starter Site](https://www.gatsbyjs.com/static/adce8d74483b529a1183d8bfdc0f8a38/73c85/c62f83895ef3ed01fba96da185277ae5.png)

## Step Two - Install `gatsby-plugin-typescript` and Other Necessary Dependencies

In order to set up support for TypeScript in Gasby, we'll need to install a crucial plugin. 

### `gatsby-plugin-typescript`

While the `gatsby-plugin-typescript` plugin is supposed to come already installed with a freshly-created Gatsby project, you will need to explicity install (or add) the plugin if you wish to override any of its default settings in the `gatsby-config.js` file: 

```
npm (or yarn) add gatsby-plugin-typescript
```

This Gatsby plugin makes writing `.ts` and `.tsx` files in TypeScript possible. Next, add it to the `plugins` array in the `gatsby-config.js` file. 

```
// gatsby-config.js

module.exports = {
  siteMetaData: {
    ...
  },
  plugins: [
    ...,
    'gatsby-plugin-typescript'
  ]
}
```

There is one important caveat about this plugin, however: it doesn't include type-checking at build time. But this is supposed to be a core feature of TypeScript. Again, if you're using VS Code, this shouldn't be too much of an issue beacuse TypeScript is a supported language. But if you're using another editor, like Atom, will need to do some extra configurations to achieve a full TypeScript development experience.

### `@types` for React
This is optional, but since Gatsby is a React-based framework, adding some additional React-related typing doesn't hurt. 

To add type-checking for types specific to React:

```
npm add @types/react
```

To add type-checking for types related to the React DOM: 

```
npm add @types/react-dom
```

## Step Three - Configure TS for Gatsby with `tsconfig.json` File
Next, let's create a `tsconfig.json` file, which will allow us to override some of TypeScript's default compiler settings. This can be important because inside it, you're specifying the root directory of the TypeScript compiler. The bulk of these configurations, however, are handled in a `compilerOptions` object, which is another critical piece of the `tsconfig.json` file. Borrowing from the [`gatsby-starter-typescript-plus`](https://github.com/resir014/gatsby-starter-typescript-plus) starter: 

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["dom", "es2015", "es2017"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false,
    "preserveConstEnums": true
  },
  "include": ["./src/**/*"]
}
```

Some options worth mentioning: 

`jsx` - setting for how JSX is treated in `.tsx` files. The `preserve` option leaves the JSX unchanged.
`lib` - an array of specified type-definitions of different JS libraries/ APIs ("dom", "es2015", etc)
`strict` - when set to `true`, this enables TypeScript's type-checking abilities at build-time

You can learn more about these different options and they do by checking out [TypeScript's reference guide](https://www.typescriptlang.org/tsconfig#esModuleInterop) for `tsconfig`.

## Step Four - Implement TypeScript by Refactoring Exisiting, Boilerplate-Files
Luckily, Gatsby comes with a built-in, IDE-like editing experience for TypeScript. Gatsby believes that adopting TypeScript in your workflow "can and should be incremental", and so this tutorial will honor that sentiment by going over these 3 core TypeScript concepts for the next two steps: 

* some basic types
* defining types and interfaces
* working with build-time errors

### Basic Types in TypeScript
TypeScript supports simple datatypes including: 

* `boolean`

```
const isToggled : boolean = false 
```
The `boolean` type is the simplest datatype; it either equals `true` or `false`. In the code snippet above, we're using the `: boolean` syntax to indicate that this constant variable is of type `boolean`. 

* `number`

```

### Defining Types and Interfaces

### Build-Time Errors


## Step Five - Use React Components to Build the Page

## Conclusion

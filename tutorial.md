<$>[draft]
**Draft:** This is a Draft of the markdown file for the tutorial
<$>
# How to Build a Landing Page with Gatsby and TypeScript

### Introduction
TypeScript is a superset of JavaScript that adds optional static typing *at build time*, which cuts down on debugging runtime errors. It's grown into a powerful alternative to JavaScript over the years. At the same time, Gatsby has emerged as a great frontend framework for creating powerful static websites. Another wonderful feature of Gatsby is it's built-in support for coding in TypeScript. For this tutorial, we're going to learn to integrate TypeScript in a Gatsby project by building a landing page for a book store.

The landing page will include:

* a header for the bookstore
* an image that relates to store (the "hero-image")
* a compelling, selling message, possibly with a list of features/ services
* a sign-up form for the reader to be sent more news and information about the bookstore (usually done by email)

After this tutorial, you will have learned to build an amazing landing page that utilizes the best of Gatsby and TypeScript. 

## Prerequisites
To follow this tutorial, you will need: 

* Node and npm (or yarn) installed
* The Gatsby CLI package (for creating the new project) installed
* Some familiarity with using GraphQL to query for image data
* Sufficient knowledge of JavaScript, especially with Objects and ES6+ syntax
* Familiarity with React, since Gatsby is a React-based frontend framework

Additionally, if you are using an editor besides Visual Studio Code, you may need to go through a few extra steps to make sure you have TypScript performing type-checks at build time and showing any errors. For example, if you're using Atom, you'll need to install [a package](https://atom.io/packages/atom-typescript) (and some others, maybe) to be able to achieve a true TypeScript experience. 

## Step One - Create a New Gatsby Site with the `gatsby new` command
Before getting into TypeScript, we must first start a new Gatsby project. 

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

Before moving on, go ahead and delete any header, text and `Link` tags in the `index.js` file along with the `divs` surrounding the `Image` component. They won't be needed.


## Step Two - Install `gatsby-plugin-typescript` and Other Necessary Dependencies

In order to set up support for TypeScript in Gasby, we'll need to install an important plugin. 

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

There is one important caveat about this plugin, however: it doesn't include type-checking at build time (a core function of TypeScript) Again, if you're using VS Code, this shouldn't be too much of an issue beacuse TypeScript is a supported language in Visual Studio. But if you're using another editor, like Atom, you will need to do some extra configurations to achieve a full TypeScript development experience.

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
Next, let's create a `tsconfig.json` file. It has two primary purposes: (1) establishing the root directory of the TypeScript project (`include`) and (2) overriding the TS compilers default configurations (`compilerOptions`). Borrowing from the `tsconfig` file of the  [`gatsby-starter-typescript-plus`](https://github.com/resir014/gatsby-starter-typescript-plus) starter: 

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

You can learn more about these different options and they do by checking out [TypeScript's reference guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for `tsconfig`.  

We are now able to write in TypeScript for our Gatsby project!

## Step Four - Implement TypeScript by Refactoring Exisiting, Boilerplate-Files
<$>[note]
**Note:** For this step, most of the code examples will be focused on the `seo.txt` file in the `src/components` directory. What's talked about in these examples **must** be applied to the other boilerplate files (`header.tsx`, `layout.tsx`, etc) and a few other files that will be created in the next and final step of the tutorial.
<$>

Gatsby believes that adopting TypeScript in your workflow "can and should be incremental", and so for this step, we'll cover these 3 core TypeScript concepts: 

* some basic types
* defining types and interfaces
* working with build-time errors

### Basic Types in TypeScript
TypeScript supports [simple datatypes](https://www.typescriptlang.org/docs/handbook/basic-types.html) including: `boolean`, `number`, `string`, `Array`, `any`, etc... These are the major building blocks upon which TypeScript is possible. If you have ever worked with languages like Java and C#, then the syntax may feel familiar. If not, that's okay. The major syntactical difference with TypeScript, compared to JavaScript, is that variables can now be defined with an associated type. For example: 

```
let num: number; //num is of type 'number'
num = 0

let str: string; //str is of type 'string'
string = "TypeScript & Gatsby"

let typeScriptIsAwesome: boolean; //typeScriptIsAwesome is of type 'boolean'
typeScriptIsAwesome = true;
```

Let's get started with integrating TypeScript by taking a look at the `defaultProps` and `propTypes` declarations in the `seo.js` file: 

```
// src/components/seo.js
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
```
By default, a Gatsby site's SEO component comes with the `defaultProps` and `propTypes` explicitly declared. For example, in the `meta` prop (or *alias*) of the `propTypes` object, it's value is an array of objects, each of which is itself a prop of the `PropTypes` component. Some props are marked as required (`isRequired`) while others are not, implying they are optional. Go ahead and delete `defaultProps` and `propTypes` (along with the `import` statement for the `PropTypes` at the top of the file) and we'll write out the type aliases with TypeScript.

### Defining TypeScript Interfaces
While we could use the `type` keyword, `interface` is preferrable because you can add more properties to them if you want and they resemble and behave like JavaScript objects. It also achieves both goals of `defaultProps` and `propTypes` by defining the "shape" of a property-value object-like structure, establishing the static datatypes associated with each property, and telling whether or not a property is required for it to be associated with a variable or function argument (more on that shortly).  Building an `interface` is like building a regular JSON object. The key difference is that you can write "of what type" each property is:

```
// src/components/seo.tsx
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string,
  lang?: string,
  meta?: Array<{name: string, content: string}>,
  title: string
}
```

The new `Props` interface defines 4 props: `description`, `lang`, `meta`, and `title`. Each of their basic datatypes are definied on the right-side of the `:` colon. In TypeScript, if a `?` is beteween the prop name and the colon, the prop is ***not required*** in future variable declarations of this type; the only prop that is required for `Props` is `title`, of type `string`. The optional `meta` prop is interesting. It's value is of type `Array` and inside the `<>` arrows is the *generic array type* definition. This denotes that each element of this `meta` array is this same type. In this case, the generic array type is an object with required props `name` and `content`, both of type `string`.

<$>[note]
**Note:** One common growing-pain of beginning to learn TypeScript is the additional syntax that comes with variable and property declarations. With time, this will hopefully feel like less of an issue. The reason for the extra syntax is so that TypeScript's build-time type-checkers function properly and your time spent looking for and fixing bugs is a fraction of what it once was.
<$>

### Typing a Function
Just like in JavaScript, functions play an important role in TypeScript applications. We can even type functions by specifying the datatype of the arguments passed into them. In the `seo.tsx` file, let's go ahead and work on the defined `SEO` function component. Under where the interface for `Props` was defined, we're going to explicity declare the type of the `SEO` component's function arguments, along with a return type of `Props` right after:

```
function SEO({ description='', lang='en', meta=[], title }: Props) {
  ...
}
```

Remember: we *at least* have to include the `title` in the list of arguments passed to the `SEO` component because it was defined as a required property in the `Props` interface we defined earlier. 


### Refactor boilerplace to be TypeScript-compliant
Lastly, you can revise the `metaDescription` and `defaultTitle` constant declarations by setting their type, which is `string` in this case. 

```
  const metaDescription: string = description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title
```

Another interesting type in TypeScript is the `any` type. For situations where you're dealing with a variable who's type is unclear or difficult to define, use the `any` as a last resort to avoid any build-time errors.

An example of using the `any` type is when dealing with data fetched from a third-party, like an API request or a GraphQL query. In the `seo.tsx` file, where the destructured `site` property is defined with a GraphQL static query, let's set its type to `any`: 

```
function SEO({ description='', lang='en', meta=[], title }: Props) {
  const { site }: any = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  ...
}
```

It's important to always keep the defined values consistent with their type. Otherwise, you will see build-time errors appear via the TS compiler.

### Build-Time Errors
Speaking of build-time errors, it will be helpful to become accustomed to the errors TypeScript will catch and report at build-time. The idea is that TypeScript catches these errors, mostly type-related, at build-time and this cuts down on the amount of debugging in the long run (in compile-time).

One example of a build-time error occuring is when you declare a variable of one type but assign it a value that is of another type. If we were to change the value of one of the keyword arguments passed to the `SEO` component to one of a different type, the TS compiler will detect the inconsitency and report the error: 

![Imgur](https://i.imgur.com/smG55LB.png?1)

<$>[note]
**Note:** Before proceeding to the next step, make sure to refactor the `layout`, `image` and `header` files by changing their file extention to `.txt` and 
<$>

## Conclusion
While TypeScript seems like a steep hill at first, after a whlie, you will begin to see it's benefits. It's static-typing capabilities go a long way in keeping debugging at a minimum. It's also a great language for Gatsby sites since it's supported by defaut. Gatsby, in its own rite, is a wonderful front-end tool for creating static-sites like the landing page we just made. You now have two exceptional, modern and increasingly popular tools at your disposabl. What will you build next? 

To learn more about TypeScript and all the exciting things you can do with it, head over to their [offical handbook](https://www.typescriptlang.org/docs/handbook/intro.html).


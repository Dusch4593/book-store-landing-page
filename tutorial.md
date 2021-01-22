<!--NOTE: Hi Brandon! Thanks for this article; there is a lot of valuable content here, and I appreciate the technical context that you give your readers.

Although I really like all the information throughout, I think there is room here to focus the article. The most successful articles on our platform are ones that have a single teaching goal in mind from the get-go, and then ensure that every section of the article reflects upon that goal. Though the individual sections of your article are quite well-focused, I think as a whole there are three distinct teaching goals: 1.) Explaining how to set up Gatsby with TypeScript, 2.) Explaining the basic concepts of TypeScript, and 3.) Explaining how to build a basic site with Gatsby and TypeScript. I think, in order to hone the focus and ensure that readers do not lose the thread and disengage from the content, it would be best to choose one of these goals and make sure the entire article supports it.

In order to attain this kind of focus, I'd like to suggest removing Step 5 and re-articulating this article as a general purpose "How To Set Up a Gatsby Project with TypeScript" tutorial. This will be very useful to our readership, and will allow you the space to focus on teaching goal #1. I think you can also keep in some of the basic tenets of TypeScript, but can make sure that they are mentioned in service to setting up Gatsby with TypeScript.

That being said, I still do love the bookstore landing page idea. Once you publish "How To Set Up a Gatsby Project with TypeScript", you could use that article as a prerequisite for a second article that focuses on building the landing page project.

Let me know if you think this is a good idea; happy to have a discussion about it!
-->
# How to Build a Landing Page with Gatsby and TypeScript <!--NOTE: Once you remove Step 5 from this tutorial, could you refactor this title to reflect the honed scope? -->

### Introduction

<!--NOTE: This Introduction is fantastic! Thanks for the thought put into it.

When refactoring this for the honed focus, I'd suggest replacing the specifics of the landing page with the benefits of building any project with Gatsby and TypeScript.
-->

TypeScript is a superset of JavaScript that adds optional static typing at build time, <!--NOTE: Style note: Since we reserve italics for technnical phrases, could you remove this from emphasized phrases throughout? For more on our style, see do.co/style. --> <!--NOTE: As far as I could tell, I removed all font-stylings -Brandon-->which cuts down on debugging runtime errors. It's grown into a powerful alternative to JavaScript over the years. At the same time, Gatsby has emerged as a great frontend framework for creating powerful static websites. Another wonderful feature of Gatsby is its built-in support for coding in TypeScript. For this tutorial, we're going to learn to utilize these capabilities and configure Gatsby for TypeScript. 

After this tutorial, you will have learned to intergrate TypeScript into your Gatsby project. TypeScript's static-typing abilities go well with a static-site genorator like Gatsby.

## Prerequisites
<!--NOTE: This is a thorough list of prerequisites, but I'd also like to see links for each of these tasks that direct the reader to resources that explain how they could accomplish these prerequisites. It can be frustrating for readers to know they need something but not know where to find a guide to get what they need.

Also, feel free to copy any prerequisites from other DigitalOcean tutorials, or to link to them as prerequisites. As an example of a prerequisite section that you could mimic the style of, take a look at https://www.digitalocean.com/community/tutorials/how-to-handle-dom-and-window-events-with-react .
-->

<!--NOTE: I revised and embedded links in every prerequisite. Thank you for recommending these tutorials! -Brandon -->

* You will need to have both [Node](https://nodejs.org/en/about/) and [npm](https://docs.npmjs.com/about-npm) installed in order to run a development environment and handle TypeScript/ Gatsby-related packages, respectively. This tutorial was tested with Node.js version 14.13.0 and npm version 6.14.8. To install on macOS or Ubuntu 18.04, follow the steps in [How to Install Node.js and Create a Local Development Environment on macOS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos). 
* To create a new Gatsby project, you will need the Gatsby CLI command line tool installed on your computer. To set this up, follow Step 1 in [How to Set Up Your First Gatsby Site](https://www.digitalocean.com/community/tutorials/how-to-set-up-your-first-gatsby-website). This step will also show you how to create a new Gatsby project with the `gatsby new` command. After the new project is created, delete all unecessary files, inluding `gatsby-node.js`, `gastby-browser.js`, and `gatsby-ssr.js`. <!--NOTE: I think our tutorial https://www.digitalocean.com/community/tutorials/how-to-set-up-your-first-gatsby-website might be a good fit here. --> <!--NOTE: Link added -Brandon -->
* You will need some familiarity with GraphQL queries and using GraphiQL to query for local image data. Follow the steps in [How to Handle Images with GraphQL and the Gatsby Image API](https://www.digitalocean.com/community/tutorials/how-to-handle-images-with-graphql-and-the-gatsby-image-api#prerequisites) to get refreshed with the query sandbox in GraphiQL. <!--NOTE: This happens to coincide with our most recent Gatsby tutorial at https://www.digitalocean.com/community/tutorials/how-to-handle-images-with-graphql-and-the-gatsby-image-api ; this could be a good tutorial to link to! --> <!--NOTE: Link added -Brandon -->
* You will need sufficient knowledge of JavaScript, espectially ES6+ syntax such as destructuring and imports/ exports. You can find more information on these topics in [ES6 Modules and How to Use Import and Export in JavaScript](https://www.typescriptlang.org/download) and [Object and Array Destructuring with ES6](https://www.digitalocean.com/community/tutorials/js-object-array-destructuring-es2015). 
* Since Gatsby is a React-based framework, we will be refactoring and creating components in this tutorial. You can learn more about this in [How to Create Custom Components in React](https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react). 


Additionally, if you are using an editor besides Visual Studio Code, you may need to go through a few extra steps to make sure you have TypScript performing type-checks at build time and showing any errors. For example, if you're using Atom, you'll need to install [a package](https://atom.io/packages/atom-typescript) (and some others, maybe) to be able to achieve a true TypeScript experience. For more information about using TypeScript in your project, refer to their [official website](https://www.typescriptlang.org/download)<!--NOTE: What do you think about linking to the TypeScript docs here? I'm thinking https://www.typescriptlang.org/download. --> <!--NOTE: I agree with linking to TS's website. Since I'm using VS code, I went with the the TypeScript Visual Code extension. Is the link sufficient or should I write a bit about using Nuget vs. using the extension? -Brandon -->

## Step 1 - Create a New Gatsby Site and Remove Some Boilerplate<!--NOTE: Style note: For our tutorials, we use numerals for Steps instead of the spelled out number; could you change this throughout? --> <!--NOTE: Headers have been changed. For this step's header, I also edited the title to more accurately reflect what's being done in this step. -Brandon -->

To get started, we're going to create our Gatsby site and make sure that we can run a server and view the site. After that, we will remove some unused boilerplate file and code. This will set our project up for edits in later steps. <!--NOTE: Could you include a bit more in terms of introductory sentences at the beginning of every step, providing a brief summary of what the reader will be doing in that step and why? This will help provide context for beginner readers who are not familiar with this topic, and will increase reader engagement. --> <!-- -->

Open your computer's console/ terminal and run the following command: 

```
gatsby new gatsby-typescript-tutorial
```

This will take a few seconds to run as it sets up the necessary boilerplate files and folders for the Gatsby site. After it is finished, `cd` into the project's directory. 

```
cd gatsby-typescript-tutorial
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

Usually, the default port nunber is `8000` but you can change this by running `gatsby develop -p [some-other-number]`, instead. <!--NOTE: This is a great tip! --> <!--NOTE: Thank you! -Brandon -->Head over to your preferred browser and type `http://localhost:8000` in the address bar to see the site. It should look like this: 

![Gatsby Default Starter Site](https://www.gatsbyjs.com/static/adce8d74483b529a1183d8bfdc0f8a38/73c85/c62f83895ef3ed01fba96da185277ae5.png)

Before moving on, go ahead and delete any header, text and `Link` tags in the `index.js` file along with the `divs` surrounding the `Image` component. They won't be needed. Next, to finish setup, we're going to remove some boilerplate code from our project's index page. In your projects root directory, head to the `src` directory, followed by `pages` and then open the `index.js` file. 

```
[label gatsby-typescript-tutorial/src/pages/index.js]

import React from "react"
<^>import { Link } from "gatsby"<^>

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <^><h1>Hi people</h1><^>
    <^><p>Welcome to your new Gatsby site.</p><^>
    <^><p>Now go build something great.</p><^>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <^><Link to="/page-2/">Go to page 2</Link> <br /><^>
    <^><Link to="/using-typescript/">Go to "Using TypeScript"</Link><^>
  </Layout>
)

export default IndexPage
```

For this tutorial, we are only going to work with an `<Image />` component so you can delete the lines highlighted in the code block above. 

```
[label gatsby-typescript-tutorial/src/pages/index.js]

import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
```
<!--NOTE: For our procedural tutorials, in order to minimize beginner mistakes, we like to include every action the reader has to take in an explicit instruction. Could you lead the reader through opening up this file and deleting the code you are referring to? It will be especially helpful to include a code block of the modified code. Also, make sure to explain things like where the reader can find `index.js`; this might not always be obvious to the reader.

Could you go through this article and make sure all instructions are explicitly included in the text?
-->



<!--NOTE: As mentioned at do.co/style, please include transition sentences at the end of every step, summarizing what the reader has just accomplished and giving them a preview of what they will do in the next step. This summary and preview will act as a signpost so that the reader does not get confused at any point in the article, thereby maximizing views and reader engagement. -->

<!--NOTE: -->

Now that we've created our project and completed some initial setup, we are ready to install some necessary plugins .

## Step 2 - Install `gatsby-plugin-typescript` and Other Necessary Dependencies

In order to set up support for TypeScript in Gatsby, we'll need to install some essential plugsin and other dependencies. 

### `gatsby-plugin-typescript`

The `gatsby-plugin-typescript` plugin already comes with a newly created Gatsby site. Unless we want to change any of its default options, we don't have to add this plugin to our `gatsby-config.js` file. This Gatsby plugin makes writing `.ts` and `.tsx` files in TypeScript possible. Therefore, go ahead and change `header.js`, `image.js`, `layout.js`, `seo.js` and `index.js` files to `header.ts`, `image.ts`, `layout.ts`, `seo.ts` and `index.ts`, respectively. 

<!--NOTE: Including yarn here could trip up those who are copying and pasting these commands; I'd suggest sticking with npm throughout the tutorial, and only mentioning yarn as a possible alternative where necessary. --> 

<!--NOTE: Makes sense. I can definitely see how it can be confusing, especially when someone tries to copy/ paste. I went ahead and fixed it. -Brandon -->


<!--NOTE: In our markdown, we label code blocks with a `[label <file_path>]` at the top of the block. Could you change these throughout? For more information on our custom markdown, see do.co/markdown.

Also, to make code changes more legible, we usually highlight new code with out markdown highlights (<^>like this<^>). Could you adopt this style throughout? For an example of this style in action, take a look at this React tutorial: https://www.digitalocean.com/community/tutorials/how-to-handle-dom-and-window-events-with-react .  -->

<!--NOTE: I made the stylistic changes you adviced throughout the tutorial. However I edited and removed the code block with the change to `gatsby-config.js` because I realize that it isn't necessary if we're not changing the default settings, which we aren't. gatsby-plugin-typescript already comes installed with a fresh new Gatsby project. -Brandon -->


There is one important caveat about this plugin, however: it doesn't include type-checking at build time (a core function of TypeScript). Again, if you're using VS Code, this shouldn't be too much of an issue beacuse TypeScript is a supported language in Visual Studio. But if you're using another editor, like Atom, you will need to do some extra configurations to achieve a full TypeScript development experience.

<$>[note]
**Note:** 

### `@types` for React
This is optional, but since Gatsby is a React-based framework, adding some additional React-related typing doesn't hurt. <!--NOTE: If this is optional, it might be a good idea to break this out into a note. Take a look at do.co/markdown for our note styling for markdown.--> <!--NOTE: Good idea. I wrapped it in the appropriate note markdown. -Brandon -->

To add type-checking for types specific to React:

```
npm add @types/react
```

To add type-checking for types related to the React DOM: 

```
npm add @types/react-dom
```

<$>
<!--NOTE: This is a reminder to include a transition sentence. --> 
<!--NOTE: Sentence added. -Brandon -->

Now that we've become familiar with the plugin `gatsby-plugin-typescript`, we are ready to configure our Gatsby site for TypeScript in the next step. 

## Step 3 - Configure TS for Gatsby with `tsconfig.json` File

A `tsconfig.json` file has two primary purposes: (1) establishing the root directory of the TypeScript project (`include`) and (2) overriding the TS compilers default configurations (`compilerOptions`). There are a couple ways to create this file. If you have the `tsc` command line tool installed with npm, you could create a new `tsconfig` file with `tsc --init`. But the file is then populated with a litany of default options and comments. Instead, we will create a new file at the root file of our directory (`gatsby-typescript-project/`) and name it `tsconfig.json`. Next, we'll create an object with two props: `compilerOptions` and `include`. The following configurations are partially borrowed from the [`gatsby-starter-typescript-plus`](https://github.com/resir014/gatsby-starter-typescript-plus) starter: 
<!--NOTE: Could you include an explicit command to create this file? This will ensure that the reader knows the filepath of the file they are creating.

Also, the instruction to populate the `tsconfig.json` file with the following code is implicit; could you include an explicit instruction? -->
```
[label gatsby-typescript-tutorial/tsconfig.json] 

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "jsx": "preserve",
    "lib": ["dom", "es2015", "es2017"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false
  },
  "include": ["./src/**/*"]
}
```

The `include` property points to an array of filenames or paths that the compiler knows to convert from TypeScript to JavaScript.

Here is a brief explanation of each option used in `compilerOptions`: 

`module` - Sets the module system for the project; `commonjs` is used by default
`target` - Depending on what version of JavaScript you're using, this option which features to downlevel and which to leave alone. This can be helpful for if your project is deployed to older environments vs. newer environments.
`jsx` - Setting for how JSX is treated in `.tsx` files. The `preserve` option leaves the JSX unchanged.
`lib` - An array of specified type-definitions of different JS libraries/ APIs ("dom", "es2015", etc)
`strict` - When set to `true`, this enables TypeScript's type-checking abilities at build-time
`noEmit` - Since Gatsby already uses Babel to compile our code to readable JavaScript, we this option to `true` to leave TypeScript out it
`isolatedModules` - By choosing Babel as our compiler/ transpiler, we are opting for compilation one file at a time, which may cause potential problems at runtime. Setting this option to `true` allows TypeScript to warn us if we are about to run into this problem.
`esModuleIterop` - Enabling this option allows our use of CommonJS (our set `module`) and ES modules (importing and exporting custom variables and functions) to better work together and allow namespace objects for all imports. 
`noUnusedLocals` and `noUnusedParamters` - Enabling these two options disables the errors TypeScript would normally report if we were to create an unused local variable or paramter. 
`removeComments` - Setting this false (or not setting it at all) allows there to be comments present after the any TypeScript files have been converted to JavaScript.

<!--NOTE: If you cut out Step 5, you'll have a bit more space here to elaborate on these options. Could you include a bit more explanation of these options and why they are necessary for the reader to follow? Ideally, if we are instructing the reader to use a certain option, I'd like to make sure they know the reason why. --> 

<!--NOTE: I went ahead and edited the `tsconfig.json` file and removed `preserveConstEnums` because I no longer feel it is necessary to learn in this tutorial. -Brandon -->
You can learn more about these different options and many more by visiting [TypeScript's reference guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for `tsconfig`. 


In the next step, we are going to complete our TypeScript integration by refactoring some of our boilerplate files in `src/components` and `src/pages`.

## Step 4 - Implement TypeScript by Refactoring Exisiting, Boilerplate-Files
<!--NOTE: As mentioned before, it would be preferable for us to lead the reader through all of the steps that we suggest explicitly. If the reader needs to refactor `layout.js`, `header.js`, and `image.js`, let's include the instructions to open the files, lead them through the changes to the code, etc.

I do understand, however, that there is a lot of redundancy in the process of refactoring each of these files. Because of this, you don't have to go as far in depth with eplanations for the files after `seo.tsx`. I'd still like to see code blocks with the final refactored code, though.

Also, I noticed a couple of times that you cite `.txt` files. Is this a typo for `.tsx`? If so, could you correct these? Thank you!
-->
In this final step, we're going to add some TypeScript syntax to some of our boilerplate files. One remarkable feature of TypeScript is its flexibility with its syntax. If you don't want to add typing to your variables explicity, you don't have to. Gatsby believes that adopting TypeScript in your workflow "can and should be incremental", and so for this step, we'll cover these 3 core TypeScript concepts: 

* some basic types
* defining types and interfaces
* working with build-time errors

### Basic Types in TypeScript

TypeScript supports [simple datatypes](https://www.typescriptlang.org/docs/handbook/basic-types.html) including: `boolean`, `number`, and `string`.<!--NOTE: In general, we try to stay away from assuming anything about the reader's familiarity or expertise with a technology, mostly because our audience is too wide to really accurately account for everyone, and because some readers may not take the assumption well. Because of this, I would take out language like the two sentences before this note. --> <!--NOTE: I agree. I removed the two sentences. -Brandon -->The major syntactical difference with TypeScript, compared to JavaScript, is that variables can now be defined with an associated type. For example: 
<!--NOTE: In the following code block, should the `string` variable be `str`? --> 
<!--NOTE: Whoops! Good catch, I fixed the bug. -Brandon -->
```
let num: number; //num is of type 'number'
num = 0

let str: string; //str is of type 'string'
str = "TypeScript & Gatsby"

let typeScriptIsAwesome: boolean; //typeScriptIsAwesome is of type 'boolean'
typeScriptIsAwesome = true;
```

Let's get started by taking a look at the `defaultProps` and `propTypes` declarations in the `seo.js` file, found in the `src/components` directory: 
<!--NOTE: To represent snippets of code, could you include an "..." wherever code has been abbreviated? In the following, for example, you could put "..." at the top of the file. --> 

<!--NOTE: Changes made.  -Brandon -->
```
[label gatsby-typescript-tutorial/src/components/seo.js] 

import React from "react"
<^>import PropTypes from "prop-types"<^>
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

...
      ].concat(meta)}
    />
  )
}


<^>SEO.defaultProps = {<^>
<^>  lang: `en`,<^>
<^>  meta: [],<^>
<^>  description: ``,<^>
<^>}<^>

<^>SEO.propTypes = {<^>
<^>  description: PropTypes.string,<^>
<^>  lang: PropTypes.string,<^>
<^>  meta: PropTypes.arrayOf(PropTypes.object),<^>
<^>  title: PropTypes.string.isRequired,<^>
<^>}<^>

export default SEO
```

By default, a Gatsby site's SEO component comes with the `defaultProps` and `propTypes` explicitly declared, using the imported `PropsTypes` class. For example, in the `meta` prop (or *alias*) of the `propTypes` object, it's value is an array of objects, each of which is itself a prop of the `PropTypes` component. Some props are marked as required (`isRequired`) while others are not, implying they are optional. Go ahead and delete `defaultProps` and `propTypes` (along with the `import` statement for the `PropTypes` at the top of the file) and we'll write out the type aliases with TypeScript. <!--NOTE: As mentioned before, make sure to include a code block of the modified code so that readers don't get lost. --> <!--NOTE: Added a code block -Brandon -->

```
[label gatsby-typescript-tutorial/src/components/seo.js] 

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


...
      ].concat(meta)}
    />
  )
}

export default SEO
```

### Defining TypeScript Interfaces

<!--NOTE: This is a great sub-lesson, but I think it goes into detail a bit too quickly for readers to follow. Could you include a quick high-level summary of what you are doing here and why? -->

In TypeScript, an `interface` is used to define the "shape" of a custom type. These are used to represent the value type of complex pieces of data like React components and function paramters. In the `seo.tsx` file, we're going to build an `interface` to replace the `defaultProps` and `propTypes` definitions that were deleted:
<!--NOTE: In this step, are we renaming "seo.js" as "seo.tsx"? If so, please say this explicitly and include the command line command to do this. --> 

<!--NOTE: I went ahead and added that direction to the part in Step 2 where the reader is learning about `gatsby-plugin-typescript` and its ability to allow for `.ts` and `.tsx` files to be made. -Brandon -->
```
[label gatsby-typescript-tutorial/src/components/seo.tsx] 
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

<^>interface SEOProps {<^>
<^>  description?: string,<^>
<^>  lang?: string,<^>
<^>  meta?: Array<{name: string, content: string}>,<^>
<^>  title: string<^>
<^>}<^>

function SEO({ description='', lang='en', meta=[], title }: SEOProps) {

...


```

This `SEOProps` accomplishes what `SEO.propTypes` did by setting each of the properties associated data type as well as marking some as required with the `?` character.

<!--NOTE: Since this is mainly commenting on the frustration a user can have with TypeScript, I think you could delete this note to open up the audience a bit and avoid getting involved with personal learning journeys that might narrow the audience of the piece. -->  

<!--That's fair. I deleted the note. -Brandon -->

### Typing a Function

Just like in JavaScript, functions play an important role in TypeScript applications. We can even type functions by specifying the datatype of the arguments passed into them. In the `seo.tsx` file, let's go ahead and work on the defined `SEO` function component. Under where the interface for `Props` was defined, we're going to explicity declare the type of the `SEO` component's function arguments, along with a return type of `Props` right after:

```
[label gatsby-typescript-tutorial/src/components/seo.tsx]

function SEO({ description='', lang='en', meta=[], title }<^>: Props<^>) {
  ...
}
```

Remember: we at least have to include the `title` in the list of arguments passed to the `SEO` component because it was defined as a required property in the `Props` interface we defined earlier. 


### Refactor boilerplace to be TypeScript-compliant
Lastly, you can revise the `metaDescription` and `defaultTitle` constant declarations by setting their type, which is `string` in this case. 

```
[label gatsby-typescript-tutorial/src/components/seo.tsx] 

...

  const metaDescription<^>: string<^> = description || site.siteMetadata.description
  const defaultTitle<^>: string<^> = site.siteMetadata?.title

...
```

Another interesting type in TypeScript is the `any` type. For situations where you're dealing with a variable who's type is unclear or difficult to define, use the `any` as a last resort to avoid any build-time errors.

An example of using the `any` type is when dealing with data fetched from a third-party, like an API request or a GraphQL query. In the `seo.tsx` file, where the destructured `site` property is defined with a GraphQL static query, let's set its type to `any`: 

```
[label gatsby-typescript-tutorial/src/components/seo.tsx] 
function SEO({ description='', lang='en', meta=[], title }: Props) {
  const { site }<^>: any<^> = useStaticQuery(
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
<!--NOTE: A reader may understand this better with an example; what do you think of putting in an error, intentionally compiling and pointing out the error, then fixing the error? -->

<!--NOTE: I think the screenshot I added, along with some extra text about fixing the error, is a sufficient example of working with TS errors. -Brandon -->
One example of a build-time error occuring is when you declare a variable of one type but assign it a value that is of another type. If we were to change the value of one of the keyword arguments passed to the `SEO` component to one of a different type, the TS compiler will detect the inconsitency and report the error: 

![Imgur](https://i.imgur.com/smG55LB.png?1)

The error says "Type 'number' is not assignable to type 'string'". That is because when we set up our `interface`, we said the `description` property would be of type `string`. The value `0` is of type `number`. If we change the value of `description` back into a "string", the error message will go away.

### Refactor the Rest
Lastly, let's refactor the remaining boilerplate files with TypeScript: `layout.tsx`, `image.tsx` and `header.tsx`. Like `seo.tsx`, there component files are located in the `src/components` directory. 

In `layout.tsx`, towards the bottom, is the defined `Layout.propTypes`. 

```
[label gatsby-typescript-tutorial/src/components/layout.tsx] 

...

Layout.propTypes = {
<^>  children: PropTypes.node.isRequired,<^>
}
```

The `children` prop shows that its value is of type `node` per the `PropTypes` class. Plus, it's a required prop. How can this be implemented in an interface? Since the `children` in the layout could be anything from simple text to React child components, we should use `ReactNode` as the associated type by importing near the top and adding it to the interface: 

```
[label gatsby-typescript-tutorial/src/components/layout.tsx] 

import React, <^>{ ReactNode }<^> from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

<^>interface LayoutProps {<^>
  <^>children: ReactNode<^>
<^>}<^>

const Layout = ({ children }: LayoutProps) => {
  ...
```

Next, we could add a type to the `data` variable that stores a GraphQL query that fetches site title data. Since this query object is coming from a third-party entity like GraphQL, we should give `data` an `any` type. And lastly, let's add the `string` type to the `siteTitle` variable that works with that data. 

```
[label gatsby-typescript-tutorial/src/components/layout.tsx] 

const Layout = ({ children }: LayoutProps) => {
  <^>const data: any<^> = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

const siteTitle: string = data.site.siteMetadata?.title || `Title`

...
```

In the `image.tsx` file, we are dealing with a similar situation as `layout.tsx`. There is a `data` variable that stores a GraphQL query that could have an `any` type. The image fluid data that is passed into the `fluid` attribute of the `<Img />` component could be separated from the return statement into its own variable. It's also a complex variable like `data`, so give this an `any` type as well.

Old code:

```
[label gatsby-typescript-tutorial/src/components/image.tsx] 

...
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

```

New code: 

```
[label gatsby-typescript-tutorial/src/components/image.tsx] 

...
const Image = () => {
  const data: any = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const imageFluid: any = data.placeholderImage.childImageSharp.fluid

  return <Img fluid={imageFluid} />
}

export default Image
```

The `header.tsx` file also comes with predefined prop types, using the `PropTypes` class. Like `seo.tsx`, `image.tsx` and `layout.tsx`, replace `Header.defaultProps` and `Header.propTypes` with an `interface` using the same prop names. 

<!--NOTE: As noted before, I suggest running through these file refactors explicitly. -->

<!--NOTE: I think Step 5 could itself be a standalone tutorial, so after cutting this section, you can use it as the seed for the next tutorial. -->

<!--NOTE: The section has officially been moved to a separate file in a separate repo for anotehr tutorial. Thank you again for your suggestion to do so! -Brandon -->

## Conclusion
While TypeScript seems like a steep hill at first, after a whlie, you will begin to see it's benefits. It's static-typing capabilities go a long way in keeping debugging at a minimum. It's also a great language for Gatsby sites since it's supported by defaut. Gatsby, in its own rite, is a wonderful front-end tool for creating static-sites such as landing pages. You now have two exceptional, modern and increasingly popular tools at your disposabl. What will you build next? 

To learn more about TypeScript and all the exciting things you can do with it, head over to their [offical handbook](https://www.typescriptlang.org/docs/handbook/intro.html).


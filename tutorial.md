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

Usually, the default port nunber is `8000` but you can change this by running `gatsby develop -p [some-other-number]`, instead. <!--NOTE: This is a great tip! --> <!--NOTE: Thank you! -Brandon -->Head over to your preferred browser and type `http://localhost:8000` in the address bar to see the site. It should look like this: 

![Gatsby Default Starter Site](https://www.gatsbyjs.com/static/adce8d74483b529a1183d8bfdc0f8a38/73c85/c62f83895ef3ed01fba96da185277ae5.png)

Before moving on, go ahead and delete any header, text and `Link` tags in the `index.js` file along with the `divs` surrounding the `Image` component. They won't be needed. 
<!--NOTE: For our procedural tutorials, in order to minimize beginner mistakes, we like to include every action the reader has to take in an explicit instruction. Could you lead the reader through opening up this file and deleting the code you are referring to? It will be especially helpful to include a code block of the modified code. Also, make sure to explain things like where the reader can find `index.js`; this might not always be obvious to the reader.

Could you go through this article and make sure all instructions are explicitly included in the text?
-->

<!--NOTE: As mentioned at do.co/style, please include transition sentences at the end of every step, summarizing what the reader has just accomplished and giving them a preview of what they will do in the next step. This summary and preview will act as a signpost so that the reader does not get confused at any point in the article, thereby maximizing views and reader engagement. -->

<!--NOTE: -->

Now that we've created our project and completed some initial setup, we are ready to install some necessary plugins .

## Step 2 - Install `gatsby-plugin-typescript` and Other Necessary Dependencies

In order to set up support for TypeScript in Gatsby, we'll need to install some essential plugsin and other dependencies. 

### `gatsby-plugin-typescript`

While the `gatsby-plugin-typescript` plugin is supposed to come already installed with a freshly-created Gatsby project, you will need to explicity install (or add) the plugin if you wish to override any of its default settings in the `gatsby-config.js` file: 
<!--NOTE: Including yarn here could trip up those who are copying and pasting these commands; I'd suggest sticking with npm throughout the tutorial, and only mentioning yarn as a possible alternative where necessary. --> 

<!--NOTE: Makes sense. I can definitely see how it can be confusing, especially when someone tries to copy/ paste. I went ahead and fixed it. -Brandon -->
```
npm add gatsby-plugin-typescript
```

This Gatsby plugin makes writing `.ts` and `.tsx` files in TypeScript possible. Next, add it to the `plugins` array in the `gatsby-config.js` file. 
<!--NOTE: In our markdown, we label code blocks with a `[label <file_path>]` at the top of the block. Could you change these throughout? For more information on our custom markdown, see do.co/markdown.

Also, to make code changes more legible, we usually highlight new code with out markdown highlights (<^>like this<^>). Could you adopt this style throughout? For an example of this style in action, take a look at this React tutorial: https://www.digitalocean.com/community/tutorials/how-to-handle-dom-and-window-events-with-react .  -->
```
[label <gatsby-typescript-tutorial/gatsby-config.js>]

module.exports = {
  siteMetaData: {
    ...
  },
  plugins: [
    ...,
    <^>'gatsby-plugin-typescript'<^>
  ]
}
```

There is one important caveat about this plugin, however: it doesn't include type-checking at build time (a core function of TypeScript). Again, if you're using VS Code, this shouldn't be too much of an issue beacuse TypeScript is a supported language in Visual Studio. But if you're using another editor, like Atom, you will need to do some extra configurations to achieve a full TypeScript development experience.

<$>[note]
**Note:** Use this for notes on a publication.

### `@types` for React
This is optional, but since Gatsby is a React-based framework, adding some additional React-related typing doesn't hurt. <!--NOTE: If this is optional, it might be a good idea to break this out into a note. Take a look at do.co/markdown for our note styling for markdown.--> <!--NOTE: Good idea. I wrapped it in the appropriate note markdown. -->

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

## Step 3 - Configure TS for Gatsby with `tsconfig.json` File

Next, let's create a `tsconfig.json` file. It has two primary purposes: (1) establishing the root directory of the TypeScript project (`include`) and (2) overriding the TS compilers default configurations (`compilerOptions`). Borrowing from the `tsconfig` file of the  [`gatsby-starter-typescript-plus`](https://github.com/resir014/gatsby-starter-typescript-plus) starter: 
<!--NOTE: Could you include an explicit command to create this file? This will ensure that the reader knows the filepath of the file they are creating.

Also, the instruction to populate the `tsconfig.json` file with the following code is implicit; could you include an explicit instruction? -->
```
[label <gatsby-typescript-tutorial/tsconfig.json>] 

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
<!--NOTE: If you cut out Step 5, you'll have a bit more space here to elaborate on these options. Could you include a bit more explanation of these options and why they are necessary for the reader to follow? Ideally, if we are instructing the reader to use a certain option, I'd like to make sure they know the reason why. -->
You can learn more about these different options and they do by checking out [TypeScript's reference guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for `tsconfig`. 

We are now able to write in TypeScript for our Gatsby project!

## Step 4 - Implement TypeScript by Refactoring Exisiting, Boilerplate-Files
<$>[note]
**Note:** For this step, most of the code examples will be focused on the `seo.tsx` file in the `src/components` directory. What's talked about in these examples **must** be applied to the other boilerplate files (`header.tsx`, `layout.tsx`, etc) and a few other files that will be created in the next and final step of the tutorial.
<$>
<!--NOTE: As mentioned before, it would be preferable for us to lead the reader through all of the steps that we suggest explicitly. If the reader needs to refactor `layout.js`, `header.js`, and `image.js`, let's include the instructions to open the files, lead them through the changes to the code, etc.

I do understand, however, that there is a lot of redundancy in the process of refactoring each of these files. Because of this, you don't have to go as far in depth with eplanations for the files after `seo.tsx`. I'd still like to see code blocks with the final refactored code, though.

Also, I noticed a couple of times that you cite `.txt` files. Is this a typo for `.tsx`? If so, could you correct these? Thank you!
-->
Gatsby believes that adopting TypeScript in your workflow "can and should be incremental", and so for this step, we'll cover these 3 core TypeScript concepts: 

* some basic types
* defining types and interfaces
* working with build-time errors

### Basic Types in TypeScript

TypeScript supports [simple datatypes](https://www.typescriptlang.org/docs/handbook/basic-types.html) including: `boolean`, `number`, `string`, `Array`, `any`, etc... These are the major building blocks upon which TypeScript is possible. If you have ever worked with languages like Java and C#, then the syntax may feel familiar. If not, that's okay. <!--NOTE: In general, we try to stay away from assuming anything about the reader's familiarity or expertise with a technology, mostly because our audience is too wide to really accurately account for everyone, and because some readers may not take the assumption well. Because of this, I would take out language like the two sentences before this note. --> The major syntactical difference with TypeScript, compared to JavaScript, is that variables can now be defined with an associated type. For example: 
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

Let's get started with integrating TypeScript by taking a look at the `defaultProps` and `propTypes` declarations in the `seo.js` file: 
<!--NOTE: To represent snippets of code, could you include an "..." wherever code has been abbreviated? In the following, for example, you could put "..." at the top of the file. --> 

<!--NOTE: Changes made.  -Brandon -->
```
[label <gatsby-typescript-tutorial/src/components/seo.js>] 

...


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

By default, a Gatsby site's SEO component comes with the `defaultProps` and `propTypes` explicitly declared. For example, in the `meta` prop (or *alias*) of the `propTypes` object, it's value is an array of objects, each of which is itself a prop of the `PropTypes` component. Some props are marked as required (`isRequired`) while others are not, implying they are optional. Go ahead and delete `defaultProps` and `propTypes` (along with the `import` statement for the `PropTypes` at the top of the file) and we'll write out the type aliases with TypeScript. <!--NOTE: As mentioned before, make sure to include a code block of the modified code so that readers don't get lost. -->

### Defining TypeScript Interfaces

<!--NOTE: This is a great sub-lesson, but I think it goes into detail a bit too quickly for readers to follow. Could you include a quick high-level summary of what you are doing here and why? -->

While we could use the `type` keyword, `interface` is preferrable because you can add more properties to them if you want and they resemble and behave like JavaScript objects. It also achieves both goals of `defaultProps` and `propTypes` by defining the "shape" of a property-value object-like structure, establishing the static datatypes associated with each property, and telling whether or not a property is required for it to be associated with a variable or function argument (more on that shortly).  Building an `interface` is like building a regular JSON object. The key difference is that you can write "of what type" each property is:
<!--NOTE: In this step, are we renaming "seo.js" as "seo.tsx"? If so, please say this explicitly and include the command line command to do this. -->
```
[label <gatsby-typescript-tutorial/src/components/seo.tsx>] 
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string,
  lang?: string,
  meta?: Array<{name: string, content: string}>,
  title: string
}

...


```

The new `Props` interface defines 4 props: `description`, `lang`, `meta`, and `title`. Each of their basic datatypes are definied on the right-side of the `:` colon. In TypeScript, if a `?` is beteween the prop name and the colon, the prop is not required in future variable declarations of this type; the only prop that is required for `Props` is `title`, of type `string`. The optional `meta` prop is interesting. It's value is of type `Array` and inside the `<>` arrows is the generic array type definition. This denotes that each element of this `meta` array is this same type. In this case, the generic array type is an object with required props `name` and `content`, both of type `string`.

<!--NOTE: Since this is mainly commenting on the frustration a user can have with TypeScript, I think you could delete this note to open up the audience a bit and avoid getting involved with personal learning journeys that might narrow the audience of the piece. -->  

<!--That's fair. I deleted the note. -Brandon -->

### Typing a Function

Just like in JavaScript, functions play an important role in TypeScript applications. We can even type functions by specifying the datatype of the arguments passed into them. In the `seo.tsx` file, let's go ahead and work on the defined `SEO` function component. Under where the interface for `Props` was defined, we're going to explicity declare the type of the `SEO` component's function arguments, along with a return type of `Props` right after:

```
[label <gatsby-typescript-tutorial/src/components/seo.tsx>]

function SEO({ description='', lang='en', meta=[], title }<^>: Props<^>) {
  ...
}
```

Remember: we at least have to include the `title` in the list of arguments passed to the `SEO` component because it was defined as a required property in the `Props` interface we defined earlier. 


### Refactor boilerplace to be TypeScript-compliant
Lastly, you can revise the `metaDescription` and `defaultTitle` constant declarations by setting their type, which is `string` in this case. 

```
[label <gatsby-typescript-tutorial/src/components/seo.tsx>] 

...

  const metaDescription<^>: string<^> = description || site.siteMetadata.description
  const defaultTitle<^>: string<^> = site.siteMetadata?.title

...
```

Another interesting type in TypeScript is the `any` type. For situations where you're dealing with a variable who's type is unclear or difficult to define, use the `any` as a last resort to avoid any build-time errors.

An example of using the `any` type is when dealing with data fetched from a third-party, like an API request or a GraphQL query. In the `seo.tsx` file, where the destructured `site` property is defined with a GraphQL static query, let's set its type to `any`: 

```
[label <gatsby-typescript-tutorial/src/components/seo.tsx>] 
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
One example of a build-time error occuring is when you declare a variable of one type but assign it a value that is of another type. If we were to change the value of one of the keyword arguments passed to the `SEO` component to one of a different type, the TS compiler will detect the inconsitency and report the error: 

![Imgur](https://i.imgur.com/smG55LB.png?1)

<$>[note]
**Note:** Before proceeding to the next step, make sure to refactor the `layout`, `image` and `header` files by changing their file extention to `.tsx` and 
<$>
<!--NOTE: As noted before, I suggest running through these file refactors explicitly. -->

<!--NOTE: I think Step 5 could itself be a standalone tutorial, so after cutting this section, you can use it as the seed for the next tutorial. -->

<!--NOTE: The section has officially been moved to a separate file in a separate repo for anotehr tutorial. Thank you again for your suggestion to do so! -Brandon -->

## Conclusion
While TypeScript seems like a steep hill at first, after a whlie, you will begin to see it's benefits. It's static-typing capabilities go a long way in keeping debugging at a minimum. It's also a great language for Gatsby sites since it's supported by defaut. Gatsby, in its own rite, is a wonderful front-end tool for creating static-sites like the landing page we just made. You now have two exceptional, modern and increasingly popular tools at your disposabl. What will you build next? 

To learn more about TypeScript and all the exciting things you can do with it, head over to their [offical handbook](https://www.typescriptlang.org/docs/handbook/intro.html).


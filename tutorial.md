<$>[draft]
**Draft:** This is a Draft of the markdown file for the tutorial
<$>
# How to Build a Landing Page with Gatsby and TypeScript

### Introduction
Since TypeScript was first released in 2012, it has become a popular alternative to JavaScript. This is because its a superset that comes with everything we know and love(?) about JavaScript, plus optional static typing *at build time*, which cuts down on debugging early on. At the same time, since it was first released in 2015, Gatsby has emerged as a great static site generator. It is ideal for building compelling static content such as landing pages, which we will building in this tutorial. 

Landing pages are relatively light in complexity since they come with predicable components of content. For this tutorial we are going to build a landing site for a book store, and it will include: 

* a header that typically includes the business/ prodcut name
* a "hero image" that acts as a supportive visual for the business/ product
* some information about what the product/ service is and perhaps a list of features
* a signup form for the reader to be sent more information (usually by email)

This will be ideal for getting introduced to Gatsby, as well as learning to code with TypeScript. 

## Prerequisites
To follow this tutorial, you will need: 

* Node and npm (or yarn) installed
* Gatsby CLI (for creating the new project)
* Sufficient knowledge of JavaScript, especially with Objects and ES6+ syntax
* React, since Gatsby is a React-based frontend framework

## Step One - Create a New Gatsby Site with `gatsby new`
Before getting into TypeScript, we must first create the Gatsby site's boilerplate files and folders. 

We'll start by heading to your local machine's console/ terminal and running the following command: 

```
gatsby new book-store-landing-page
```

This will take a few seconds to run as it sets up the necessary boilerplate for the Gatsby site. After it is finished, `cd` into the project's directory. 

```
cd book-store-landing-page
```

To make sure the project can run properly, run the following command to start the site's development environment: 

```
gatsby develop
```

After a few seconds, you will see the following message: 

```
You can now view gatsby-starter-default in the browser.

  http://localhost:8000
```

Usually, the default port nunber is `8000` but you can change this by running `gatsby develop -p [some-other-number]`, instead. Head over to your preferred browser and type `http://localhost:8000` in the address bar to see the site. It should look like this: 


[Gatsby Default Starter Site](/Users/brandondusch/Desktop/projects/book-store-landing-page/src/images/gatsby-default-starter-site.jpg)

## Step Two - Configure TS for Gatsby with `tsconfig.json` File

## Step Three - Refactor Exisiting, Boilerplate-Files

## Step Four - Use React Components to Build the Page

## Conclusion

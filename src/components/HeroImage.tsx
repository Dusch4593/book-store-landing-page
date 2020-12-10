import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */



const HeroImage = () => {
  const query = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "bookshelf.jpg"}) {
      childImageSharp {
        resize(height: 300, width: 300) {
          src
        }
      }
    }
  }
`)

const imageSrc: string = query.file.childImageSharp.resize.src
  
  return (
    <>
      <img src={imageSrc} />    
    </>
  )
}



export default HeroImage

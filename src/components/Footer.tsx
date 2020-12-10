import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
        <footer
    style={{
      background: `#0069ff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <p>The Book Store &#169; 2020</p>
        </Link>
      </h1>
    </div>
  </footer>
    )
}

export default Footer
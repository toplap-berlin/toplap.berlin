import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/toplap.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'flex' }}>
        <img src={logo} />

        <Link
          to="/"
          style={{
              position: 'absolute',
              color: 'white',
              textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { uid } from 'react-uid'
import Github from '@assets/github.svg'

import { Container } from '@components/Container'
import { StyledNavigation, Inner, Brand, Nav, Item, Social } from './styled'

const items = [
  { label: 'Home', to: '/' },
  { label: 'Markdown', to: '/markdown/' }
]

const social = [
  {
    label: <Github />,
    href: 'https://github.com/toplap-berlin/toplap.berlin'
  }
]

const Navigation = ({ path }) => {
  const {
    site: {
      siteMetadata: { name }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  return (
    <StyledNavigation>
      <Container maxWidth={1200}>
        <Inner>
          <Brand to="/">{name}</Brand>
          <Nav>
            {items.map(({ label, to }) => (
              <Item key={uid(label)} to={to} disabled={to === path}>
                {label}
              </Item>
            ))}
          </Nav>
          <Social>
            {social.map(({ label, href }) => (
              <Item key={uid(label)} to={href} style={{ lineHeight: 0 }}>
                {label}
              </Item>
            ))}
          </Social>
        </Inner>
      </Container>
    </StyledNavigation>
  )
}

Navigation.propTypes = {
  path: PropTypes.string.isRequired
}

Navigation.defaultProps = {}

export { Navigation }

import React from 'react'
import PropTypes from 'prop-types'
import { Background } from '@components/Background'
import { Theme } from '@components/Theme'
import { Navigation } from '@components/Navigation'
import { Footer } from '@components/Footer'
import { breakpointAware } from '@hoc/breakpointAware'
import { SEO } from './SEO'
import { Main } from './styled'

const CC = breakpointAware(Main)

const Site = ({ children, seo, ...other }) => (
  <>
    <Background />
    <Theme>
      <SEO seo={seo} {...other} />
      <Navigation {...other} />
      <CC>{children}</CC>
      <Footer {...other} />
    </Theme>
  </>
)

Site.propTypes = {
  children: PropTypes.node,
  seo: SEO.propTypes.seo
}

Site.defaultProps = {
  children: null,
  seo: {}
}

export { Site }

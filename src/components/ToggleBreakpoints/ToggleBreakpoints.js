import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'
import * as ß from './styles'

export const ToggleBreakpoints = ({ breakpointsActive, toggleBreakpoints }) =>
  process.env.NODE_ENV !== 'production' && (
    <Box id="toggle-breakpoints" css={ß.toggleBox}>
      <Label>
        <Checkbox checked={breakpointsActive} onChange={toggleBreakpoints} />
        Toggle Breakpoints
      </Label>
    </Box>
  )

ToggleBreakpoints.propTypes = {
  breakpointsActive: PropTypes.bool,
  toggleBreakpoints: PropTypes.func
}

export default ToggleBreakpoints

import React from 'react'
import { Site } from '@components/Site'

const FourOFour = ({ ...other }) => {
  return (
    <Site {...other}>
      <h1>Site not found!</h1>
    </Site>
  )
}

export default FourOFour

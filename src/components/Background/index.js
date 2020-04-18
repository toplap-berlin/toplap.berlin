import React, { useRef, useState } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import { Layer, Stage, Ellipse } from 'react-konva'
import { Blur } from 'konva/lib/filters/Blur'
import { range } from 'ramda'
import * as ß from './styles'
// import PropTypes from 'prop-types'

export const Background = () => {
  const [{ width, height }, setDimensions] = useState({ width: 800, height: 600 })
  const layerRef = useRef()
  const onResize = (w, h) => setDimensions({ width: w, height: h })
  const generatedLights = range(0, 1000).map((i) => {
    const rnd = Math.random(1)
    return {
      radius: { x: rnd, y: rnd },
      opacity: rnd,
      x: Math.random() * width,
      y: Math.random() * height,
      fill: ['#6ac6e8', '#54d5e8', '#2ae8d8'][i % 3]
    }
  })

  return (
    <div css={ß.background}>
      <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
      <Stage width={width} height={height}>
        <Layer ref={layerRef} width={width} height={height}>
          {generatedLights.map((light, index) => (
            <Ellipse key={index} filters={[Blur]} blurRadius={100} shadowBlur={1} {...light} />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

Background.propTypes = {
  // children: PropTypes.node.isRequired
}

Background.defaultProps = {}

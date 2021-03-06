import { css } from '@emotion/core'

export const background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: #191d1e; /* Old browsers */
  background: -moz-linear-gradient(0deg, #191d1e 50%, #283139 100%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(50%, #191d1e),
    color-stop(100%, #283139)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(0deg, #191d1e 50%, #283139 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(0deg, #191d1e 50%, #283139 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(0deg, #191d1e 50%, #283139 100%); /* IE10+ */
  background: linear-gradient(0deg, #191d1e 50%, #283139 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#191d1e', endColorstr='#283139',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  background-attachment: fixed;
`

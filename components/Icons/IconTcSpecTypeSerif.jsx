import React from 'react'

const IconTcSpecTypeSerif = (props) => {
  const fill = props.fill || '#62AADC'
  const height = props.height || '64'
  const width = props.width || '64'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 64 64" aria-labelledby="title">
      <title id="title">IconTcSpecTypeSerif</title>
      <path fill={fill} fillRule="evenodd" d="M22.41 39.365H10.716l-1.392 3.223c-.456 1.074-.683 1.961-.683 2.661 0 .928.374 1.611 1.123 2.05.44.261 1.521.457 3.247.587v.903H2v-.903c1.188-.18 2.165-.672 2.93-1.477.765-.806 1.709-2.47 2.832-4.993L19.602 15h.464l11.939 27.148c1.14 2.572 2.075 4.192 2.807 4.859.554.504 1.335.797 2.344.879v.903H21.141v-.903h.659c1.286 0 2.189-.18 2.71-.537.358-.26.537-.635.537-1.123 0-.293-.049-.594-.147-.904-.032-.146-.276-.757-.732-1.83l-1.758-4.127zm-.83-1.806l-4.932-11.402L11.57 37.56h10.01zM52 45.419c-2.783 2.459-5.282 3.687-7.495 3.687-1.302 0-2.385-.427-3.247-1.281-.863-.855-1.294-1.925-1.294-3.21 0-1.742.749-3.309 2.246-4.7 1.497-1.392 4.76-3.243 9.79-5.555v-2.295c0-1.725-.094-2.811-.28-3.259-.188-.447-.542-.838-1.063-1.172a3.19 3.19 0 0 0-1.758-.5c-1.058 0-1.928.236-2.612.708-.423.293-.635.635-.635 1.025 0 .342.228.765.684 1.27.618.7.928 1.375.928 2.026 0 .798-.297 1.477-.891 2.039-.595.561-1.372.842-2.332.842-1.025 0-1.884-.31-2.576-.928-.691-.618-1.037-1.343-1.037-2.173 0-1.172.464-2.29 1.391-3.357.928-1.066 2.222-1.884 3.882-2.453 1.66-.57 3.386-.855 5.176-.855 2.165 0 3.878.46 5.14 1.38 1.26.92 2.078 1.916 2.453 2.99.228.684.342 2.255.342 4.712v8.863c0 1.041.04 1.696.122 1.965.081.269.203.468.366.598.163.13.35.195.561.195.424 0 .855-.3 1.294-.903l.733.586c-.814 1.204-1.656 2.08-2.527 2.625-.87.545-1.86.817-2.966.817-1.303 0-2.32-.305-3.052-.915-.733-.61-1.18-1.534-1.343-2.771zm0-1.781v-7.642c-1.97 1.156-3.434 2.393-4.395 3.711-.634.879-.952 1.766-.952 2.661 0 .749.269 1.408.806 1.978.407.44.977.659 1.709.659.814 0 1.758-.456 2.832-1.367z"/>
    </svg>
  )
}

IconTcSpecTypeSerif.propTypes = {
  fill   : React.PropTypes.string,
  stroke : React.PropTypes.string,
  height : React.PropTypes.number,
  width  : React.PropTypes.number
}

export default IconTcSpecTypeSerif
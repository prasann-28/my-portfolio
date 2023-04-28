import React from 'react'

const VerticalLineGradient = ({height = "h-full"}) => {
  return (
    <div className={`w-0.5 ${height} bg-gradient-rainblue`}
    ></div>
  )
}

export default VerticalLineGradient
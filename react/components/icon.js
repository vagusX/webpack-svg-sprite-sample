import React from 'react'

// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
const _require = require.context('../../assets/icons', false, /\.svg$/)
_require.keys().forEach(key => _require(key))

const Icon = ({symbol, className}) => {
  const iconClass = className ? `Icon Icon-${symbol} ${className}` : `Icon Icon-${symbol}`
  return (
    <svg className={iconClass}>
      <use xlinkHref={`#${symbol}`} />
    </svg>
  );
}

export default Icon

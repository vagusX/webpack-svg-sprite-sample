<template>
  <svg :class="iconClass">
    <use xlink:href="#{{symbol}}"></use>
  </svg>
</template>

<script>
// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
{
  const _require = require.context('../../assets/icons', true, /\.svg$/)
  _require.keys().forEach(key => _require(key))
}

export default {
  props: [
    'symbol',
    'className'
  ],
  computed: {
    iconClass() {
      const { symbol, className } = this
      return className ? `Icon Icon-${symbol} ${className}` : `Icon Icon-${symbol}`
    }
  }
}
</script>

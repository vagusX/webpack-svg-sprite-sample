<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="icon-wrapper">
      <icon symbol="panda"></icon>
      <div>
        <icon symbol="play"></icon>
        <icon symbol="cross"></icon>
      </div>
      <div style="stroke-width: 5%;">
        <span style="color:orchid">
          <icon symbol="heart1" class="Icon--stroketest"></icon>
        </span>
        <span style="color:mediumpurple;width:2em;">
          <icon symbol="hearts" class="Icon--stroketest"></icon>
        </span>
      </div>
      <div>
        <icon symbol="star"></icon>
        <icon symbol="star" class="Icon--goldstar"></icon>
      </div>
      <div>
        <icon symbol="check"></icon>
        <icon symbol="check" class="Icon--two1"></icon>
        <icon symbol="check" class="Icon--two2"></icon>
      </div>
      <div>

        <icon symbol="twitter" class="purpleIconBox"></icon>
        <span class="purpleIconBox">
          <icon symbol="twitter" ></icon>
        </span>
      </div>
      <div>
        <icon symbol="iconic-aperture"></icon>
        <icon symbol="iconic-aperture" class="Icon--vars1"></icon>
        <icon symbol="iconic-aperture" class="Icon--vars2"></icon>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './components/icon'

export default {
  components: {
    Icon
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
@import '../styles/index.css';

</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="icon-wrapper">
      <div>
        <svg class="Icon" aria-hidden="true">
          <use :xlink:href="iconSet.Play"></use>
        </svg>
        <svg class="Icon" aria-hidden="true">
          <use :xlink:href="iconSet.Cross"></use>
        </svg>
      </div>
      <div style="stroke-width: 5%;">
        <svg class="Icon Icon--stroketest" style="color:orchid" aria-hidden="true">
          <use :xlink:href="iconSet.Heart1"></use>
        </svg>
        <svg class="Icon Icon--stroketest" style="color:mediumpurple;width:2em;" aria-hidden="true">
          <use :xlink:href="iconSet.Hearts"></use>
        </svg>
      </div>
      <div>
        <svg class="Icon" aria-hidden="true">
          <use :xlink:href="iconSet.Star"></use>
        </svg>
        <svg class="Icon Icon--goldstar" aria-hidden="true">
          <use :xlink:href="iconSet.Star"></use>
        </svg>
      </div>
      <div>
        <svg class="Icon" aria-hidden="true">
          <use :xlink:href="iconSet.Check"></use>
        </svg>
        <svg class="Icon Icon--two1" aria-hidden="true">
          <use :xlink:href="iconSet.Check"></use>
        </svg>
        <svg class="Icon Icon--two2" aria-hidden="true">
          <use :xlink:href="iconSet.Check"></use>
        </svg>
      </div>
      <div>
        <svg class="Icon purpleIconBox" aria-hidden="true">
          <use :xlink:href="iconSet.Twitter"></use>
        </svg>
        <span class="purpleIconBox">
          <svg class="Icon" aria-hidden="true">
            <use :xlink:href="iconSet.Twitter"></use>
          </svg>
        </span>
      </div>
      <div>
        <span>
          <svg class="Icon" aria-hidden="true">
            <use :xlink:href="iconSet.IconicAperture"></use>
          </svg>
        </span>
        <span>
          <svg class="Icon Icon--vars1" aria-hidden="true">
            <use :xlink:href="iconSet.IconicAperture"></use>
          </svg>
        </span>
        <span>
          <svg class="Icon Icon--vars2" aria-hidden="true">
            <use :xlink:href="iconSet.IconicAperture"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import * as iconSet from '../assets/icon-set'

export default {
  data () {
    return {
      msg: 'Hello Vue!',
      iconSet: iconSet
    }
  }
}
</script>

<style>
@import '../styles/index.css';

</style>

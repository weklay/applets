<template>
  <div class="cell" :class="arrow?'cell-arrow':''">
    <div class="cell_icon" :class="icon" v-if="icon&&!imgUrl"></div>
    <div class="cell_img" v-if="imgUrl&&!icon">
      <img :src="imgUrl">
    </div>
    <div class="cell_left" v-if="desc">
      <div class="cell_left-text" :style="[textSize?{';font-size':textSize+'px'}:'',textColor?{';color':textColor}:'']">
        {{text?text:''}}
      </div>
      <div class="cell_left_desc" :style="descColor?{color:descColor}:''">
        {{desc?desc:''}}
      </div>
    </div>
    <div v-else class="cell_left" :style="[textSize?{';font-size':textSize+'px'}:'',textColor?{';color':textColor}:'']">
      {{text?text:''}}
    </div>
    <div class="cell_right" :style="infoColor?{color:infoColor}:''">
      {{info?info:''}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      arrow: Boolean,
      icon: Array,
      imgUrl: String,
      text: String,
      textColor: String,
      textSize: Number,
      desc: String,
      descColor: String,
      info: String,
      infoColor: String
    }
  }
</script>

<style lang="stylus">
  @import "../stylus/cell.styl"
</style>

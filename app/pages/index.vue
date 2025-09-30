<script setup lang="ts">
const bannerList = apiHome.banner()
console.log(bannerList)
const useKui = kuiStore()
</script>

<template>
  <div
    class="flex-col h100"
    style="
      background-image: url('https://gj-h5vip2-o9c-2c9-cvip.japanwest.cloudapp.azure.com/siteadmin/skin/lobby_asset/festival/202/common-1/common/bg_pattern_tile.avif?manualVersion=1&version=8b2d367699');
      background-size: 1.8rem 1.8rem;
    "
  >
    <!--头部-->
    <header class="relative border-b border-b-solid border-c333" style="background-color: #1a1a1a">
      <div class="relative z-2 flex-rcb h-90 pt-7 pb-7 pl-10 pr-20 box-border">
        <KuiImg :src="getCdn('/siteadmin/upload/img/1938232113923428353.avif')" height="100%" class="cursor" />
        <div class="flex-ccc h100 cursor">
          <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1ss.avif')" class="w-54" />
          <span class="size22 c999" @click="useKui.onToast('弹出提示')">搜索</span>
        </div>
      </div>
      <div class="absolute z-1 top-0 left-0 w100 h100 flex-rcb">
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr.avif')" height="100%" />
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr3.avif')" height="100%" />
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr2.avif')" height="100%" />
      </div>
      <div class="absolute z-1 top-0 left-0 w100 h100 flex-ccc">
        <KuiImg src="/a.png" height="100%" class="pl-60" />
      </div>
    </header>
    <!--banner-->
    <div class="p-20">
      <KuiImg :src="getCdn(bannerList[0]?.url)" width="100%" />
    </div>
  </div>
</template>

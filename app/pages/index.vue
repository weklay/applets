<script setup lang="ts">
const bannerList = apiHome.banner()
const useKui = kuiStore()
const gameOpts = [
  { icon: 'icon_dtfl_rm_1', title: '热 门' },
  { icon: 'icon_dtfl_dz_1', title: '电 子' },
  { icon: 'icon_dtfl_by_1', title: '捕 鱼' },
  { icon: 'icon_dtfl_qp_1', title: '棋 牌' },
  { icon: 'icon_dtfl_zr_1', title: '真 人' },
  { icon: 'icon_dtfl_ty_1', title: '体 育' },
  { icon: 'icon_dtfl_douji_1', title: '斗 鸡' },
  { icon: 'icon_dtfl_dianjing_1', title: '电 竞' },
  { icon: 'icon_dtfl_cp_1', title: '彩 票' },
  { icon: 'icon_dtfl_qkl_1', title: '区块链' },
  { icon: 'icon_dtfl_sw_1', title: '试 玩' }
]
</script>

<template>
  <div class="flex-col h100 overflow-hidden">
    <!--头部-->
    <header class="relative border-b border-b-solid border-c333" style="background-color: #1a1a1a">
      <div class="relative z-2 flex-rcb h-90 pt-7 pb-7 pl-10 pr-20 box-border">
        <KuiImg :src="getCdn('/siteadmin/upload/img/1938232113923428353.webp')" class="w-256 h-76 cursor" />
        <div class="flex-ccc h100 cursor">
          <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1ss.avif')" class="w-54 h-50" />
          <span class="size22 desc-color" @click="useKui.onToast('弹出提示')">搜索</span>
        </div>
      </div>
      <!-- <div class="absolute z-1 top-0 left-0 w100 h100 flex-rcb">
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr.avif')" height="100%" />
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr3.avif')" height="100%" />
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/festival/202/common/common/h5_zs_jr2.avif')" height="100%" />
      </div>
      <div class="absolute z-1 top-0 left-0 w100 h100 flex-ccc">
        <KuiImg src="/a.png" height="100%" class="pl-60" />
      </div> -->
    </header>
    <section class="h100 flex-1 overflow-y-auto">
      <!-- <section
      class="h100 flex-1 overflow-hidden"
      :style="{ backgroundImage: `url(${getCdn('/siteadmin/skin/lobby_asset/festival/202/common-1/common/bg_pattern_tile.avif')})` }"
      style="background-size: 1.8rem 1.8rem"
    > -->
      <!--banner-->
      <div class="pt-20 pb-9 pl-20 pr-20">
        <KuiBanner :total="bannerList.length">
          <template v-for="(item, index) in bannerList" :key="index">
            <KuiImg :src="getCdn(item.url)" class="w100 h-209 radius-16" />
          </template>
        </KuiBanner>
      </div>
      <!--通知-->
      <div class="flex-rcb px-25 h-60">
        <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/web/home/icon_dt_pmd.avif')" class="w-37 h-34" />
        <div class="w100 flex-1 overflow-hidden ml-10 box-border">
          <div class="marquee-box animate-marquee animation-marquee">
            <p class="w100 size24 inline-block text-nowrap desc-color">
              ❤️欢迎莅临全球顶级竞技中心【凤凰国际】❤️我们承诺为每一位客户提供最佳、最公平的博弈游戏，恪守“客户至上”的宗旨服务广大贵宾。❤️每天四波免费红包雨，整点准时发放，精彩不容错过（VIP等级越高，红包雨越给力哟）❤️❤️官方永久域名：7988.com❤️&nbsp;&nbsp;❤️备用域名：0056.com❤️&nbsp;&nbsp;&nbsp;❤️简易域名：fhgj.com❤️&nbsp;&nbsp;&nbsp;❤️手机电脑版：7988dh.com❤️&nbsp;&nbsp;&nbsp;&nbsp;❤️在线客服：7988kf.com❤️
            </p>
            <p class="w100 size24 inline-block text-nowrap desc-color">
              ❤️欢迎莅临全球顶级竞技中心【凤凰国际】❤️我们承诺为每一位客户提供最佳、最公平的博弈游戏，恪守“客户至上”的宗旨服务广大贵宾。❤️每天四波免费红包雨，整点准时发放，精彩不容错过（VIP等级越高，红包雨越给力哟）❤️❤️官方永久域名：7988.com❤️&nbsp;&nbsp;❤️备用域名：0056.com❤️&nbsp;&nbsp;&nbsp;❤️简易域名：fhgj.com❤️&nbsp;&nbsp;&nbsp;❤️手机电脑版：7988dh.com❤️&nbsp;&nbsp;&nbsp;&nbsp;❤️在线客服：7988kf.com❤️
            </p>
          </div>
        </div>
        <div class="relative">
          <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1xx_wd.avif')" class="w-61 h-53" />
          <KuiBadge value="70" class="absolute top-5 right-5" style="transform: translate(50%, -50%)" />
        </div>
      </div>
      <!--奖池-->
      <div class="pt-20 pb-10 pl-20 pr-20">
        <KuiImg :src="getCdn('/cocos/icon/vjp/1916483700860297217.webp')" class="w100 h-177" />
      </div>
      <!--登录-->
      <div class="w100 pl-20 pr-10 box-border flex-rcb">
        <div class="flex-rcc gap-20">
          <KuiBtn text="登 录" class="w-120 h-50 radius-10 size20 vi-color" />
          <KuiBtn text="注 册" class="w-120 h-50 radius-10 size20 bg-vi text-dark" />
        </div>
        <ul class="flex-rcc size22 desc-color">
          <li class="flex-ccc cursor px-15">
            <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1tg.avif')" class="w-57 h-53" />
            <span class="pt-5">分享赚钱</span>
          </li>
          <li class="flex-ccc cursor px-20">
            <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1vip.avif')" class="pb-5 w-57 h-53" />
            <span class="pt-5">VIP</span>
          </li>
          <li class="flex-ccc cursor px-25">
            <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1kf.avif')" class="w-57 h-53" />
            <span class="pt-5">客服</span>
          </li>
          <li class="flex-ccc cursor px-25">
            <KuiImg :src="getCdn('/siteadmin/skin/lobby_asset/1-1-1/common/_sprite/icon_dt_1gd.avif')" class="w-57 h-53" />
            <span class="pt-5">更多</span>
          </li>
        </ul>
      </div>
      <!--游戏-->
      <div class="w100 pt-20 pl-20 pr-20 box-border flex">
        <!--类别-->
        <ul class="flex-col gap-20 desc-color leading">
          <li v-for="(item, index) in gameOpts" :key="index" class="flex-rcb w-150 h-68 box-border pl-3 bg-black radius-12">
            <KuiImg :src="getCdn(`/siteadmin/skin/lobby_asset/1-1-common/common/_sprite/${item.icon}.avif`)" class="w-50 h-39" />
            <span class="pr-25">{{ item.title }}</span>
          </li>
        </ul>
        <!--内容-->
        <div class="w100 pl-20 box-border flex-1">
          <KuiTabs :list="['热门', '最近的', '收藏']" class="flex w100 border-b border-b-solid border-c333 text-color" />
        </div>
      </div>
    </section>
    <!--底部导航-->
    <AppFooter />
  </div>
</template>

<template>
  <div class="main">

    <div class="nav_ul">
      <div class="nav_ul_li">
        <a href="#"><span>发布普通课程</span><em></em></a>
      </div>
      <div class="nav_ul_li">
        <a href="#"><span>发布团购课程</span><em></em></a>
      </div>
      <div class="nav_ul_li">
        <a href="#"><span>发布优惠课程</span><em></em></a>
      </div>
    </div>

    <div class="ind_dh">
      <div class="nav_ul">
        <div class="nav_ul_li">
          <a href="#"><span>发布活动</span><em></em></a>
        </div>
        <div class="nav_ul_li">
          <a href="#"><span>发布招聘</span><em></em></a>
        </div>
        <div class="nav_ul_li">
          <a href="#"><span>发布资讯</span><em></em></a>
        </div>
        <div class="nav_ul_li">
          <a href="#"><span>发布互动圈</span><em></em></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  *{margin:0;padding:0;list-style:none;}
  body{width:100%;font-size:13px;font-family:"Microsoft YaHei";background:#e1e1e1;}
  a{text-decoration:none;cursor:pointer;color:#000;}button{cursor:pointer;}
  ul{margin: 0px;padding: 0px;}
  li{list-style:none;}
  em{font-style:normal;}
  img{border:none;line-height:0;height:auto !important;}
  h2{font-weight:400;}

  .left5{padding-left:5px;}
  .left10{padding-left:10px;}
  .left15{padding-left:15px;}
  .left60{padding-left:60px;}
  .fl{float:left;}
  .fr{float:right;}
  .cl2{color:#222;}
  .cl4{color:#444;}
  .cl6{color:#666;}
  .cl8{color:#888;}
  .red{color:red;}
  .bg_cld6{background:#d6d6d6 !important;}
  .f12{font-size:12px;}
  .f13{font-size:13px;}
  .f14{font-size:14px;}
  .f15{font-size:15px;}
  .f16{font-size:16px;}
  .f18{font-size:18px;}
  .mt20{margin-top:20px;}
  .hide{display:none !important;}
  .main{width:100%;max-width: 640px;min-width: 320px;margin: 0 auto;background:#fff;}
  .ind_banner{width:100%;overflow:hidden;line-height:0;}
  .ind_banner img{width:100%;}
  .ind_dh{width:100%;overflow:hidden;box-sizing:border-box;padding-top:10px;border-top:10px solid #f0f0f0;}
  .ind_dh_tit{border-left:6px solid #21afa9;margin:0 15px;}
  .ind_dh_tit span{padding-left:10px;}
  .ind_dh_tit a{display:block;float:right;width:30px;margin-top:8px;height:10px;background:url(http://cs.ypxqy.cn/youxuan/ind_more.jpg) center no-repeat;}

  .ind_notice_ul{width:100%;overflow:hidden;box-sizing:border-box;}
  .ind_notice_ul_li{padding:20px 0;overflow:hidden;width:100%;border-bottom:1px solid #f0f0f0;}
  .ind_notice_ul_li .ind_notice_ui{width:70px;height:70px;overflow:hidden;border-radius:50%;line-height:0;margin-left:15px;float:left;}
  .ind_notice_ul_li .ind_notice_ui img{width:100%;}
  .ind_notice_ul_li .ind_notice_right{overflow:hidden;}
  .ind_notice_ul_li .ind_notice_class{margin-left:10px;margin-right:90px;font-size:12px;line-height:20px;color:#666;float:left;position:relative;}
  .ind_notice_ul_li .ind_notice_schedule{width:80px;right:15px;position:absolute;margin-top:5px;}
  .ind_notice_ul_li .ind_notice_schedule a{display:block;overflow:hidden;width:100%;font-size:15px;text-align:center;box-sizing:border-box;
    margin-bottom:10px;border-radius:5px;background:#21afa9;color:#fff;height:30px;line-height:30px;}
  .ind_notice_ul_li .ind_notice_class .class_tag span{padding-right:5px;font-size:13px;display:inline-block;}

  .ind_hot{margin:15px;}
  .ind_hot_li{width:100%;border-radius:5px;line-height:0;min-height:100px;margin:10px 0;}
  .ind_hot_li img{width:100%;display:block;}
  .ind_hot_li h2{padding:15px 0;}

  .ind_group{width:100%;overflow:hidden;}
  .ind_group_li{margin:10px 0;border-bottom:1px solid #f0f0f0;woverflow:hidden;padding:15px 0;}
  .ind_group_li_ui{width:70px;height:70px;overflow:hidden;border-radius:5px;line-height:0;margin:0 10px 0 15px;float:left;}
  .ind_group_li_ui img{width:100%;}
  .ind_group_li_right{overflow:hidden;margin-right:15px;line-height:20px;font-size:12px;color:#888;}
  .ind_group_tagnum{padding:5px 0;margin-top:5px;overflow:hidden;}
  .ind_group_tagnum .ind_group_num{width:130px;height:8px;font-size:10px;background:#d6d6d6;border-radius:15px;float:right;}
  .ind_group_tagnum .ind_group_num_buy{background:#21afa9;height:8px;border-radius:15px 0 0 15px;line-height:0;}
  .ind_group_price{font-size:14px;}
  .group_pre_mark{text-decoration:line-through;margin-right:15px;}
  .ind_group_bt{width:1005;height:25px;line-height:25px;}
  .ind_group_bt a{width:26px;height:21px;float:left;display:block;}
  .ind_group_bt a img{width:26px;height:21px;padding-top:5px;}
  .ind_group_bt .ind_group_buy{background:#df0000;color:#fff;text-align:center;
    border-radius:20px;font-size:15px;height:25px;line-height:25px;width:90px;float:right;margin-right:0;}
  .ind_shuju{overflow:hidden;margin:0 15px;}
  .ind_shuju img{width:100%;}

  .ind_news{width:100%;padding-right:15px;box-sizing:border-box;margin-top:10px;}
  .ind_news_li{width:50%;float:left;padding-left:15px;box-sizing:border-box;margin:8px 0;}
  .ind_news_ui{width:100%;border-radius:5px;min-height:100px;}
  .ind_news_ui img{width:100%;}

  .ind_comment{width:100%;overflow:hidden;box-sizing:border-box;margin-top:10px;}
  .ind_comment_li{padding:10px 0;overflow:hidden;width:100%;border-bottom:1px solid #f0f0f0;}
  .ind_comment_li .ind_comment_ui{width:40px;height:40px;overflow:hidden;border-radius:20px;line-height:0;margin:0 15px;float:left;}
  .ind_comment_li .ind_comment_ui img{width:100%;}
  .ind_comment_right{font-size:12px;color:#444;}
  .ind_comment_right span{padding-right:15px;}
  .ind_comment_right p{font-size:12px;padding:5px 0;color:#888;}

  .nav_ul{width:100%;overflow:hidden;}
  .nav_ul_li{padding:15px;border-bottom:1px solid #f0f0f0;}
  .nav_ul_li a{overflow: hidden;}
  .nav_ul_li span{font-size:16px;}
  .nav_ul_li em{display: inline-block;float:right;margin-top:5px;border-right:2px solid #989898;border-bottom:2px solid #989898;width:8px;height:8px;transform: rotate(-45deg);  }
</style>

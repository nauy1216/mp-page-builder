<template>
  <view class="content">
    <u-button type="primary" @click="goCenter">go center</u-button>
    <u-button type="primary" @click="showToast">wx.showToast</u-button>
    <u-button type="primary" @click="showModal">wx.showModal</u-button>
    <u-button type="primary" @click="showLoading">wx.showLoading</u-button>
    <u-button type="primary" @click="showActionSheet">wx.showActionSheet</u-button>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  methods: {
    goCenter() {
      uni.navigateTo({
        url: "/app/center/index"
      });
    },
    showToast() {
      uni.showToast({
        title: "成功",
        icon: "success",
        duration: 2000
      });
    },
    showModal() {
      wx.showModal({
        title: "提示",
        content: "这是一个模态弹窗",
        success(res) {
          if (res.confirm) {
            uni.showToast({
              title: "用户点击确定",
              icon: "none",
              duration: 2000
            });
          } else if (res.cancel) {
            uni.showToast({
              title: "用户点击取消",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    },
    showLoading() {
      uni.showLoading({
        title: "加载中"
      });
      setTimeout(() => {
        uni.hideLoading();
      }, 2000);
    },
    showActionSheet() {
      uni.showActionSheet({
        itemList: ["A", "B", "C"],
        success(res) {
          console.log(res.tapIndex);
        },
        fail(res) {
          console.log(res.errMsg);
        }
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.content {
  padding-top: 50rpx;
}

u-button {
  margin: 20rpx 50rpx;
}
</style>

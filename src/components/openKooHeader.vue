<template>
  <div class="rain-header" >
    <div class="header-box" :style="dialogVisible ? 'z-index: 1000' :'z-index:10'">
      <div class="header-left">
        <img src="../assets/img/logo.png" @click="$router.push('/home')" alt="">
      </div>

      <div class="header-right">
        <ConnectWallet class="connect-wallet"></ConnectWallet>
      </div>
    </div>
    <div class="item-nav-header">

    </div>
  </div>
</template>

<script>
import ConnectWallet from "@/components/ConnectWallet";
import {mapGetters} from "vuex";

export default {
  name: "openKooHeader",
  components: {
    ConnectWallet,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    toggleSideBar(){
      this.$store.dispatch("app/toggleSideBar",!this.sidebar)
    },
    chooseAction(){}
  },

  created() {

  },
  watch: {

  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    navArr() {
      return this.$store.state.app.navArr
    },
    account() {
      return this.$store.state.app.account
    },
    sidebar() {
      return this.$store.state.app.isCollapse
    },
    userId() {
      // return this.$store.state.openKoo.userId
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>

.rain-header {
  position: relative;
  z-index: 1000;
  background-size: 100% 100%;
  .item-nav-header {
    width: 100%;
  }

  .header-box {
    overflow: hidden;
    height: 60px;
    display: flex;
    padding-right: 2%;
    width: 1100px;
    margin: 0 auto;
    align-items: center;
    z-index: 10;
    justify-content: space-between;
    background-size: cover;
    position: relative;
    .header-left {
      img{
        width: 160px;
      }
    }
    .nav-list{
      display: flex;
      flex: 1;
      padding: 0 0 0 30px;
      justify-content: flex-start;
      font-size: 16px;
      .nav-item{
        font-weight: bold;
        cursor: pointer;
        margin: 0 10px;
        &.active{
          background: linear-gradient(90deg, #07E0DD 0%, #625DFF 100%);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .header-right{
      display: flex;
      align-items: center;
      div{
        margin-left: 20px;
      }
    }
  }

  .connect-wallet {
    ::v-deep .el-button {
      span {
        font-size: 10px;
        padding: 8px 0;
      }
    }
  }

}

</style>

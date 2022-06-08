<template>
  <div class="bank-list">
    <div class="title-box">
      <div class="title">
        Buying NFT
      </div>
      <div class="right-btns">
        <div class="nav-list">
          <div class="nav-item" @click="activeIndex=0" :class="{'active':activeIndex==0}">
            Buying NFT
          </div>
          <div class="nav-item" @click="activeIndex=1" :class="{'active':activeIndex==1}">
            My NFT
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      NFT Fragmentation Lowers the Barrier of Entry for Investing in High-Value NFTs.
    </div>
    <div class="operate-button" style="margin-top: 40px" @click="choseType()">
      Creat NFT
    </div>
    <div class="list-title">
      <strong>
        Explore
      </strong>
      <span>
          300,000 Results
        </span>
    </div>
    <div class="list-box" v-show="activeIndex==0">

      <div class="list-item-box">
        <div class="list-item" @click="toDetail">
          <img src="../assets/img/item_img.png" alt="">
          <div class="item-info">
            <div class="name-item">
              <strong class="name">
                Joker
              </strong>
              <div class="state">
                Buyout
              </div>
            </div>
            <div class="item">
              <div class="left">
                MarketCap
              </div>
              <div class="value">
                $ 0.00
              </div>
            </div>
            <div class="item">
              <div class="left">
                Price
              </div>
              <div class="value">
                $ 0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-box" v-show="activeIndex==1">

    </div>
    <div class="create-dialog" v-show="isShowCreate">
      <div class="dialog-mask"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="title">
            CREAT NFT
          </div>
          <div class="close" @click="isShowCreate = false">
            x
          </div>
        </div>
        <div class="input-list">
          <div class="input-box">
            <div class="name">
              Create NFT type
            </div>
            <div class="input">
              <input type="text">
            </div>
          </div>
        </div>
        <div class="operate-button">
          CREAT
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "list",
  data(){
    return{
      isShowCreate:true,
      activeIndex:0,
      daiInfo:{
        APY:0
      },
      ethInfo:{
        APY:0
      },
      usdcInfo:{
        APY:0
      },
      btcInfo:{
        APY:0
      },
    }
  },
  computed:{
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  watch:{
    account(){
      this.getData()
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
    toDetail(){
      this.$router.push({name:'detail', params:{

      }})
    },
    getData(){
      if (!this.isConnected){
        return
      }
      this.$store.dispatch("market/ethMarketList",{param0:0}).then(res=>{
        this.ethInfo = res
        console.log(res)
      })
      this.$store.dispatch("market/usdcMarketList", { param0:0}).then(res=>{
        this.usdcInfo = res
      })
      this.$store.dispatch("market/DaiMarketList", { param0:0}).then(res=>{
        this.daiInfo = res
      })

    },
    choseType(){
      if(!this.isConnected){
        return
      }
      this.$store.dispatch("creator721/initialize").then(res => {
        console.log(res)
      })
    }
  },

}
</script>

<style lang="scss" scoped>
.create-dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .dialog-mask{
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
  .dialog-content{
    width: 500px;
    background: #311C49;
    padding: 30px 20px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    left: calc(50% - 250px);
    top: 100px;
    .dialog-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: 26px;
      }
      .close {
        font-size: 32px;
        cursor: pointer;
      }
    }
    .input-list{
      .input-box{
        padding: 10px 0;
        .name{
          color: #666;
        }
        .input{
          margin-top: 10px;
          input{
            width: 440px;
            height: 40px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            padding: 0 10px;
            &:focus-visible{
              outline: none;
            }
          }
        }

      }

    }
    .operate-button{
      margin-top: 30px;
      width: 100%;
    }
  }
}
.bank-list {
  .title-box{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .title {
      font-size: 30px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }
    .right-btns{
      .nav-list{
        display: flex;
        width: 280px;
        height: 50px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        .nav-item{
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          color: #fff;
          width: 140px;
          cursor: pointer;
          &.active{
            background: linear-gradient(90deg, #8701FF 0%, #50C6FF 100%);
            border-radius: 10px;
          }
        }
      }
    }
  }

  .intro{
    margin-top: 20px;
    width: 574px;
    font-size: 16px;
    font-weight: bold;
    color: #A6A6A6;
    line-height: 26px;
  }
  .nav-box{
    display: flex;
    margin: 30px 0;
    width: 240px;
    height: 40px;
    background: #07121C;
    border-radius: 30px;
    border: 1px solid #333333;
    .nav-item{
      cursor: pointer;
      text-align: center;
      width: 50%;
      height: 40px;
      line-height: 40px;
      border-radius: 30px;
      &.active{
        background: linear-gradient(90deg, #07E0DD 0%, #625DFF 100%);

      }
    }
  }
  .list-title{
    margin-top: 60px;
    strong{
      font-size: 26px;
    }
    span{
      color: #666;
      margin-left: 20px;
    }
  }
  .list-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .list-item-box{
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      padding: 1px;
      &:hover{
        background: linear-gradient(135deg, rgba(7, 217, 215, 1), rgba(97, 93, 255, 1)) ;
        box-shadow: 0px 0px 20px 0px rgba(58, 149, 240, 0.5);
      }
    }
    .list-item{
      width: 260px;
      height: 310px;
      background: #311C49;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0.95;
      padding: 20px;
      img{
        width: 220px;
      }
      .item-info{
        .name-item{
          display: flex;
          justify-content: space-between;
          padding: 10px 0 16px;
          .name{
            font-size: 20px;
            color: #fff;
          }
          .state{
            width: 50px;
            height: 24px;
            border-radius: 10px;
            border: 1px solid #649B82;
            color: #649B82;
            font-size: 12px;
            text-align: center;
            line-height: 24px;
          }
        }
        .item{
          padding: 6px 0;
          display: flex;

          justify-content: space-between;
          .left{
            color: #999;
          }
        }
      }

    }
  }
}
</style>

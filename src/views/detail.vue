<template>
  <div class="nft-detail">
    <div class="title">
      Joker
    </div>
    <div class="nft-state">
      <div class="state">
        Buyout
      </div>
      <div class="create">
        Created by
        <span>
          0xb434...
        </span>
      </div>
    </div>
    <div class="detail-content">
      <div class="img-box">
        <img class="nft-img" src="../assets/img/item_img.png" alt="">
      </div>
      <div class="right-content">
        <div class="part1">
          <div class="input-box">
            <div class="input-header">
              <div class="left">
                PAY
              </div>
              <div class="right">
                Available: 100,000.0
              </div>
            </div>
            <div class="input">

            </div>
          </div>
          <div class="operate-button">
            Confirm Order
          </div>
        </div>
        <div class="part2">
          <div class="list">
            <div class="item">
              <div class="name">
                Symbol
              </div>
              <div class="value">
                Joker
              </div>
            </div>
            <div class="item">
              <div class="name">
                Fragment Contract Address
              </div>
              <div class="value" style="color: #50C6FF">
                0x6195...8453
              </div>
            </div>
            <div class="item">
              <div class="name">
                Total Supply
              </div>
              <div class="value">
                5,000
              </div>
            </div>
            <div class="item">
              <div class="name">
                Symbol
              </div>
              <div class="value">
                Joker
              </div>
            </div>
            <div class="item">
              <div class="name">
                Fragments Reserved
              </div>
              <div class="value">
                -
              </div>
            </div>
            <div class="item">
              <div class="name">
                Market Cap
              </div>
              <div class="value">
                $ 0.00
              </div>
            </div>
            <div class="item">
              <div class="name">
                24H Volume
              </div>
              <div class="value">
                $ 0.00
              </div>
            </div>
            <div class="item">
              <div class="name">
                Trading Fee
              </div>
              <div class="value">
                3%
              </div>
            </div>
            <div class="item">
              <div class="name">
                Buyout Protection Period
              </div>
              <div class="value">
                ~ 2022/05/19
              </div>
            </div>
            <div class="item">
              <div class="name">
                Fragment's Initial Price
              </div>
              <div class="value">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var monthArray=new Array
("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
    "Sep","Oct","Nov","Dec");
import {mapGetters} from "vuex"
export default {
  name: "detail",
  data(){
    return{
      isShowChoose:false,
      rateIndex:0,
      amount: undefined,
      chartData: [
        1,5,7,9
      ],
      curChooseCoin:"ETH",
      coinName:"DAI",
      usdcList:{
        uamount:'-',

      },
      coinInfo:{},
      curDay: new Date().getDate(),
      curYear: new Date().getFullYear(),
      curMonth:monthArray[new Date().getMonth() +1]
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

  },
  methods:{
    chooseCoin(coin){
      this.curChooseCoin = coin
      this.isShowChoose=false
    },

    getData(){


    },
  }
}
</script>

<style lang="scss" scoped>
.nft-detail {
  width: 1100px!important;
  margin: 0 auto;
  .nft-state{
    margin: 10px 0;
    display: flex;
    align-items: center;
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
    .create{
      margin-left: 12px;
      span{
        color: #50C6FF;
      }
    }
  }
  .detail-content{
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    .nft-img{
      width: 450px;
    }
    .right-content{
      .part1,.part2{
        width: 450px;
        background: #311C49;
        border-radius: 15px;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        .input-box{
          .input-header{
            display: flex;
            justify-content: space-between;
            .right{
              color: #999;
            }
          }
        }
        .operate-button{
          margin-top: 50px;
          width: 400px;
        }
      }
      .part2{
        margin-top: 20px;
        .list{
          .item{
            padding: 6px 0;
            display: flex;
            justify-content: space-between;
            .name{
              color: #999;
            }
          }
        }
      }
    }
  }

}
</style>

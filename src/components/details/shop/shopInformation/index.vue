<template>
    <div class="shopInformation">
        <div class="produce">
            <h3>{{name}}</h3>
            <p>{{jieshao}}</p>
            <div class="price">
                <div class="shopPrice">
                    <span><i class="iconfont">&#xe652;</i>{{number}}</span>
                    <b>{{kg}}</b>
                </div>    
                <p>{{qg}}</p>
                <div class="time">
                    {{hs}} <span>{{time}}</span> {{js}}
                </div>
            </div>
            <div class="origin">
                <div class="originPrice">
                    <span><i class="iconfont">&#xe652;</i>{{oNumber}}</span>
                    <b>{{kg}}</b>
                </div>
                <div class="sell">
                    {{sell}}
                </div>
            </div>
            <div class="weigh">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0i5ZWG5ZOB6K+m5oOFIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8ZyBpZD0iMS1tYXgt5rS75p2A6bG8LeeJueS7tyIgc3Ryb2tlPSIjNDlBQTM0IiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1IC01MTEpIj4KICAgICAgPGcgaWQ9Iuavj+S7veS7t+agvC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ5NykiPgogICAgICAgIDxnIGlkPSLmgLvku7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEyKSI+CiAgICAgICAgICA8ZyBpZD0iZGV0YWlsc19pY29uX1dlaWdoaW5nX2Rpc2FibGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0xIiBkPSJNMTQsLTMuNTUyNzEzNjhlLTE1IEMxNCwtMy41NTI3MTM2OGUtMTUgMTIuOTc2OTIzMSwxLjczOTc2OTIzIDEyLjM4NDYxNTQsMS43Mzk3NjkyMyBMMS42MTUzODQ2MiwxLjczOTc2OTIzIEMxLjAyMzA3NjkyLDEuNzM5NzY5MjMgMCwtMy41NTI3MTM2OGUtMTUgMCwtMy41NTI3MTM2OGUtMTUiLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0zIiBkPSJNMi4yMjQ0MzQ2Miw3LjIyNDQzNDYyIEMyLjIyNDQzNDYyLDQuNTg3MzY3NDEgNC4zNjI0NTUyNCwyLjQ0ODg2OTIzIDcsMi40NDg4NjkyMyBDOS42MzcwNjcyMSwyLjQ0ODg2OTIzIDExLjc3NTU2NTQsNC41ODczNjc0MSAxMS43NzU1NjU0LDcuMjI0NDM0NjIgQzExLjc3NTU2NTQsOS44NjE5NzkzOCA5LjYzNzA2NzIxLDEyIDcsMTIgQzQuMzYyNDU1MjQsMTIgMi4yMjQ0MzQ2Miw5Ljg2MTk3OTM4IDIuMjI0NDM0NjIsNy4yMjQ0MzQ2MiBaIi8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJTdHJva2UtNSIgZD0iTTUuNzQ3OTY5MjMsNy44MzM0ODQ2MiBDNS43NDc5NjkyMyw3LjE0MjEgNi45OTk4OTIzMSw1LjY0MzU2MTU0IDYuOTk5ODkyMzEsNS42NDM1NjE1NCBDNi45OTk4OTIzMSw1LjY0MzU2MTU0IDguMjUxODE1MzgsNy4xNDIxIDguMjUxODE1MzgsNy44MzM0ODQ2MiBDOC4yNTE4MTUzOCw4LjUyNDg2OTIzIDcuNjkxMjc2OTIsOS4wODU0MDc2OSA2Ljk5OTg5MjMxLDkuMDg1NDA3NjkgQzYuMzA4NTA3NjksOS4wODU0MDc2OSA1Ljc0Nzk2OTIzLDguNTI0ODY5MjMgNS43NDc5NjkyMyw3LjgzMzQ4NDYyIFoiLz4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNyIgcG9pbnRzPSIxMS44MjkgMTAuNDggMTMuNSAxMy45MjIgLjUgMTMuOTIyIDIuMTcyIDEwLjQ4Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt="">
                <span>{{weigh}}<i class="iconfont">&#xe652;</i>{{wNumber}}</span>
                <div class="weight">{{weight}}</div>
                <img class="jt" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPHBhdGggZD0iTTEwIDcuMjEzbDEuMjk0LTEuMjEzIDEwLjcwNiAxMC0xMC43MDYgMTAtMS4yOTQtMS4yMDYgOS40MDYtOC43OTR6Ij4KICA8L3BhdGg+Cjwvc3ZnPgo=" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:"橙状元XL级简包装",
            jieshao:"果径75-80mm 很甜很好吃！生态种植、农博会金奖、供港品质！小贴士：放冰箱存储，口感会更好，少量脱水，不影响口感。",
            number:"4.50",
            kg:"/500g",
            qg:"限时抢购",
            hs:"还剩",
            js:"结束",
            time:"12:00:00",
            oNumber:"15.90",
            sell:"出售28886份",
            weigh:"每份约",
            wNumber:"22.50",
            weight:"称重"
        }
    },
}
</script>

<style lang="scss">
    .shopInformation{
        width: 100%;
        height: 4.4rem;
        background: #fff;
        display: flex;
        padding: 0.34rem;
        .produce{
            display: flex;
            flex-direction: column;
            width: 100%; 
            height: 3.87rem;
             h3{
                font-size: .35rem;
                color: #666;       
                font-weight: 500;
                margin-bottom: .25rem;
             }
             p{
                font-size: .3rem;
                color: #999;
              }
              .price{
                    width: 100%;
                    height: 0.68rem;
                    margin: 10px 0 5px;
                    display: flex;
                  .shopPrice{
                    width: 1.6rem;
                    height: 0.68rem;
                    display: flex;
                    align-items: center;
                        span{
                            font-size: .3rem;
                            color:#ff3e3e;
                            i{
                                font-size: .25rem;
                            }
                        }
                        b{
                            font-size: .25rem;
                            color:  rgb(153, 153, 153);
                        }
                 } 
                    p{
                        width: 1.2rem;
                        height: .48rem;
                        display: block;
                        background: linear-gradient(90deg,#ffa033,#ff5551);
                        border-radius: 20px;
                        font-size: .22rem;
                        line-height: .48rem;
                        text-align: center;
                        color: #fff;
                        padding: 0 6px;
                        margin:10px 0 0 8px;
                    } 
                    .time{
                        width: 3.15rem;
                        height: .67rem;
                        color: #f05423;
                        font-size: .25rem;
                        line-height: .67rem;
                        text-align: center;
                    }
                 }
                .origin{
                        width: 100%;
                        height:.42rem;
                        display: flex;

                        .originPrice{
                            width: 5.15rem;
                            height: .42rem;
                            font-size: .25rem;
                            color:  rgb(153, 153, 153);
                        }
                        .sell{
                            width: 1.6rem;
                            height: .42rem;
                            font-size: .25rem;
                            color:  rgb(153, 153, 153);
                        }
                    }
                .weigh{
                    width: 100%;
                    height: .68rem;
                    display: flex;
                    position: relative;
                    justify-content: start;
                    align-items: center;
                    span{
                        padding-left: 10px;
                    }
                    .weight{
                        width: .64rem;
                        height: .44rem;
                        margin-left: 12px;
                        color: #ff9535;
                        font-size: .25rem;
                        background-color: rgba(255,166,85,.2);
                        border-radius: .75rem;
                        padding: 4px 4px;
                    }
                    img{
                        width: .32rem;
                        height:.32rem;
                    }
                    .jt{
                        position: absolute;
                        right: 0;
                    }
                }
         }
         
    }
     
</style>
<template>
    <div class="listSearch">
        <div class="searchAll">
            <div class="search-input">
                <div class="search-input-left">
                    <input type="text" title="请输入要搜索的内容">
                </div>
                <div class="search-input-right">
                    <button>搜索</button>
                </div>
            </div>
            <div class="search-hotword">
                <p>热门搜索</p>
                <div class="searchLists">
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                    <p>蜜瓜</p>
                </div>
            </div>
            <div class="search-history">
                <p>最近搜索</p>
                <div class="searchHistoryLists">
                    <div class="searchHistoryListsCon">
                        <p>蜜瓜</p>
                        <span>×</span>
                    </div>
                    <div class="searchHistroyClearItem">
                        清空历史纪录
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .listSearch{
        width: 100%;
        height: 100%;
        .searchAll{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .search-input{
                width: 100%;
                height: 1.12rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.2rem 0.4rem;;
                .search-input-left{
                    height: 100%;
                    width: 5rem;
                    input{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        border: 0;
                        background: #f0f0f0;
                        border-radius: 5px 5px 5px 5px;
                        color: #000;
                        outline: none;
                    }
                }
                .search-input-right{
                    height: 100%;
                    width: 1.5rem;
                    button{
                        border-radius: 5px 5px  5px 5px;
                        height: 100%;
                        width: 1.5rem;
                        background: #4cd964;
                        border: 0;
                        outline: none;
                        color: #fff;
                    }
                }
            }
            .search-hotword{
                width: 100%;
                height: 3.76rem;
                background: #f0f0f0;
                display: flex;
                flex-direction: column;
                p{
                    width: 100%;
                    height: .88rem;
                    font-size: 0.35rem;
                    line-height: 0.88rem;
                    color: #333;
                }
                .searchLists{
                    width: 100%;
                    height: 2.88rem;
                    display: flex;
                    flex-flow: wrap;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0rem 0.2rem;
                    p{
                        width: 2.24rem;
                        height: 0.72rem;
                        text-align: center;
                        line-height: 0.72rem;
                        font-size: 0.3rem;
                        background: #fff;
                    }
                }
            }
            .search-history{
                width: 100%;
                height: 100%;
                background: #f0f0f0;
                display: flex;
                flex-direction: column;
                p{
                    width: 100%;
                    height: .88rem;
                    font-size: 0.35rem;
                    line-height: 0.88rem;
                     color: #333;
                }
                .searchHistoryLists{
                    width: 100%;
                    height: 100%;
                    .searchHistoryListsCon{
                        width: 100%;
                        height: 0.82rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid #f0f0f0;
                         padding: 0px 0.4rem;
                        background: #fff;
                        p{
                            font-size: 0.3rem;
                            width: 100%;
                            height: 100%;
                            color: #333;
                        }
                        span{
                            font-size: 0.4rem;
                            color: #999;
                        }
                    }
                    .searchHistroyClearItem{
                        width: 100%;
                        height: 0.82rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 2px solid #f0f0f0;
                         padding: 0px 0.4rem;
                        background: #fff;
                        font-size: 0.3rem;
                        color: #333;
                    }
                }
            }
        }
    }
</style>
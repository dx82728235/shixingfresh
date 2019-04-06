<template>
    <div class="rule">
        <Nav/>
        <div class="rules">
            <div class="name">
                <div class="left">
                    {{name1}}
                </div>
                <div class="right">
                    {{name2}}
                </div>
            </div>
            <div class="id">
                <div class="left">
                    {{id1}}
                </div>
                <div class="right">
                    {{id2}}
                </div>
            </div>
            <div class="rl">
                <div class="left">
                    {{rl1}}
                </div>
                <div class="right">
                    {{rl2}}
                </div>
            </div>
            <div class="adress">
                <div class="left">
                    {{adress1}}
                </div>
                <div class="right">
                    {{adress2}}
                </div>
            </div>
            <div class="cc">
                <div class="left">
                    {{cc1}}
                </div>
                <div class="right">
                    {{cc2}}
                </div>
            </div>
            <div class="sc">
                <div class="left">
                    {{sc1}}
                </div>
                <div class="right">
                    {{sc2}}
                </div>
            </div>
            <div class="time">
                <div class="left">
                    {{time1}}
                </div>
                <div class="right">
                    {{time2}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/gdetails/detailsNav'
export default {
    data(){
        return{
            name1:"商品名称",
            name2:" 橙状元XL级简包装",
            id1:"编号",
            id2:"2205459",
            rl1:"规格",
            rl2:"2500.0g/份",
            adress1:"产地",
            adress2:"湖南省郴州市",
            cc1:"储存方式",
            cc2:"冷藏",
            sc1:"税收分类",
            sc2:"柑橘类水果（用于开具发票）",
            time1:"截单时间",
            time2:""
        }
    },
    components:{
        Nav
    }
}
</script>

<style lang="scss" scoped>
    .rule{
        width: 100%;
        height: 100%;
        .rules{
            width: 100%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            .name{
                margin-top: .8rem;
                width: 100%;
                height: 1.12rem;
                border-top: 2px solid #999;
                background: #fff;
                 display: flex;
                justify-content: space-around;
                align-items: center;
                .left{
                    width: 1.8rem;
                    height: .48rem;
                    text-align: center;
                    line-height: .48rem;
                    color: #999;
                    font-size: .275rem;
                }
                .right{
                    width: 4.78rem;
                    height: .48rem;
                    line-height: .48rem;
                    color: #333;
                    font-size: .275rem;
                }
            }
            .id,.rl,.adress,.cc,.sc,.time{
                width: 100%;
                height: 1.12rem;
                border-top: 2px solid #999;
                background: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .left{
                    width: 1.8rem;
                    height: .48rem;
                    text-align: center;
                    line-height: .48rem;
                    color:#999;
                    font-size: .275rem;
                }
                .right{
                    width: 4.78rem;
                    height: .48rem;
                    line-height: .48rem;
                    color: #333;   
                    font-size: .275rem;
                }
            }
           
        }
    }
</style>

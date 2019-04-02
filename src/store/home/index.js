import {mattersNeed,anotherUrlList,rushToPay} from '@/api/home/api'
export default {
    namespaced: true,
    state: {
        urlList:[],
        sellPoint:[],
        topCenterInfos:{},
        productsList:[]
    },
    mutations: {
        getmutationsUrlList(state,params){
            state.urlList.push(params.ShortcutIcons.slice(0,10));
            state.urlList.push(params.ShortcutIcons.slice(10,params.ShortcutIcons.length));
            state.topCenterInfos = params.TopCenterInfos[0];
            state.topCenterInfos.linkUrl = params.TopCenterInfos[0].LinkUrls[0];
        },
        getMutationsMattersNeed(state,params){
            state.sellPoint.push(params.HomeTabInfos[0].SellPoints)
        },
        getMutationsRushToPay(state,params){
            console.log(params)
            state.productsList = params.FlashSaleProducts
        }
    },
    actions: {
        async getActionsUrlList({commit}){
            let data = await anotherUrlList();
            commit("getmutationsUrlList",data.Data);
        },
        async getActionsMattersNeed({commit}){
            let data = await mattersNeed();
            commit("getMutationsMattersNeed",data.Data);
        },
        async getActionsRushToPay({commit}){
            let data = await rushToPay();
            commit("getMutationsRushToPay",data.Data);
        }
    },
    getters:{
        
    }
}
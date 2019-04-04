import {mattersNeed,anotherUrlList,rushToPay,searcgInfo,bannerSwpier} from '@/api/home/api'
import {searchHotInfo,searchPageInfo} from '@/api/common/search/api'
export default {
    namespaced: true,
    state: {
        urlList:[],
        sellPoint:[],
        topCenterInfos:{},
        productsList:[],
        searchInfo:"",
        bannerUrl:[],
        searchHotInfo:"",
        searchPageInfo:''
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
           // console.log(params)
            state.productsList = params.FlashSaleProducts
        },
        getMutationsSearcgInfo(state,params){
            state.searchInfo = params.keyword;
        },
        getMutationsBannerSwpier(state,params){
            params.map((item,index)=>{
                var url = {};
                url.picUrl = item.PicUrl;
                url.jumpUrl = item.JumpValue;
                state.bannerUrl.push(url)
            })
            state.bannerImage = params
        },
        getMutationsSearchHotInfo(state,params){
            state.searchHotInfo = params;
        },
        getMutationsSearchPageInfo(state,params){
            console.log(params);
            //state.searchPageInfo
        }
    },
    actions: {
        async getActionsUrlList({commit}){  //banner下注意事项
            let data = await anotherUrlList();
            commit("getmutationsUrlList",data.Data);
        },
        async getActionsMattersNeed({commit}){  //中上部导航按钮
            let data = await mattersNeed();
            commit("getMutationsMattersNeed",data.Data);
        },
        async getActionsRushToPay({commit}){  //限时抢购
            let data = await rushToPay();
            commit("getMutationsRushToPay",data.Data);
        },
        async getActionsSearcgInfo({commit}){  //搜索栏信息
            let data = await searcgInfo();
            commit("getMutationsSearcgInfo",data.Data);
        },
        async getActionsBannerSwpier({commit}){  //banner
            let data = await bannerSwpier();
            commit("getMutationsBannerSwpier",data.Data);
        },
        async getActionsSearchHotInfo({commit}){  //搜索页面热门信息
            let data = await searchHotInfo();
            commit("getMutationsSearchHotInfo",data.Data);
        },
        async getActionsSearchPageInfo({commit}){  //搜索页面提示信息
            let data = await searchPageInfo();
            commit("getMutationsSearchPageInfo",data.Data);
        }
    },
    getters:{
        
    }
}
import {productsPageDetails,ueserComment} from '@/api/details/api'

export default {
    namespaced: true,
    state: {
        productActivityList:[],
        productInfo:{},
        productInfoServiceList:[],
        productBanner:[],
        commentPic:[],
        commentCon:"",
        customerName:''
    },
    mutations: {
        getMutatiosProductDetails(state, params) {
            state.productActivityList = params.productActivityList;
            state.productInfo = params.productInfo;
            state.productInfoServiceList = params.productInfoServiceList;
            state.productBanner = params.productInfo.banners;
        },
        getMutatiosUeserComment(state,params){
            console.log(params)
            state.commentCon = params.content;
            state.customerName = params.customerName;
            // params.pictureCollection.map(item=>{
            //     state.commentPic.push(item)
            // })
        }
    },
    actions: {
        async getActionsProductDetails({ commit }, params) {
            let data = await productsPageDetails(params);
            commit("getMutatiosProductDetails", data.result);
        },
        async getActionsUeserComment({ commit }, params) {
            let data = await ueserComment(params);
            commit("getMutatiosUeserComment", data.Data);
        }
    }
}
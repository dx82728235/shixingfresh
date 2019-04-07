import {productsPageList} from '@/api/list/api'

export default {
    namespaced:true,
    state:{
        products:[],
        detailsProId:0
    },
    mutations:{
        toMutatiosProductList(state,params){
            state.products = params.SourceData;
        },
        toMutationsProductDetails(state,params){
            state.detailsProId = params;
        }
    },
    actions:{
        async toActionsProductList({commit},params){  
            let data = await productsPageList(params);
            commit("toMutatiosProductList",data.Data);
        },
        toActionsProductDetails({commit},params){
            commit("toMutationsProductDetails",params);
        }
    },
    getters:{

    }
}

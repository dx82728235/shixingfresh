import {classifyList,hotWardContent,subCategoryContent} from "@/api/classify/api"

export default {
    namespaced: true,
    state:{
      productList:[],
      hotWardCon:[],
      subCategoryCon:[],
      subCategoryConList:[],
      listId:0
    },
    mutations:{
        getMutationsClassifyList(state,params){
            params.unshift({Name:"推荐分类"})
            state.productList = params;
        },
        getMutationsHotWardContent(state,params){
            state.hotWardCon = params.HotCategoryList;
        },
        getMutationsSubCategoryContent(state,params){
            state.subCategoryConList = [];
            state.subCategoryCon = params.SubCategories;
            params.SubCategories.map((item,index)=>{
                state.subCategoryConList.push(item.SmallCategories)
            })
        },
        sendMutationsApiParameter(state,params){
            state.listId = params
        }
    },
    actions:{
        async getActionsClassifyList({commit}){  //新人大礼
            let data = await classifyList();
            commit("getMutationsClassifyList",data.Data);
        },
        async getActionsHotWardContent({commit}){  
            let data = await hotWardContent();
            commit("getMutationsHotWardContent",data.Data);
        },
        async getActionsSubCategoryContent({commit},params){  
            let data = await subCategoryContent(params);
            commit("getMutationsSubCategoryContent",data.Data);
        },
        sendActionsApiParameter({commit},params){
            commit("sendMutationsApiParameter",params)
        }
    },
    getters:{

    }
}
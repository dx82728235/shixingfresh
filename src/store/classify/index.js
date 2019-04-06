import {classifyList,hotWardContent,subCategoryContent} from "@/api/classify/api"

export default {
    namespaced: true,
    state:{
      productList:[],
      hotWardCon:[],
      subCategoryCon:[],
      subCategoryConList:[]
    },
    mutations:{
        getMutationsClassifyList(state,params){
            params.unshift({Name:"推荐分类"})
            state.productList = params;
            //console.log(params);
        },
        getMutationsHotWardContent(state,params){
            //console.log(params)
            state.hotWardCon = params.HotCategoryList;
        },
        getMutationsSubCategoryContent(state,params){
            state.subCategoryConList = [];
            state.subCategoryCon = params.SubCategories;
            params.SubCategories.map((item,index)=>{
                state.subCategoryConList.push(item.SmallCategories)
            })
            //console.log(params);
            //console.log(state.subCategoryConList);
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
        }
    },
    getters:{

    }
}
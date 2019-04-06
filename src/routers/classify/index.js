export default {
    path:"/classify",
    component:()=>import("@/views/classify"),
    name:"classify",
    meta: { 
        tabBarFlag:true
     },
     children: [
         {
             path:'hotClassify',
             name:'hotClassify',
             
         }
     ]
}
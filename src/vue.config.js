// module.exports = {
//     devServer:{
//         proxy:{
//             '/api':{
//                 target:"http://m.maoyan.com",
//                 changOrigin:true,
//                 pathRewrite:{
//                     "^/api":''
//                 }
//             }
//         }
//     }
// }


module.exports = {
    devServer:{
        proxy:{
           "/api":{
               target:"http://m.maoyan.com",
               changeOrigin:true,
               pathRewrite:{
                   "^/api":""
               }
           }
        }
    }
}

//https://api1.34580.com/sz/Home/FlashSaleRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9

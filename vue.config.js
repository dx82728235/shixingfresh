module.exports = {
   // publicPath:"shixingfresh",
    devServer:{
        proxy:{
            '/api':{
                target:"https://api1.34580.com",
                changOrigin:true,
                pathRewrite:{
                    "^/api":''
                }
            }
        }
    }
}




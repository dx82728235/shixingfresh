import http from '@/utils/http.js';
export const classifyList = ()=>http('get',"/api/sz/Products/BigCategoryRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
export const hotWardContent = ()=>http('get',"/api/sz/Products/HotCategoryRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
export const subCategoryContent = (id)=>http('get',"/api/sz/Products/SubCategoryRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&Id="+ id);


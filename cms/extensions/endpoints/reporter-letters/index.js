"use strict";const e=require("node-fetch"),o=require("fs");console.log('"production": ',"production");console.log("press-release targetUrl ----------------------\x3e ","https://dev-onrr-cms.app.cloud.gov");const s=async(s,t)=>{console.log("------------------------------------------------------------------------------------"),console.log("                                                                    "),console.log("url:  ",t),console.log("                                                                    "),console.log("------------------------------------------------------------------------------------");let r=((e,s)=>new Promise(((t,r)=>{const c=o.createWriteStream(s);e.pipe(c).on("finish",t).on("error",r)})))((await e(t)).body,s);return r};module.exports=(e,{services:o,exceptions:t})=>{const{ItemsService:r}=o,{ServiceUnavailableException:c}=t;e.get("/:file",((e,o,t)=>{const l=new r("directus_files",{schema:e.schema,accountability:e.accountability}),n=e.params.file;l.readByQuery({fields:["*"],filter:{filename_download:{_eq:n}}}).then((async e=>{console.log("reporter-letters results: ",e);const t=`/tmp/${n}`,r=`/assets/${e[0].id}`;return await s(t,`http://localhost:8055${r}`),o.sendFile(t)})).catch((e=>t(new c(e.message))))}))};

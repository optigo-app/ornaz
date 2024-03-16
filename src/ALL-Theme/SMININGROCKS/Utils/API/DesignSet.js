import { CommonAPI } from "./CommonAPI";

export const DesignSet = async() => {

    let storeinit = JSON.parse(localStorage.getItem("storeInit"))
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))

    let encData = btoa(JSON.stringify({"designsetno":"","FrontEnd_RegNo":`${storeinit?.FrontEnd_RegNo}`,"Customerid":`${loginInfo?.id}`}))

    // let encData = btoa(data)
    let body = {
        "con":"{\"id\":\"\",\"mode\":\"GETDESIGNSETLIST\",\"appuserid\":\"nimesh@ymail.in\"}",
        "f":"zen (cartcount)",
        "p":encData
        }


    const designList= []; 


    await CommonAPI(body).then((res)=>{
        designList.push(res.Data.rd)
    })

    return designList;
}


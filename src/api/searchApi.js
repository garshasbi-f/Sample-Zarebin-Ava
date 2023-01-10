import axios from "axios";
 export const getListFromServer = async ({query , page}) => {
    const response = await axios.get("https://zarebin.ir/songs/api/search" , {
        params:{    
            q: `${query}`,
            page: `${page}`,
            size:10,
            type: "ALL",
            searchSourceType : "NORMAL_SEARCH",
            PL:0,
            qsrc:"user"
        }
    })
    // console.log(response.data.results)
    return response.data.results
 }
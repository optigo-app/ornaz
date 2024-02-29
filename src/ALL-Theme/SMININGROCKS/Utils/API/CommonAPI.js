

import axios from "axios";

const APIURL = 'https://api.optigoapps.com/test/store.aspx'

export const CommonAPI = async (body) => {
    try {

        const yearCode = localStorage.getItem('YearCode');
        const version = localStorage.getItem('version');
        const token = localStorage.getItem('token');
        const header = {
            Authorization: `Bearer ${token}`,
            Yearcode: yearCode,
            Version: version
        };
        console.log('header is.......................',header);
        const response = await axios.post(APIURL, body, { headers: header });
        return response?.data;
    } catch (error) {
        console.error('error is..',error);
    }
};


// const handleLogin = async () => {

//         try {
//             const body = {
              
//             };
//             const response = await apiCall(body);
//             if (response.stat === 1) {
//                 callHome(response.data[0].token);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
// }
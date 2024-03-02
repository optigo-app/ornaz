

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
        const response = await axios.post(APIURL, body, { headers: header });
        return response?.data;

    } catch (error) {
        console.error('error is..',error);
    }
};

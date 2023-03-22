import axios from "axios";

interface Params {
  method: string;
  url: string;
  data?: any;
}

const baseUrl = import.meta.env.VITE_OKNESSET_BACKEND || 'http://127.0.0.1:5000/'

export async function api({ method, url, data }: Params) {

  try {
        const data_1 = await axios({
            method,
            url,
            data,
            headers: {
                Authorization: "token xxxx",
                "Content-Type": "application/json",
            },
        });
        return data_1.data.results;
    } catch (e) {
        return console.log(e);
    }
}
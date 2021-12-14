import axios from "axios";


// const baseUrl = "https://covid19.mathdro.id/api/09-29-2021";
const baseUrl = "https://covid19.mathdro.id/api/";

export const getdataDaily = async() => {

    try {
        const { data } = await axios.get(baseUrl + "daily");
        return data;

    } catch (error) {
        throw error;
    }

}

export const getPieData = async() => {
    try {
        const { data } = await axios.get(baseUrl);
        // console.log('data x = ',data);
        return data;
    } catch (error) {

    }
}
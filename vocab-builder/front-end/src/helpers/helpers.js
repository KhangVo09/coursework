import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';
//to allow message to show up 

Vue.use(VueFlashMessage,  {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
});


//it defines the api and all CRUD act
const vm = new Vue()
const baseURL = 'http://localhost:8000/words/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.log(error);
    });

export const api = {
    getWord: handleError(async id => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    getWords: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deleteWord: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createWord: handleError(async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updateWord: handleError(async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    })
};

//this file create some  necessary package( Axios) 
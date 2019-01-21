import axios from 'axios'
const instance=axios.create({
    baseURL:'http://192.168.5.183:5000'
});
export default instance;
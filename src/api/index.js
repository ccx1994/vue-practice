import axios from 'axios';
import config from './config';

export default {
	getThemes:function(){
		return axios.get('/4/themes',config);
	},
	requestBanner:function(){
		return axios.get('/4/news/latest',config);
	}
}

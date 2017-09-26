import axios from 'axios';
import config from './config';

export default {
	getThemes:function(){
		return axios.get('/4/themes',config);
	}
}

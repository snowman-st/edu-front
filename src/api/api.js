import {
  IS_DEV
} from '../config' ;
import axios from 'axios';

let local_host = 'http://127.0.0.1:8000';

export const API = {
  // ROOT: IS_DEV ? '/api' : 'http://abc.com/api',
  ROOT: '/api',

  USER_LOGIN: '/user/login',
  USER_ADD: '/user/add',
  RECORD_LIST: '/user/getRecords',
  QUERY_LIST: '/user/getRecordsBy'
};

export const getmsg = params => {
	return axios.get('${local_host}/table2/')
}

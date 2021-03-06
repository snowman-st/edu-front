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

export const testout = params => {
	console.log('this is an out function');
}

export const getsubject = params => {
	return axios.get('http://127.0.0.1:8000/table/');
}

export const getmsg = params => {
  console.log('excuted!')
  return axios.get('http://127.0.0.1:8000/table2/');
}

export const get3msg = params => {
  console.log('excuted!')
  return axios.get('http://127.0.0.1:8000/table3/');
}

export const get4msg = params => {
  console.log('excuted!')
  return axios.get('http://127.0.0.1:8000/table4/');
}

export const get5msg = params => {
  console.log('excuted!')
  return axios.get('http://127.0.0.1:8000/table5/');
}
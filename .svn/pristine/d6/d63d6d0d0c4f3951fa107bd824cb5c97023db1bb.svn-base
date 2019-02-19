import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryList(params) {
  return request(`/userList/getListByPage?${stringify(params)}`);
}

export async function queryOperationList(params) {
  return request(`/userList/getUserDetail?${stringify(params)}`);
}

export async function queryDeviceEventList(params) {
  return request(`/userList/getDeviceEventList?${stringify(params)}`);
}

export async function queryProgramEventList(params) {
  return request(`/userList/getProgramEventList?${stringify(params)}`);
}

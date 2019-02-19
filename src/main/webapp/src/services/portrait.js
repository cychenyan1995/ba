import request from '@/utils/request';
import { stringify } from 'qs';

export async function querySexData(params){
  return request(`/portrait/querySexData?${stringify(params)}`);
}

export async function queryAgeData(params){
  return request(`/portrait/queryAgeData?${stringify(params)}`);
}
export async function queryDeviceTypeData(params){
  return request(`/portrait/queryDeviceTypeData?${stringify(params)}`);
}

export async function queryOutTimeData(params) {
  return request(`/portrait/queryOutTimeData?${stringify(params)}`);
}

export async function queryCityData(params) {
  return request(`/portrait/queryCityData?${stringify(params)}`);
}
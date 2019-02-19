import request from '@/utils/request';
import {stringify} from "qs";

export async function getAuthority(params) {
  return request(`/user/fetchRight?${stringify(params)}`);
}

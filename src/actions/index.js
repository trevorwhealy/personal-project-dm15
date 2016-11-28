import axios from 'axios';

export const SIGN_UP_USER = 'SIGN_UP_USER';

const ROOT_URL = 'http://localhost:3000/';



export function signUpUser(props){
  const request = axios.post(`${ROOT_URL}api/users`, props);

  return {
    type: SIGN_UP_USER,
    payload: request
  }
}
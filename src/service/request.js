import {fetch} from 'dva'

export function get(url , options) {
    console.log('get request invoke')
    return fetch(url ,  {method:'get'})
}

export function post(url , params , options) {
    return fetch(url , {body:params , method:'post'})
}
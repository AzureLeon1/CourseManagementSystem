import { delay } from '@/utils/util.js'

const server = 'http://192.168.1.15:8080/'

const headers = {}

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATCH = 'PATCH'

export default {
  request,
  register,
  getAuthority,
  getPersonInfo,
  getPersonFollowFans,
  getClassListItems,
  changeUserInfo,
  getMessageWithID
}

function param(a) {
  return a ? '?' + Object.keys(a).map(key => `${key}=${a[key]}`).join('&') : ''
}

async function request(method, url, data) {
  try {
    const token = window.localStorage.token
    const headers = token ? {
      Authorization: `Bearer ${token}`
    } : {}
    // TODO: 验证GET请求的参数形式
    if (method in {
        GET
      }) {
      url += param(data)
      data = null
    }
    if (!url.match(/^http|\/\//g)) {
      url = server + url
    }
    console.log(token && `Bearer ${token}`, url)
    const res = await axios({
      method,
      url,
      data,
      headers
    })
    var mes = res;
    console.log("look");
    console.log(mes);
    if (res.status < 400) {
      if (res.data.code && res.data.code < 400) {
        return res
      } else {
        throw (res.data)
      }
    } else {
      throw ({
        message: res.statusText
      })
    }
  } catch (err) {
    console.log("get status")
    console.log()
    if (mes.data.code !== 402) {
      Message({
        message: err.message,
        type: 'error',
        showClose: true,
      })
    }
    console.error(err)
  }
}

async function getAuthority(form) {
  const data = {
    "user_ID": 100001,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
    "name": "王亮",
    "role": "student",
    "avatar": "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
    "phone_number": "18916083381",
    "college": "软件学院",
    "following": 0,
    "follower": 0,
    "email" : "leonwangchn@163.com"
  }
  await delay(1000)
  return data
  // const res = await request(POST, '/api/login', form)
  // return res.data.data
}

async function register(form) {
  const res = await request(POST, '/api/register', form)
  return res.data
}

async function getPersonInfo(id){
  const data={
    "user_ID": 100001,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
    "name": "王亮",
    "role": "student",
    "avatar": "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
    "phone_number": "18916083381",
    "college": "软件学院",
    "following": 0,
    "follower": 0,
    "email" : "leonwangchn@163.com"
  }
  await delay(1000)
  return data
  // const res = await request(GET, `/api/users/${id}`)
  // return res.data
}

async function getPersonFollowFans(id){
  const data = {
    follow:11,
    fans:12
  }
  await delay(1000)
  return data
}

async function getClassListItems(){
  const res = await request(GET, '/api/club_info');
  return res.data.class_es

}
 //all patch start from here
 //============================================================
 async function changeUserInfo(id, form){
  const res = await request(PATCH, '/api/users/${id}', form)
  return res
}

//==========广播API===========
//===========start===========
async function getMessageWithID(id){
  const res = await request(GET, '/api/broadcasts', {'user': id});
  console.log(res);
  return res;
}


//=========== end ===========
//==========广播API===========
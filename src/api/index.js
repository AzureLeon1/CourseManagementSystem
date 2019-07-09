import {
  delay
} from '@/utils/util.js'

const server = 'http://192.168.1.16:8080/'

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
  getUserTwitter,
  broadcastStudent,
  getClassInfo,
  joinClass,
  getJoinStatus,
  getjoinedClassList,
  getCourseDiscussion,
  getQuestionReply,
  addDiscussion
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
    "email": "leonwangchn@163.com"
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

async function getPersonInfo(id) {
  var data = {}
  if (id == 100002) {
    data = {
      "user_ID": 100002,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
      "name": "施程航",
      "role": "student",
      "avatar": "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
      "phone_number": 13365445687,
      "college": "软件学院",
      "following": 0,
      "follower": 0,
      "email": "chenghang_shi@gmail.com"
    }
  } else {
    data = {
      "user_ID": 100001,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
      "name": "王亮",
      "role": "student",
      "avatar": "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
      "phone_number": "18916083381",
      "college": "软件学院",
      "following": 0,
      "follower": 0,
      "email": "leonwangchn@163.com"
    }
  }
  console.log(data);
  // await delay(1000)
  return data
  // const res = await request(GET, `/api/users/${id}`)
  // return res.data
}

async function getPersonFollowFans(id) {
  const data = {
    follow: 11,
    fans: 12
  }
  await delay(1000)
  return data
}

async function getClassListItems() {
  const res = await request(GET, '/api/club_info');
  return res.data.class_es
}

async function getClassListItems(){
 // const res = await request(GET, '/api/club_info');
 // return res.data.class_es
 const data = [
   {name: "高数1班", content : "张弢老师班", course_id : 1, sec_id : 1, semester : 'fall', year : 2019},
   {name: "高数2班", content : "孙慧娟老师", course_id : 1, sec_id : 2, semester : 'fall', year : 2019}
 ]

 return data

}

async function getUserTwitter() {
  const data = {
    my_twitters: [{
        twitter_id: 111,
        user_id: 100001,
        user_name: '王亮',
        avatar: 'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
        content: '数据库什么都听不懂，呜呜呜～',
        time: '2019.7.8 12:30',
        image: 'http://img.cdn.leonwang.top/Qf9SNmS-best-pokemon-wallpapers.png'
      },
      {
        twitter_id: 112,
        user_id: 112,
        user_name: '何立仁',
        avatar: 'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
        content: '数据库只考了99分，呜呜呜～',
        time: '2019.7.8 12:32'
      }
    ],
    friend_twitters: [{
        twitter_id: 113,
        user_id: 113,
        user_name: '周泓光',
        avatar: 'https://view.moezx.cc/images/2018/06/06/_35588639.md.png',
        content: '哈哈哈哈哈哈',
        time: '2019.7.8 12:31'
      },
      {
        twitter_id: 114,
        user_id: 100002,
        user_name: '施程航',
        avatar: 'https://view.moezx.cc/images/2018/06/06/_35588639.md.png',
        content: '哈哈哈哈哈哈',
        time: '2019.7.8 12:34'
      }
    ]
  }
  //const data = await request(GET, `/api/twitter`)
  return data
}

async function getCourseDiscussion(){
  const data = {
      basic:[
      {
        course_id: 1,
        sec_id: 1,
        semester: "Spring",
        year: 1997
      }],
      question:[
      {  
        discussion_id:111,
        user_id:111,
        user_name:'aaa',
        user_type:0,
        content:"课本第三章的课后习题3.20的答案是否有误？",
        time:"1997.12.11,12.30",
        question_id:0
      },
      {
        discussion_id:112,
        user_id:222,
        user_name:'bbb',
        user_type:0,
        content:"老师上课提到的参考书目的名称可以再发一下吗？",
        time:"1997.12.12,16.30",
        question_id:0
      },
      {
        discussion_id:113,
        user_id:333,
        user_name:'ccc',
        user_type:0,
        content:"本次小测的选择题的最后一道题的题干是什么？",
        time:"1997.12.13,16.30",
        question_id:0
      },
      {
        discussion_id:116,
        user_id:444,
        user_name:'dddd',
        user_type:0,
        content:"本次小测的选择题的最后一道题的题干是什么？",
        time:"1997.12.13,16.30",
        question_id:0
      },
      {
        discussion_id:121,
        user_id:444,
        user_name:'eeeee',
        user_type:0,
        content:"题目如下：乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉",
        time:"1997.12.14,16.30",
        question_id:0
      }]
  }

  await delay(1000)
  // const res=await request(GET,'.api/discussion')
  return data
}

async function getQuestionReply(){
  const data = {
    basic:[
    {
      course_id: 1,
      sec_id: 1,
      semester: "Spring",
      year: 1997,
      discussion_id:111,
      user_id:111
    }],
    reply:[
      {
        discussion_id:155,
        user_id:121,
        user_name:'kkkkkk',
        user_type:0,
        content:"我觉得答案有问题，第二问的答案应该是xxx",
        time: "1997.12.11,14.30",
        question_id:111
      },
      {
        discussion_id:159,
        user_id:131,
        user_name:'xixixiix',
        user_type:0,
        content:"我觉得答案没有问题，但是第二问本身的描述不够准确有一定歧义",
        time: "1997.12.11,15.30",
        question_id:111
      },
      {
        discussion_id:168,
        user_id:141,
        user_name:'lalala',
        user_type:0,
        content:"可能是题目有问题吧，按一种理解来的话，答案这样也可以",
        time: "1997.12.11,15.30",
        question_id:111
      },
      {
        discussion_id:178,
        user_id:143,
        user_name:'1234',
        user_type:1,
        content:"错的！",
        time: "1997.12.12,10.30",
        question_id:111
      },
    ]
  }

  console.log(data)
  await delay(1000)
  // const res=await request(GET,'.api/discussion/id')
  return data
}


async function broadcastStudent(form){
  const res = await request(POST,'/api/twitter',form)
  console.log(res)
}

async function addDiscussion(form){
  const res = await request(POST,'/api/discussion',form)
  console.log(res) 
}

//all patch start from here
//============================================================
async function changeUserInfo(id, form) {
  const res = await request(PATCH, '/api/users/${id}', form)
  return res
}


 async function getClassInfo(form){
  // const res = await request(GET, `/api/club_info/${id}`)
  // console.log('corp_info of ', res)
  // return res.data.data
  const data = {
    name : '高数1班',
    teacher_name : '孙娟娟',
    content : '这是同济大学2019年春季学期高数1班',
    avatar : '../static/defaultAvatar.jpg'
  }
  return data

}

async function joinClass(form)
{



}

async function getJoinStatus(form)
{
  return "已加入"

}
async function getjoinedClassList(id)
{
  return [
    {name : "同济大学高数1班", avatar : "../static/logo.png"},
    {name : "同济大学高数2班", avatar : "../static/defaultAvatar.jpg"}
]
}


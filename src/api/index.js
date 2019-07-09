import axios from 'axios'
import {
  delay
} from '@/utils/util.js'
import { Message  } from 'element-ui';

const server = 'http://192.168.1.15:8080'

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
  getMessageWithID,
  getSearchResult,
  getFollowing,
  getFollowers,
  followPerson,
  deleteFollowPerson,
  getCourseware
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
    // if (method in {
    //     GET
    //   }) {
    //   url += param(data)
    //   data = null
    // }
    if (!url.match(/^http|\/\//g)) {
      url = server + url
    }
    console.log(method);
    console.log(url);
    console.log(headers)
    console.log(token);
    console.log(data);
    const res = await axios({
      method:method,
      url: url,
      data: data,
      headers: headers
    })
    console.log(res);
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
    console.log(err)

    Message({
      message: err.message,
      type: 'error',
      duration: 1000
    });

    // if (mes.data.code !== 402) {
    //   Message({
    //     message: err.message,
    //     type: 'error',
    //     showClose: true,
    //   })
    // }
  }
}

async function getAuthority(form) {
  console.log(form);
  // const data = {
  //   "user_ID": 100001,
  //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
  //   "name": "王亮",
  //   "role": "student",
  //   "avatar": "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
  //   "phone_number": "18916083381",
  //   "college": "软件学院",
  //   "following": 0,
  //   "follower": 0,
  //   "email": "leonwangchn@163.com"
  // }
  // await delay(1000)
  // return data
  const res = await request(POST, '/api/login', form)
  console.log(res);
  return res.data.data
}

async function register(form) {
  const res = await request(POST, '/api/register', form)
  return res.data
}

async function getPersonInfo(id) {
  // var data = {}
  // if (id == 100002) {
  //   data = {
  //     "user_ID": 100002,
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
  //     "name": "施程航",
  //     "role": "student",
  //     "avatar": "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
  //     "phone_number": 13365445687,
  //     "college": "软件学院",
  //     "following": 0,
  //     "follower": 0,
  //     "email": "chenghang_shi@gmail.com"
  //   }
  // } else {
  //   data = {
  //     "user_ID": 100001,
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMDAwMSIsIm5iZiI6MTU2MjM3MzY4NCwiZXhwIjoxNTYyMzgwODg0LCJpYXQiOjE1NjIzNzM2ODR9.v1YWTErby6wYqZwTJVlo0yLxW9owLEJdMxl05g9hRcc",
  //     "name": "王亮",
  //     "role": "student",
  //     "avatar": "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
  //     "phone_number": "18916083381",
  //     "college": "软件学院",
  //     "following": 0,
  //     "follower": 0,
  //     "email": "leonwangchn@163.com"
  //   }
  // }
  // console.log(data);
  // await delay(1000)
  // return data
  const res = await request(POST, `/api/users`, {user_id: id})
  console.log(res.data.data);
  return res.data.data
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

async function getClassListItems() {
  // const res = await request(GET, '/api/club_info');
  // return res.data.class_es
  const data = [{
      name: "高数1班",
      content: "张弢老师班",
      course_id: 1,
      sec_id: 1,
      semester: 'fall',
      year: 2019
    },
    {
      name: "高数2班",
      content: "孙慧娟老师",
      course_id: 1,
      sec_id: 2,
      semester: 'fall',
      year: 2019
    }
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
  // const data = await request(GET, `/api/twitter`)
  return data
}

async function broadcastStudent(form) {
  const res = await request(POST, '/api/twitter', form)
  console.log(res)
}

//all patch start from here
//============================================================
async function changeUserInfo(id, form) {
  const res = await request(PUT, '/api/users/${id}', form)
  return res
}


async function getClassInfo(form) {
  // const res = await request(GET, `/api/club_info/${id}`)
  // console.log('corp_info of ', res)
  // return res.data.data
  const data = {
    name: '高等数学',
    teacher_name: '孙娟娟',
    content: '这是同济大学2019年春季学期高数1班',
    avatar: 'http://img.cdn.leonwang.top/Xnip2019-07-08_19-47-51.jpg',
    student_count: 54,
  }
  return data

}

async function joinClass(form) {



}

async function getJoinStatus(form) {
  return "已加入"

}

async function getjoinedClassList(id) {
  return [{
      id: 1,
      name: "高等数学",
      avatar: "http://img.cdn.leonwang.top/Xnip2019-07-08_19-47-51.jpg"
    },
    {
      id: 2,
      name: "C语言程序设计",
      avatar: "http://img.cdn.leonwang.top/Xnip2019-07-08_20-00-45.jpg"
    }
  ]
}

async function getSearchResult(name) {
  const res = {
    data: [{
        user_id: 100001,
        name: '姜华',
        avatar: "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        role: "student",
        department: '物理学院'
      },
      {
        user_id: 100002,
        name: '姜华',
        avatar: "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        role: "teacher_edu",
        department: '土木学院'
      },
      {
        user_id: 100003,
        name: '姜华',
        avatar: "https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        role: "student",
        department: '建筑与城市规划学院'
      }
    ]
  }
  // const res = await request(POST, '/api/users', {name: name})
  return res.data;
}

async function getMessageWithID(id) {
  //fake message data;
  const res = {
    "data": {
      "broadcasts": [{
        "broadcast_id": "000001",
        "content": "这是一条很长的广播！第一条广播！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11 12:30",
        "end_time": "1997-12-14 12:30"
      }, {
        "broadcast_id": "000002",
        "content": "这是第二条广播！来自（模拟）后端（的数据）！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11- 12:30",
        "end_time": "1997-12-13- 12:30"
      }, {
        "broadcast_id": "000002",
        "content": "这是第二条广播！来自（模拟）后端（的数据）！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11- 12:30",
        "end_time": "1997-12-13- 12:30"
      }, {
        "broadcast_id": "000002",
        "content": "这是第二条广播！来自（模拟）后端（的数据）！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11- 12:30",
        "end_time": "1997-12-13- 12:30"
      }, {
        "broadcast_id": "000002",
        "content": "这是第二条广播！来自（模拟）后端（的数据）！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11- 12:30",
        "end_time": "1997-12-13- 12:30"
      }, {
        "broadcast_id": "000002",
        "content": "这是第二条广播！来自（模拟）后端（的数据）！",
        "type": 1,
        "scope": 1,
        "sec_id": 111,
        "course_id": 1111,
        "semester": "spring",
        "year": 2019,
        "publish_time": "1997-12-11 12:30",
        "start_time": "1997-12-11- 12:30",
        "end_time": "1997-12-13- 12:30"
      }, ]
    },
    "code": 200,
    "message": 'ok'
  }
  const data = res.data.broadcasts;
  // console.log(data);
  // console.log(typeof(data));
  await (delay(1000));
  return res.data;
  // const res = await request(GET, '/api/broadcasts', {'user': id});
  // return res;
}

async function getFollowing(id) {
  const res = await request(POST, '/api/followings', {
    user_id: id
  });
  console.log(res);
  console.log(res.data.data.users);
  return res.data.data.users
}

async function getFollowers(id) {
  const res = await request(POST, '/api/followers', {
    user_id: id
  });
  console.log(res);
  return res.data.data.users
}

async function followPerson(id) {
  const res = await request(POST, '/api/following', {
    user_id: id
  })
  console.log(res)
}

async function deleteFollowPerson(id) {
  const res = await request(DELETE, '/api/following', {
    user_id: id
  })
  console.log(res)
}

async function getCourseware(course_id, sec_id, semester, year) {
  const res = {
    data: [{
        name: "课件1-pdf",
        location: "http://pu9bnvlst.bkt.clouddn.com/FsblA11WcY9ZsFm5ywmr8PlG2MdN"
      },
      {
        name: "课件2-ppt",
        location: "http://pu9bnvlst.bkt.clouddn.com/%E7%AC%AC1%E7%AB%A0%20%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84%E7%9A%84%E6%A6%82%E5%BF%B5.ppt"
      },
      {
        name: "课件3",
        location: "url3"
      }
    ]
  }
  // const res = await request(GET, '/api/courseware', {
  //   course_id: course_id,
  //   sec_id: sec_id,
  //   semester: semester,
  //   year: year
  // })
  console.log(res);
  return res.data
}

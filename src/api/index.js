import axios from 'axios'
import {
  delay
} from '@/utils/util.js'
import {
  Message
} from 'element-ui';

// const server = 'http://192.168.1.150:8080'
const server = 'http://100.64.141.35:8080'

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
  getClassInfoForTea,
  joinClass,
  getJoinStatus,
  getjoinedClassList,
  getClassMessage,
  createMessage,
  getSearchResult,
  getFollowing,
  getFollowers,
  getFollowCount,
  followPerson,
  deleteFollowPerson,
  getCourseDiscussion,
  getQuestionReply,
  addDiscussion,
  getCoursewareList,
  getCheckingClassList,
  createClass,
  getAllQuestion,
  newQuestion,
  updateQuestion,
  deleteQuestion,
  getClassExams,
  newExam,
  checkExamResult,
  getExamQuestions,
  submitExam,
  getCourseware,
  getAttendance,
  getTeam,
  createMessage,
  deletePost,
  //getCoursetable,
  getAllCourses,
  deleteCourseware,
  uploadCourseware,
  createAttenRecords,
  updateAtten,
  coursetableGetCoursetable,
  getTeamlist,
  // 审核
  getToBeAudited,
  auditJoinClass,
  getAllStudents,
  getAllDiscussions,
  getDiscussionReply,
  getGlobalBro,
  postBroadcast,
  getAllTeacherId,
  deleteBro,
  getAllTeams,
  getMyTeams,
  joinTeam,
  createTeam,
  sendComment,
  examSum,
  dissSum,
  attenSum,
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
    console.log(token);
    console.log(data);
    const res = await axios({
      method: method,
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
  const res = await request(POST, '/api/login', form)
  console.log("loginRes", res);
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
  const res = await request(POST, `/api/users`, {
    user_id: id
  })
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
  const res = await request(POST, '/api/total_classes');
  console.log("这是班级列表", res)
  return res.data.data.classes
}

/*async function getClassListItems() {
  // const res = await request(GET, '/api/club_info');
  // return res.data.class_es
  const data = [{
      name: "高数",
      content: "张弢老师班",
      course_id: 1,
      sec_id: 1,
      semester: 'fall',
      year: 2019
    },
    {
      name: "大物",
      content: "孙慧娟老师",
      course_id: 1,
      sec_id: 2,
      semester: 'fall',
      year: 2019
    }
  ]

  return data

} */

async function getCheckingClassList(user_id) {

  const res = await request(POST, '/api/waiting_classes');
  //console.log("这是未加入班级列表" , res)
  return res.data.data.classes



}

async function getUserTwitter() {
  // const data = {
  //   my_twitters: [{
  //       twitter_id: 111,
  //       user_id: 100001,
  //       user_name: '王亮',
  //       avatar: 'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
  //       content: '数据库什么都听不懂，呜呜呜～',
  //       time: '2019.7.8 12:30',
  //       image: 'http://img.cdn.leonwang.top/Qf9SNmS-best-pokemon-wallpapers.png'
  //     },
  //     {
  //       twitter_id: 112,
  //       user_id: 112,
  //       user_name: '何立仁',
  //       avatar: 'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
  //       content: '数据库只考了99分，呜呜呜～',
  //       time: '2019.7.8 12:32'
  //     }
  //   ],
  //   friend_twitters: [{
  //       twitter_id: 113,
  //       user_id: 113,
  //       user_name: '周泓光',
  //       avatar: 'https://view.moezx.cc/images/2018/06/06/_35588639.md.png',
  //       content: '哈哈哈哈哈哈',
  //       time: '2019.7.8 12:31'
  //     },
  //     {
  //       twitter_id: 114,
  //       user_id: 100002,
  //       user_name: '施程航',
  //       avatar: 'https://view.moezx.cc/images/2018/06/06/_35588639.md.png',
  //       content: '哈哈哈哈哈哈',
  //       time: '2019.7.8 12:34'
  //     }
  //   ]
  // }
  const res = await request(POST, `/api/twitters`)
  console.log(res.data.data);
  return res.data.data
}

async function getCourseDiscussion(form) {
  const res = await request(POST,'/api/discussions', form)
  console.log("alldiscussion", res.data.data)
  return res.data.data
}

async function getQuestionReply() {
  const data = {
    basic: [{
      course_id: 1,
      sec_id: 1,
      semester: "Spring",
      year: 1997,
      discussion_id: 111,
      user_id: 111
    }],
    reply: [{
        discussion_id: 155,
        user_id: 121,
        user_name: 'kkkkkk',
        role: 'student',
        content: "我觉得答案有问题，第二问的答案应该是xxx",
        time: "1997.12.11 14.30",
      },
      {
        discussion_id: 159,
        user_id: 131,
        user_name: 'xixixiix',
        role: 'student',
        content: "我觉得答案没有问题，但是第二问本身的描述不够准确有一定歧义",
        time: "1997.12.11,15.30",
        question_id: 111
      },
      {
        discussion_id: 168,
        user_id: 141,
        user_name: 'lalala',
        role: 'student',
        content: "可能是题目有问题吧，按一种理解来的话，答案这样也可以",
        time: "1997.12.11 15.30",
        question_id: 111
      },
      {
        discussion_id: 178,
        user_id: 143,
        user_name: '1234',
        role: 'teacher_edu',
        content: "错的！",
        time: "1997.12.12 10.30",
        question_id: 111
      },
    ]
  }

  console.log(data)
  await delay(1000)
  // const res=await request(GET,'.api/discussion/id')
  return data
}

async function broadcastStudent(form) {
  const res = await request(POST, '/api/twitter', form)
  console.log("sendTwitterRes", res)
}

async function addDiscussion(form) {
  const res = await request(POST, '/api/discussion', form)
  console.log(res)
}

//all patch start from here
//============================================================
async function changeUserInfo(form) {
  console.log(form);
  const res = await request(POST, '/api/user_info', form)
  console.log(res);
  return res
}

async function getClassInfo(form) {
  // const res = await request(GET, `/api/club_info/${id}`)
  // console.log('corp_info of ', res)
  // return res.data.data

  // 学生api
  const data = await request(POST, '/api/one_class', form)
  // name: '高等数学',
  // teacher_name: '孙娟娟',
  // content: '高等数学',
  // avatar: 'http://img.cdn.leonwang.top/Xnip2019-07-08_19-47-51.jpg',
  // student_count: 54,
  // course_name: '高等数学',
  // student_count: 34,
  // building: 'A',
  // room_number: '345',
  // semester: 'Fall',
  // year: 2019
  console.log('这是班级的详细信息status 测试: ', data)

  return data

}

async function getClassInfoForTea(form) {
  // const res = await request(GET, `/api/club_info/${id}`)
  // console.log('corp_info of ', res)
  // return res.data.data

  // 老师api
  const data = await request(POST, '/api/class_details', form)
  // name: '高等数学',
  // teacher_name: '孙娟娟',
  // content: '高等数学',
  // avatar: 'http://img.cdn.leonwang.top/Xnip2019-07-08_19-47-51.jpg',
  // student_count: 54,
  // course_name: '高等数学',
  // student_count: 34,
  // building: 'A',
  // room_number: '345',
  // semester: 'Fall',
  // year: 2019
  console.log('这是班级的详细信息: ', data)

  return data

}

async function joinClass(form) {
  const res = await request(POST, '/api/student_class', form)
  console.log("joinClass", res)
  return res
}
async function getCoursewareList(form) {

  return {
    listdata: [{
        name: '课件1',
        location: 'www.baidu.com'
      },
      {
        name: '课件2',
        location: 'www.google.com'
      },
      {
        name: '课件3',
        location: '4m3.tongji.edu.cn'
      }
    ],
  }

}

async function getJoinStatus(form) {
  return "已加入"

}

async function getjoinedClassList(id) {


  var form = {}
  var date = new Date;
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  // console.log('这是年份', year)
  // this.year_options.label = year;
  // this.year_options.value = year;
  //this.year_options.push({label: year, value: year})
  if (month <= 9) {
    form.semester = 'Spring'
    form.year = year
    // form.push({semester:"Spring", year: year})
  } else if (month > 9) {
    form.semester = 'Autumn'
    form.year = year
  }

  console.log('这是ffffffom', form)

  const res = await request(POST, '/api/part_classes', form)
  //console.log('这是学生参与的班级列表', res)
  return res.data.data.classes


  // return [{
  //     course_id: 2,
  //     sec_id: 1,
  //     semester: 'Spring',
  //     year: 2019,
  //     name: "高等数学",
  //     avatar: "http://img.cdn.leonwang.top/Xnip2019-07-08_19-47-51.jpg"
  //   },
  //   // {
  //   //   id: 2,
  //   //   name: "C语言程序设计",
  //   //   avatar: "http://img.cdn.leonwang.top/Xnip2019-07-08_20-00-45.jpg"
  //   // }
  // ]
}

async function getSearchResult(name) {
  const res = await request(POST, '/api/users', {
    user_name: name
  })
  console.log("searchuser", res.data)
  return res.data.data.users;
}

async function getClassMessage(form) {
  //fake message data;
  // const res = {
  //   "data": {
  //     "broadcasts": [{
  //       "broadcast_id": "000001",
  //       "content": "这是一条很长的广播！第一条广播！",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-14 12:30"
  //     }, {
  //       "broadcast_id": "000002",
  //       "content": "这是第二条广播！来自（模拟）后端（的数据）！",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-13- 12:30"
  //     }, {
  //       "broadcast_id": "000002",
  //       "content": "不就是瞎编吗？谁不会啊！",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-13- 12:30"
  //     }, {
  //       "broadcast_id": "000002",
  //       "content": "发现了一个问题，这个content的内容存不了分行的。完蛋。",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-13- 12:30"
  //     }, {
  //       "broadcast_id": "000002",
  //       "content": "嘤嘤嘤嘤嘤嘤。想吃肉。很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长。",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-13- 12:30"
  //     }, {
  //       "broadcast_id": "000002",
  //       "content": "数据造假，从我做起。学术造假，从我做起。",
  //       "type": 1,
  //       "scope": 1,
  //       "sec_id": 111,
  //       "course_id": 1111,
  //       "semester": "spring",
  //       "year": 2019,
  //       "publish_time": "1997-12-11 12:30",
  //       "start_time": "1997-12-11 12:30",
  //       "end_time": "1997-12-13- 12:30"
  //     }, ]
  //   },
  //   "code": 200,
  //   "message": 'ok'
  // }
  // const data = res.data.broadcasts;
  // console.log(data);
  // console.log(typeof(data));
  // await (delay(1000));
  const res = await request(POST, '/api/class_broadcasts', form)
  console.log(res);
  return res.data.data.broadcasts;
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

async function getFollowCount() {
  const res = await request(GET, '/api/follow_info')
  console.log("followInfo", res.data.data)
  return res.data.data
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

async function createClass(form) {
  console.log('这是提交的form', form)
   const res = await request(POST, '/api/class', form)
   console.log("提交结果", res)
  //console.log("提交成功")
}

async function getAllQuestion(form) {
  const res = await request(POST, '/api/course_questions', form)
  console.log("allquestion", res.data.data)
  return res.data.data
}

async function newQuestion(form) {
  const res = await request(POST, '/api/questions', form)
  console.log("newquesion", res.data)
  return res.data
}

async function updateQuestion(form) {
  const res = await request(PUT, '/api/questions', form)
  console.log("updatequestion", res.data)
  return res.data
}

async function deleteQuestion(form) {
  const res = await request(DELETE, '/api/questions', form)
  console.log("deletequestion", res)
  return res
}

async function createMessage(form) {
  // const res = await request(POST, '/api/broadcasts', form);
  // return res;
}

///team api
async function getTeam() //id?
{

  const data = {
    teamlist: [{
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三五",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      }
    ],
    myteamlist: [{
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      },
      {
        team_id: "1234",
        team_name: "一二三四",
        team_member: "sad  sdf asdf"
      }
    ]
  }

  //const data = await request(GET, ,form)
  await delay(500)
  return data
}
//attendance api
async function getAttendance(form) {
  const res = await request(POST, '/api/attendance', form)
  console.log(res);
  return res.data.data
}

async function getClassExams(form) {
  const res = await request(POST, '/api/class_exams', form)
  console.log("examlist", res.data.data)
  return res.data.data
}

async function newExam(form) {
  const res = await request(POST, '/api/exams', form)
  return res.data.data
}

async function checkExamResult(form) {
  const res = await request(POST, '/api/exam_results', form)
  return res.data.data
}

async function getExamQuestions(form) {
  const res = await request(POST, '/api/exam_questions', form)
  console.log("examquestions", res.data.data)
  return res.data.data
}

async function submitExam(form) {
  const res = await request(POST, '/api/finished_exam', form)
  console.log("finishexam", res.data.data)
  return res.data.data
}

async function getCourseware(form) {
  // const res = {
  //   data: [{
  //       name: "课件1-pdf",
  //       location: "http://pu9bnvlst.bkt.clouddn.com/FsblA11WcY9ZsFm5ywmr8PlG2MdN"
  //     },
  //     {
  //       name: "课件2-ppt",
  //       location: "http://pu9bnvlst.bkt.clouddn.com/%E7%AC%AC1%E7%AB%A0%20%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84%E7%9A%84%E6%A6%82%E5%BF%B5.ppt"
  //     },
  //     {
  //       name: "课件3",
  //       location: "url3"
  //     }
  //   ]
  // }
  console.log(form);
  const res = await request(POST, '/api/CourseWares', form)
  console.log(res.data.data);
  return res.data.data.courswares
}

async function deleteCourseware(courseware_id) {
  const res = await request(DELETE, '/api/CourseWare_Removement', {
    courseware_id: courseware_id
  })
  console.log(res);
  return res
}

async function uploadCourseware(form) {
  const res = await request(POST, '/api/CourseWare', form)
  console.log(res);
  return res
}

async function deletePost(id) {
  const res = request(DELETE, `/api/twitters`, {
    twitter_id: id
  })
  console.log("deleteTwitterRes", res)
  return res.data
}

async function coursetableGetCoursetable(form) {
  // const data = {
  //   courselist: [{
  //       day: 3,
  //       course_name: "C++",
  //       building: "济事楼",
  //       room: "211",
  //       start_section: 1,
  //       length: 2,
  //       single_or_double: 1
  //     },
  //     {
  //       day: 2,
  //       course_name: "数据库",
  //       building: "b楼",
  //       room: "301",
  //       start_section: 5,
  //       length: 2,
  //       single_or_double: 2
  //     },
  //     {
  //       day: 3,
  //       course_name: "组合数学",
  //       building: "a楼",
  //       room: "421",
  //       start_section: 9,
  //       length: 2,
  //       single_or_double: 1
  //     },
  //     {
  //       day: 1,
  //       course_name: "组合数学",
  //       building: "a楼",
  //       room: "421",
  //       start_section: 2,
  //       length: 2,
  //       single_or_double: 2
  //     },
  //     {
  //       day: 5,
  //       course_name: "组合数学",
  //       building: "b楼",
  //       room: "421",
  //       start_section: 2,
  //       length: 2,
  //       single_or_double: 1
  //     },
  //     {
  //       day: 4,
  //       course_name: "C--",
  //       building: "济事楼",
  //       room: "112",
  //       start_section: 7,
  //       length: 2,
  //       single_or_double: 1
  //     }
  //   ]
  // }
  console.log(form)
  const data = await request(POST, '/api/term_part_classes', form)
  console.log("这是课程表时间", data.data.data.classes)
  await delay(1000);
  return data.data.data.classes
}

async function getAllCourses() {
  // const res = request(POST, `/api/allcourse`, {


  //  console.log("deleteTwitterRes", res)
  // const data = [
  //   {Course_Id : 1, course_name: '数据库'},
  //   {Course_Id : 2, course_name: '高等数学'},
  //   {Course_Id : 3, course_name: 'C++'},
  //   {Course_Id : 4, course_name: '操作系统'},
  //   {Course_Id : 5, course_name: '计算机系统结构'},

  // ]
  // return data
    const data = await request(POST, '/api/courses')
    console.log('这是api返回值', data.data.data.courses)
    return data.data.data.courses
}
async function createAttenRecords(form) {
  const res = await request(POST, '/api/attendance_records', form)
  console.log(res);
  return res
}

async function updateAtten(form) {
  const res = await request(PUT, '/api/new_attendance', form)
  console.log(res)
}

async function getGlobalBro() {
  const res = await request(POST, '/api/all_broadcasts')
  console.log(res.data.data.broadcasts);
  return res.data.data.broadcasts
}

async function getTeamlist(form) {
  const res = await request(POST, '/api/teams', form)
  console.log(res)
}

// 审核
async function getToBeAudited(form) {
  const res = await request(POST, '/api/waiting_students', form)
  console.log("auditlist", res.data.data)
  return res.data.data
}

async function auditJoinClass(form) {
  const res = request(PUT, '/api/permission', form)
  return res
}

// get all students of a class
async function getAllStudents(form) {
  const res = await request(POST, '/api/students', form)
  console.log("allstudents", res.data.data)
  return res.data.data
}

async function getAllDiscussions(form) {
  const res = await request(POST, '/api/discussions', form)
  return res
}

async function getDiscussionReply(id) {
  console.log("discussionId", id)
  const res = await request(POST, '/api/one_discussion', {
    discussion_id: id
  })
  console.log("discussioncomment", res.data.data)
  return res.data.data
}

async function sendComment(form) {
  const res = await request(POST, '/api/discussion', form)
  console.log("sendcomment", res)
  return res
}

async function postBroadcast(form) {
  const res = await request(POST, '/api/broadcasts', form)
  console.log(res)
  return res.data.code
}

async function getAllTeacherId()

{
  const res = await request(POST, '/api/teachers')
  return res.data.teachers_id

}

async function deleteBro(form) {
  const res = await request(DELETE, '/api/broadcasts', form)
  console.log(res)
  return res
}

async function getAllTeams(form) {
  const res = await request(POST, '/api/teams', form)
  console.log(res.data.data.teams);
  return res.data.data.teams
}


async function getMyTeams(form) {
  const res = await request(POST, '/api/its_teams', form)
  console.log(res.data.data);
  return res.data.data.teams
}

async function joinTeam(form) {
  const res = await request(POST, '/api/teams_attendance', form)
  console.log(res);
  return res
}

async function createTeam(form) {
  const res = await request(POST, '/api/team', form)
  console.log(res);
  return res.data.code
}

async function examSum() {
  const res = await request(GET, '/api/exam_summary')
  console.log(res);
  return res.data.data
}

async function dissSum() {
  const res = await request(POST, '/api/discussion_summary', { semester: "Spring" , year :2019 })
  console.log(res);
  return res.data.data
}

async function attenSum() {
  const res = await request(POST, '/api/attendance_summary', { semester: "Spring" , year :2019 })
  console.log(res);
  return res.data.data
}

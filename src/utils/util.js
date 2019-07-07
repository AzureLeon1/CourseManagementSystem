export const emailReg = /^[a-z0-9A-Z]+([-|_|\.]+[a-z0-9A-Z]+)*@([a-z0-9A-Z]+[-|\.])+[a-zA-Z]{2,5}$/
export const idCardReg = /^(([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))))$/
export const phoneReg = /^1[34578]\d{9}$/

export function namespace (names) {
    return names.join('__').toUpperCase()
}
export function parseAuth (auth) {
    // TODO: uncertained
    return [
        'INFO_MANAGE',
        'MEMBER_MANAGE',
        'ROOM_MANAGE',
        'ACTIVITY_MANAGE',
        'AUTHORITY_MANAGE'
    ]
}

export function identityZh(role) {
  switch (role) {
    case "student":
      return "学生";
      break;
    case "teacher_edu":
      return "任课教师";
      break;
    case "teacher_manage":
      return "教务教师";
      break;
  }
}

export function delay (t) {
    return new Promise(r => setTimeout(r, t))
}

export function timeFormat(convert_time) {
    var date = new Date(convert_time);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();

    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        date = "0" + date;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(second < 10){
        second = "0" + second ;
    }

    var res = year + '-' + month + '-' + day + 'T' + hour + ':' + minutes + ':' + second;
    return res;
}

// export default {
//     emailReg,
//     idCardReg,
//     phoneReg,

//     namespace,
//     parseAuth,
//     delay
// }

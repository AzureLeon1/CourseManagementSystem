import api from "@/api/index.js"

export default{
    getMessageWithID,
    createMessage
}

async function getMessageWithID(id){
    //获取与ID相关的广播数据
    ///async函数的返回值是promise!!!
    let data = await api.getMessageWithID(id);
    data=data.broadcasts;

    //size翻倍-检验partition
    let l=data.length;
    for(let i=0;i<l;i++){
        data.push(data[i]);
        data.push(data[i]);
        data.push(data[i]);
        data.push(data[i]);
    }

    //根据广播找到班级名字
    let fakefrom=["组合数学","数据库原理与应用","编译原理","星期音乐会","法律与心理学","数据库课程设计"];
    for(let i=0;i<data.length;i++){
        data[i].from=fakefrom[Math.floor(Math.random()*6)];
    }
    
    return data;
}

async function createMessage(form){
    console.log(form);
    //deal with raw data from form.
    let f={};
    f['content']=form.content;
    let date=new Date();
    date=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
    f['content']=form.content;
    f['publish_time']=date;
    console.log(f);
}
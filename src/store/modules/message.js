import api from "@/api/index.js"

export default{
    getMessageWithID
}

async function getMessageWithID(id){
    //获取与ID相关的广播数据
    ///async函数的返回值是promise!!!

    let data = await api.getMessageWithID(id);
    //根据广播找到班级名字
    let fakeClassName=["组合数学","数据库"];
    for(let i=0;i<data.length;i++){
        data[i].className=fakeClassName[i];
    }
    console.log("message.js============");
    console.log(data);
    return data;
}
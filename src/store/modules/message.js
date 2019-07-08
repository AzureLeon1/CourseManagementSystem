import api from "@/api/index.js"

export default{
    getMessageWithID
}

function getMessageWithID(id){
    return api.getMessageWithID(id);
}
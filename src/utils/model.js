export class User {
  constructor(props = {}) {
    this.id = props.id
    this.email = props.email || 'default@email.com'
    this.phone_number = props.phone_number
    this.name = props.name
    this.avatar = props.avatar
    this.college = props.college
    this.role = props.role
    this.follower = props.follower
    this.following = props.following
  }
}

export class Class {
  constructor (props = {}){
    this.course_id = props.course_id
    this.sec_id = props.sec_id
    this.semester = props.semester
    this.year = props.year
    this.avatar = props.avatar
    this.content = props.content
    this.status = props.status
    
  }
}

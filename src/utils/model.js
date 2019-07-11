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
    this.grade = props.grade
    this.job_title = props.job_title
  }
}

export class Class {
  constructor (props = {}){
    this.building = props.building
    this.room_number = props.room_number
    this.avatar = props.avatar
    this.teacher_name = props.user_name
    



    //this.course_id = props.course_id
   // this.sec_id = props.sec_id
   // this.semester = props.semester
   // this.year = props.year
    this.avatar = props.avatar
    this.content = props.course_description

   // this.status = props.status
   // this.name = props.course_description
    this.student_count = props.student_number
    this.status = props.status
    
  }
}

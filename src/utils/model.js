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

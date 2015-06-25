import React from "react"
import Post from "Post"
import posts from "../posts"

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  getPost() {
    const slug = this.context.router.getCurrentParams().slug
    return posts.filter(post => post.slug === slug)[0]
  }

  render() {
    return (<Post {...this.getPost()} />)
  }
}

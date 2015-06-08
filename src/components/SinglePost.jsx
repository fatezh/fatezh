import React from "react"
import Post from "Post"
import posts from "../posts"
import find from "lodash/collection/find"

class SinglePost extends React.Component {
  getPost() {
    const slug = this.context.router.getCurrentParams().slug

    return find(posts, post => post.slug === slug)
  }

  render() {
    return (
      <Post
        title={this.getPost().title}
        slug={this.getPost().slug}
        date={this.getPost().date}
        contents={this.getPost().contents} />
    )
  }
}

SinglePost.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default SinglePost

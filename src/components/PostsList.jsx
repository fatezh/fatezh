import React from "react"
import Post from "Post"
import posts from "../posts"

export default class PostsList extends React.Component {
  getPosts() {
    return posts.map(post => <Post {...post} key={post.slug} />)
  }

  render() {
    return <section className="posts_list">{this.getPosts()}</section>
  }
}

import React from "react"
import Post from "Post"
import posts from "../posts"

export default class PostsList extends React.Component {
  getPosts() {
    return posts.map(function(post) {
      return <Post key={post.slug} title={post.title} date={post.date} contents={post.contents} />
    })
  }

  render() {
    return <section className="posts_list">{this.getPosts()}</section>
  }
}

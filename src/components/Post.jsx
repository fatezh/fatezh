import React from "react"
import PostHeader from "PostHeader"
import Markdown from "marked"

export default class Post extends React.Component {
  getPostContents() {
    return { __html: Markdown(this.props.contents) }
  }

  render() {
    return(
      <article className="post">
        <PostHeader title={this.props.title} date={this.props.date} />

        <section className="post-contents" dangerouslySetInnerHTML={this.getPostContents()}>
        </section>
      </article>
    )
  }
}

import React from "react"
import PostHeader from "PostHeader"

export default class Post extends React.Component {
  render() {
    return(
      <article className="post">
        <PostHeader title={this.props.title} date={this.props.date} />

        <section className="post-contents" dangerouslySetInnerHTML={{ __html: this.props.contents }}>
        </section>
      </article>
    )
  }
}

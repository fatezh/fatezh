import React from "react"
import PostHeader from "PostHeader"
import PostFooter from "PostFooter"

export default class Post extends React.Component {
  getPostContents() {
    return { __html: this.props.contents }
  }

  render() {
    return (
      <article className="post">
        <PostHeader title={this.props.title} date={this.props.date} slug={this.props.slug} />

        <section className="post-contents" dangerouslySetInnerHTML={this.getPostContents()}>
        </section>

        <PostFooter {...this.props.author}/>
      </article>
    )
  }
}

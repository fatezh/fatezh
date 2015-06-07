import React from "react"
import PostHeader from "PostHeader"
import highlight from "highlight.js"
import markdown from "marked"

markdown.setOptions({
  highlight: function (code) { return highlight.highlightAuto(code).value }
})

export default class Post extends React.Component {
  getPostContents() {
    return { __html: markdown(this.props.contents) }
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

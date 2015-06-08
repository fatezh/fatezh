import React from "react"
import PostHeader from "PostHeader"
import highlight from "highlight.js"
import markdown from "marked"
import Typograf from "typograf"

const typograf = new Typograf({lang: "ru"})
typograf.enable("ru/optalign/*")
typograf.disable("common/sym/cf")

markdown.setOptions({
  highlight: function (code) { return highlight.highlightAuto(code).value }
})

export default class Post extends React.Component {
  getPostContents() {
    return { __html: typograf.execute(markdown(this.props.contents)) }
  }

  render() {
    return(
      <article className="post">
        <PostHeader title={this.props.title} date={this.props.date} slug={this.props.slug} />

        <section className="post-contents" dangerouslySetInnerHTML={this.getPostContents()}>
        </section>
      </article>
    )
  }
}

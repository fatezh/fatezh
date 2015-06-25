import React from "react/addons"
import PostHeader from "PostHeader"
import PostFooter from "PostFooter"
const { PureRenderMixin } = React.addons

export default class extends React.Component {
  mixins: [PureRenderMixin]

  getPostContents() {
    return { __html: this.props.contents }
  }

  render() {
    return (
      <article className="post">
        <PostHeader title={this.props.title} date={this.props.date} slug={this.props.slug} />

        <section className="post-contents" dangerouslySetInnerHTML={this.getPostContents()}>
        </section>

        <PostFooter {...this.props.author} />
      </article>
    )
  }
}

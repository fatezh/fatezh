import React from "react/addons"
import PostAuthor from "PostAuthor"
const { PureRenderMixin } = React.addons

export default class PostFooter extends React.Component {
  mixins: [PureRenderMixin]

  render() {
    return (
      <footer className="post_footer">
        <PostAuthor {...this.props} />
      </footer>
    )
  }
}

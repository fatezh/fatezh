import React from "react"
import PostAuthor from "./PostAuthor"

export default class extends React.Component {
  render() {
    return (
      <footer className="post_footer">
        <PostAuthor {...this.props} />
      </footer>
    )
  }
}

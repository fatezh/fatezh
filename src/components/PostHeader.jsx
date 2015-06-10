import React from "react/addons"
import Router from "react-router"
const { PureRenderMixin } = React.addons
const { Link } = Router

export default class PostHeader extends React.Component {
  mixins: [PureRenderMixin]

  getPermalink() {
    return `/posts/${this.props.slug}`
  }

  render() {
    return (
      <header className="post_header">
        <h2 className="post_header-title">
          <Link to={this.getPermalink()}>
            {this.props.title}
          </Link>
        </h2>

        <small className="post_header-date">
          {this.props.date}
        </small>
      </header>
    )
  }
}

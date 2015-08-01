import React from "react"
import Router from "react-router"
const { Link } = Router

export default class extends React.Component {
  getPermalink() {
    return `/posts/${this.props.slug}.html`
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

import React from "react"
import Router from "react-router"
const { Link } = Router

export default class PostHeader extends React.Component {
  getPermalink() {
    return "/posts/" + this.props.slug
  }

  render() {
    return(
      <header className="post-header">
        <h2 className="post-title">
          <Link to={this.getPermalink()}>
            {this.props.title}
          </Link>
        </h2>

        <small className="post-date">
          {this.props.date}
        </small>
      </header>
    )
  }
}

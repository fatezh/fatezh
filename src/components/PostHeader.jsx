import React from "react"

export default class PostHeader extends React.Component {
  render() {
    return(
      <header className="post-header">
        <h2 className="post-title">
          {this.props.title}
        </h2>
        <small className="post-date">
          {this.props.date}
        </small>
      </header>
    )
  }
}

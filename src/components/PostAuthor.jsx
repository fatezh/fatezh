import React from "react"

export default class PostAuthor extends React.Component {
  render() {
    return (
      <section className="post_author">
        <img src="https://d262ilb51hltx0.cloudfront.net/fit/c/800/800/0*bXYi3CDSmVsrABQK.jpeg" alt="" className="post_author-img"/>

        <h3 className="post_author-name">
          <a href={this.props.link}>{this.props.name}</a>
        </h3>

        <p className="post_author-bio">
          {this.props.bio}
        </p>
      </section>
    )
  }
}

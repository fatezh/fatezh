import React from "react/addons"
const { PureRenderMixin } = React.addons

export default class extends React.Component {
  mixins: [PureRenderMixin]

  render() {
    return (
      <section className="post_author">
        <img src={this.props.img} alt="" className="post_author-img" />

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

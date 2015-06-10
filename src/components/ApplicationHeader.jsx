import React from "react/addons"
import Router from "react-router"
const { Link } = Router
const { PureRenderMixin } = React.addons

export default class ApplicationHeader extends React.Component {
  render() {
    return (
      <header className="application_header">
        <h1 className="application_header-title">
          <Link to="/">Верстающий Фатеж</Link>
        </h1>
      </header>
    )
  }
}

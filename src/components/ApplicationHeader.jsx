import React from "react/addons"
import Router from "react-router"
const { Link } = Router
const { PureRenderMixin } = React.addons

export default class extends React.Component {
  render() {
    return (
      <td className="application_header">
        <h1 className="application_header-title">
          <Link to="/">Верстающий Фатеж</Link>
        </h1>
      </td>
    )
  }
}

import React from "react"
import Router from "react-router"
const { Link } = Router

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

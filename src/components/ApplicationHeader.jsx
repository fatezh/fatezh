import React from "react"
import Router from "react-router"
const { Link } = Router

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

import React from "react"
import Router from "react-router"
const { RouteHandler } = Router
import ApplicationHeader from "ApplicationHeader"

export default class ApplicationContainer extends React.Component {
  render() {
    return (
      <main className="application_container">
        <ApplicationHeader />
        <RouteHandler />
      </main>
    )
  }
}

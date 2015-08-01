import React from "react"
import Router from "react-router"
import routes from "./components/ApplicationRouter"

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById("application-root"))
})

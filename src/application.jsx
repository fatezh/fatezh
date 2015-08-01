import React from "react"
import Router from "react-router"
import routes from "ApplicationRouter"

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById("application-root"))
})

import React from "react"
import Router from "react-router"
import routes from "./components/ApplicationRouter"

const routerHistory = () => {
  if (document.body.className.indexOf("in-production") >= 0) {
    return Router.HistoryLocation
  } else {
    return null
  }
}

Router.run(routes, routerHistory(), (Handler) => {
  React.render(<Handler />, document.getElementById("application-root"))
})

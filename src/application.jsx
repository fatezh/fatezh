import React from "react"
import Router from "react-router"
const { Route, DefaultRoute } = Router
import ApplicationContainer from "ApplicationContainer"
import PostsList from "PostsList"
import SinglePost from "SinglePost"

const routes = (
  <Route name="app" path="/" handler={ApplicationContainer}>
    <Route name="single-post" path="/posts/:slug" handler={SinglePost} />
    <DefaultRoute handler={PostsList} />
  </Route>
)

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById("application-root"))
})

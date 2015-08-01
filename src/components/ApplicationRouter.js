import React from "react"
import Router from "react-router"
const { Route, DefaultRoute } = Router

import ApplicationContainer from "./ApplicationContainer"
import PostsList from "./PostsList"
import SinglePost from "./SinglePost"

export default (
  <Route name="app" path="/" handler={ApplicationContainer}>
    <Route name="single-post" path="/posts/:slug.html" handler={SinglePost} />
    <DefaultRoute handler={PostsList} />
  </Route>
)

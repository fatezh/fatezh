import React from "react"
import ApplicationContainer from "ApplicationContainer"
import ApplicationHeader from "ApplicationHeader"
import Post from "Post"
import PostsList from "PostsList"

React.render(
  <ApplicationContainer>
    <ApplicationHeader />
    <PostsList />
  </ApplicationContainer>,
  document.getElementById("application-root")
)

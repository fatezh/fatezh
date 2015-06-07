import React from "react"
import ApplicationContainer from "ApplicationContainer"
import ApplicationHeader from "ApplicationHeader"
import ConstructionSign from "ConstructionSign"

React.render(
  <ApplicationContainer>
    <ApplicationHeader />
    <ConstructionSign />
  </ApplicationContainer>,
  document.getElementById("application-root")
)

import React from "react/addons"
import Router from "react-router"
const { RouteHandler } = Router
const { CSSTransitionGroup } = React.addons
import ApplicationHeader from "ApplicationHeader"

class ApplicationContainer extends React.Component {
  render() {
    const name = this.context.router.getCurrentPath()

    return (
      <main className="application_container">
        <ApplicationHeader />
        <CSSTransitionGroup component="div" transitionName="application_container-body" transitionLeave={false}>
          <RouteHandler key={name} />
        </CSSTransitionGroup>
      </main>
    )
  }
}

ApplicationContainer.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default ApplicationContainer

import React from "react/addons"
import Router from "react-router"
const { RouteHandler } = Router
const { CSSTransitionGroup } = React.addons
import ApplicationHeader from "ApplicationHeader"

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  render() {
    const name = this.context.router.getCurrentPath()

    return (
      <table className="application_container"><tbody>
        <tr>
          <ApplicationHeader />
        </tr>
        <tr>
          <CSSTransitionGroup
            component="td"
            transitionName="application_container-body"
            transitionLeave={false}>
              <RouteHandler key={name} />
          </CSSTransitionGroup>
        </tr>
      </tbody></table>
    )
  }
}

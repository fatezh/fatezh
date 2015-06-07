import React from "react"

export default class ApplicationContainer extends React.Component {
  render() {
    return (
      <main className="application_container">
        {this.props.children}
      </main>
    )
  }
}

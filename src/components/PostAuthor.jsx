import React from "react"

export default class PostAuthor extends React.Component {
  render() {
    return (
      <section className="post_author">
        <img src="https://d262ilb51hltx0.cloudfront.net/fit/c/800/800/0*bXYi3CDSmVsrABQK.jpeg" alt="" className="post_author-img"/>

        <h3 className="post_author-name">
          <a href="#">Александр Потехин</a>
        </h3>

        <p className="post_author-bio">
          Доктор физико-математических наук, ведущий научный сотрудник петербургского
          Физико-технического института имени А.Ф. Иоффе (ФТИ) РАН
        </p>
      </section>
    )
  }
}

import React from "react"

export default class PostFooter extends React.Component {
  render() {
    return (
      <footer className="post_footer">
        <img src="https://d262ilb51hltx0.cloudfront.net/fit/c/800/800/0*bXYi3CDSmVsrABQK.jpeg" alt="" className="post_footer-author_img"/>

        <h3 className="post_footer-author">
          <a href="#">Александр Потехин</a>
        </h3>

        <p className="post_footer-author_bio">
          Доктор физико-математических наук, ведущий научный сотрудник петербургского
          Физико-технического института имени А.Ф. Иоффе (ФТИ) РАН
        </p>
      </footer>
    )
  }
}

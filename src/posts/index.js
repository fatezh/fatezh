var fs = require("fs")

export default [
  {
    title: "Отзывчивые изображения. Наконец-то",
    slug: "1-responsive-images-finally",
    contents: fs.readFileSync(__dirname + "/1-responsive-images-finally.html", "utf-8"),
    date: "30 мая 2015"
  },
  {
    title: "Двухфакторный препроцессинг CSS",
    slug: "1-two-factor-css",
    contents: fs.readFileSync(__dirname + "/2-two-factor-css.html", "utf-8"),
    date: "30 мая 2015"
  },
  {
    title: "Рубрика. Диванный эксперт",
    slug: "3-chairborn",
    contents: fs.readFileSync(__dirname + "/3-chairborn.html", "utf-8"),
    date: "30 мая 2015"
  }
]

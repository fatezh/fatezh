var fs = require("fs")

export default [
  {
    title: "Отзывчивые изображения. Наконец-то",
    contents: fs.readFileSync(__dirname + "/1-responsive-images-finally.md", "utf-8"),
    date: "30 мая 2015"
  },
  {
    title: "Двухфакторный препроцессинг CSS",
    contents: fs.readFileSync(__dirname + "/2-two-factor-css.md", "utf-8"),
    date: "30 мая 2015"
  },
  {
    title: "Рубрика. Диванный эксперт",
    contents: fs.readFileSync(__dirname + "/3-chairborn.md", "utf-8"),
    date: "30 мая 2015"
  }
]

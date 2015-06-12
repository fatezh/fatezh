var fs = require("fs")

export default [
  {
    title: "4 фишки, чтобы сделать Javascript быстрее",
    slug: "2-js-hacks-for-faster-web",
    contents: fs.readFileSync(__dirname + "/2-js-hacks-for-faster-web.html", "utf-8"),
    date: "12 июня 2015",
    author: {
      name: "Николас Ортензио",
      img: "/images/nicolas.jpeg",
      link: "https://medium.com/@p_arithmetic/4-more-javascript-hacks-to-make-your-javascript-faster-1f5fd88a219e",
      bio: "Разработчик со сложной фамилией"
    }
  },
  {
    title: "Рубрика. Диванный эксперт",
    slug: "2-chairborn",
    contents: fs.readFileSync(__dirname + "/2-chairborn.html", "utf-8"),
    date: "12 июня 2015",
    author: {
      name: "JawsIk",
      img: "/images/chairborn.jpg",
      link: "http://pytalk.ru/forum/web/441/",
      bio: "Активный человек, работающий в CSS и Flash"
    }
  },
  {
    title: "Отзывчивые изображения. Наконец-то",
    slug: "1-responsive-images-finally",
    contents: fs.readFileSync(__dirname + "/1-responsive-images-finally.html", "utf-8"),
    date: "30 мая 2015",
    author: {
      name: "Джен Шиффер",
      img: "/images/jenn.jpeg",
      link: "https://medium.com/cool-code-pal/a-client-side-responsive-image-solution-finally-d9a47f94eea7",
      bio: "Недавно была включена в список Форбс «Топ 9 людей в ИТ, которым однажды было 9»"
    }
  },
  {
    title: "Двухфакторный препроцессинг CSS",
    slug: "1-two-factor-css",
    contents: fs.readFileSync(__dirname + "/1-two-factor-css.html", "utf-8"),
    date: "30 мая 2015",
    author: {
      name: "Джен Шиффер",
      img: "/images/jenn.jpeg",
      link: "https://medium.com/cool-code-pal/an-introduction-to-two-factor-in-browser-css-preprocessing-e32792e56b53",
      bio: "Автор бестселлера «Как CSS убил RSS»"
    }
  },
  {
    title: "Рубрика. Диванный эксперт",
    slug: "1-chairborn",
    contents: fs.readFileSync(__dirname + "/1-chairborn.html", "utf-8"),
    date: "30 мая 2015",
    author: {
      name: "Alex",
      img: "/images/chairborn.jpg",
      link: "http://pytalk.ru/forum/web/704/",
      bio: "Политикан, менеджер, маркетоид. Характер нордический"
    }
  }
]

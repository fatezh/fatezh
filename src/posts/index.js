var fs = require("fs")
require("babel-core/polyfill")

const issues = {
  first: { date: "30 мая 2015" },
  second: { date: "12 июня 2015" },
  third: { date: "20 июня 2015" }
}

const authors = {
  jenn: {
    name: "Джен Шиффер",
    img: "/images/jenn.jpeg"
  },
  nicolas: {
    name: "Николас Ортензио",
    img: "/images/nicolas.jpeg"
  },
  pavel: {
    name: "Павел Глобла",
    img: "/images/globa.jpg",
    link: "https://vk.com/pavsekakii",
    bio: "Маг, экстрасенс, носитель положительной энергетики и трансцендентная личность"
  }
}

export default [
  {
    title: "RSpec Best Practices 2015",
    slug: "4-rspec-best-practices",
    contents: fs.readFileSync(__dirname + "/4-rspec-best-practices.html", "utf-8"),
    date: "30 сентября 2015",
    author: Object.assign({}, authors.pavel, {
      bio: "Clojure-разработчик, ушедший в Ruby. В детстве любил аттракцион «Осциллограф»"
    })
  },
  {
    title: "Заклинаю вас, откажитесь от CSS",
    slug: "3-deprecate-your-css",
    contents: fs.readFileSync(__dirname + "/3-deprecate-your-css.html", "utf-8"),
    date: issues.third.date,
    author: Object.assign({}, authors.jenn, {
      link: "https://medium.com/cool-code-pal/a-call-for-web-developers-to-deprecate-their-css-1f6430781393",
      bio: "Веб-разработчик, теоретик сложных вычислений. Автор “PHP: The Hood Parts” и других программно-фантастических бестселлеров на Amazon Kindle и Zune"
    })
  },
  {
    title: "Топ 5 ошибок в CSS",
    slug: "3-top-5-css-mistakes",
    contents: fs.readFileSync(__dirname + "/3-top-5-css-mistakes.html", "utf-8"),
    date: issues.third.date,
    author: Object.assign({}, authors.jenn, {
      link: "https://medium.com/cool-code-pal/top-5-c-s-s-mistakes-to-avoid-before-you-die-ee3221e30f6c",
      bio: "Фотограф-любитель хот-догов"
    })
  },
  {
    title: "Рубрика. Советы от Павла Глоблы",
    slug: "3-horoscope",
    contents: fs.readFileSync(__dirname + "/3-horoscope.html", "utf-8"),
    date: issues.third.date,
    author: Object.assign({}, authors.pavel)
  },
  {
    title: "Введение в табличный API HTML5",
    slug: "2-html5-table-api",
    contents: fs.readFileSync(__dirname + "/2-html5-table-api.html", "utf-8"),
    date: issues.second.date,
    author: Object.assign({}, authors.nicolas, {
      link: "https://medium.com/@p_arithmetic/introducing-the-html5-table-api-453a163a3265",
      bio: "разработчик, призер Олимпиады по ховерборду"
    })
  },
  {
    title: "4 фишки, чтобы сделать Javascript быстрее",
    slug: "2-js-hacks-for-faster-web",
    contents: fs.readFileSync(__dirname + "/2-js-hacks-for-faster-web.html", "utf-8"),
    date: issues.second.date,
    author: Object.assign({}, authors.nicolas, {
      link: "https://medium.com/@p_arithmetic/4-more-javascript-hacks-to-make-your-javascript-faster-1f5fd88a219e",
      bio: "Разработчик со сложной фамилией"
    })
  },
  {
    title: "Рубрика. Диванный эксперт",
    slug: "2-chairborn",
    contents: fs.readFileSync(__dirname + "/2-chairborn.html", "utf-8"),
    date: issues.second.date,
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
    date: issues.first.date,
    author: Object.assign({}, authors.jenn, {
      link: "https://medium.com/cool-code-pal/a-client-side-responsive-image-solution-finally-d9a47f94eea7",
      bio: "Недавно была включена в список Форбс «Топ 9 людей в ИТ, которым однажды было 9»"
    })
  },
  {
    title: "Двухфакторный препроцессинг CSS",
    slug: "1-two-factor-css",
    contents: fs.readFileSync(__dirname + "/1-two-factor-css.html", "utf-8"),
    date: issues.first.date,
    author: Object.assign({}, authors.jenn, {
      link: "https://medium.com/cool-code-pal/an-introduction-to-two-factor-in-browser-css-preprocessing-e32792e56b53",
      bio: "Автор бестселлера «Как CSS убил RSS»"
    })
  },
  {
    title: "Рубрика. Диванный эксперт",
    slug: "1-chairborn",
    contents: fs.readFileSync(__dirname + "/1-chairborn.html", "utf-8"),
    date: issues.first.date,
    author: {
      name: "Alex",
      img: "/images/chairborn.jpg",
      link: "http://pytalk.ru/forum/web/704/",
      bio: "Политикан, менеджер, маркетоид. Характер нордический"
    }
  }
]

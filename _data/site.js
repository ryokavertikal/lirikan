module.exports = {
  meta: {
    title: "Lirikan",
    description: "Personal lyrics collection.",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Ryoka",
    authorEmail: "ryokavertikal@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to Lirikan blog 👋🏻",
    description: "Personal lyrics music collections."
  }
}
const app = Vue.createApp({
  // data, functions
  // template to be rendered inside of the app element
  // template: '<h2>I am the template</h2>'

  // MUST return an object
  // properties inside return object are accessible in the HTML
  data() {
    return {
      url: 'https://carloscampoy.netlify.app/',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick sanderson', img: 'assets/1.jpg', isFav: true},
        { title: 'the way of kings', author: 'brandon gagalol', img: 'assets/2.jpg', isFav: false},
        { title: 'the final empire', author: 'brandon gagalol', img: 'assets/3.jpg', isFav: true},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleIsFav(book) {
      console.log(book.isFav)
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

// mounts vue on this element
app.mount('#app')
const app = Vue.createApp({
  data() {
    return {
      name: 'Maxi',
      count: 10,
      photos: [
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1638396625371-367a31947aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        'https://images.unsplash.com/photo-1638403338703-672ec4b3c19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      ],
      currentPhoto: 0,
    }
  },
  methods: {
    increase() {
      this.count++
    }
  }
})

const vm = app.mount('#app')



fetch('https://naughty-bell-46893a.netlify.app/data.json')
  .then(response => response.json())
  .then(data => console.log(data))

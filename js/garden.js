const App = {
  data() {
    return {
      tags: [
        { name: 'Projects', key: 'project', selected: false },
        { name: 'Notes', key: 'note', selected: false },
        { name: 'Essays', key: 'essay', selected: false },
        { name: 'Slides', key: 'slides', selected: false },
      ],
      items: [
        {
          title: 'Getting Started with Lighthouse User Flows',
          url: 'https://dev.to/charca/getting-started-with-lighthouse-user-flows-24dm',
          external: true,
          published: '1 month ago',
          tag: 'essay',
          image: './images/lighthouse-cover.png',
        },
        {
          title: 'Astro Blog Template',
          url: 'https://github.com/Charca/astro-blog-template',
          external: true,
          published: '3 weeks ago',
          tag: 'project',
          image: './images/astro-blog-template.png',
        },
        {
          title: 'React 18 useTransition Hook',
          url: './react-18.html',
          external: false,
          published: '1 week ago',
          tag: 'note',
        },
        {
          title: 'Building Resilient Frontend Architecture',
          url: './frontend-architecture.html',
          external: false,
          published: '2 weeks ago',
          tag: 'note',
        },
        {
          title: 'BootBot',
          url: 'https://github.com/Charca/bootbot',
          external: true,
          published: '2 years ago',
          tag: 'project',
        },
        {
          title: 'Svelte Crush',
          url: 'https://svelte-crush.netlify.app/',
          external: true,
          published: '2 months ago',
          tag: 'project',
        },
        {
          title: 'Cache Me If You Can',
          url: 'https://speakerdeck.com/charca/cache-me-if-you-can-d782f807-fd1c-4492-97d7-14fe2dbec821',
          external: true,
          published: '2 years ago',
          tag: 'slides',
          image: './images/cache-me-if-you-can.png',
        },
        {
          title: 'Building a Pokémon Messenger Chatbot with BootBot',
          url: 'https://chatbotsmagazine.com/building-a-pok%C3%A9mon-messenger-chatbot-with-bootbot-in-less-than-15-minutes-d13a5755cd8',
          external: true,
          published: '2 years ago',
          tag: 'essay',
        },
      ]
    }
  },
  methods: {
    getTarget(external) {
      return external ? '_blank' : '_self'
    },
    selectTag(tag) {
      if (tag.selected) {
        return tag.selected = false
      }

      this.tags.forEach(t => {
        t.selected = t.name === tag.name
      })
    },
    getItems() {
      if (!this.tags.find(t => t.selected)) {
        return this.items
      }

      return this.items.filter(item => {
        return this.tags.find(t => t.selected && t.key === item.tag)
      })
    }
  }
}

Vue.createApp(App).mount('#app');

const app = Vue.createApp({
  data () {
    return {
      userInput: 'OUTPUT',
      confirmInput: '',
    }
  },
  methods: {
    showAlert () {
      alert('μλμ΄ λΏ');
    },
    registerUser (event) {
      this.userInput = event.target.value;
    },
    confirmUser (event) {
      this.confirmInput = event.target.value;
    }
  }
});

app.mount('#assignment');
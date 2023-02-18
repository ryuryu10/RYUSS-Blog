const app = Vue.createApp({
  data () {
    return {
      userInput: 'OUTPUT',
      confirmInput: '',
    }
  },
  methods: {
    showAlert () {
      alert('알람이 뿅');
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
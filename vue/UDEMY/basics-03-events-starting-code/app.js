const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput () {
      this.confirmedName = this.name;
    },
    submitForm () {
      alert('제출되었습니다!!');
    },
    setName (event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add (num) {
      this.counter = this.counter + num;
    },
    reduce (num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');

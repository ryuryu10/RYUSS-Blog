const app = Vue.createApp({
  data () {
    return {
			myName: 'RyuSeoungWoo',
			myAge: 21,
			calcRandomNum: Math.random(),
			imgGoogle: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    }
  }
});

app.mount('#assignment');
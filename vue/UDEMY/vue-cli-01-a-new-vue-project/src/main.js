import { createApp } from 'vue';

import App from './App.vue';
import FriendContat from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContat);

app.mount('#app');

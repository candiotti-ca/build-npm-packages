import { defineCustomElement } from 'vue';
import App from './App.vue';
import './style.css';

const customElement = defineCustomElement(App);
customElements.define('vuejs-example', customElement);

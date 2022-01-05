import { render } from 'preact';
import { App } from './app';
import './style/index.css';
import axios from "axios";

const url = import.meta.env.VITE_APP_BASE_URL;

axios.defaults.baseURL = url?.toString();

console.log(url?.toString());

render(<App />, document.body);

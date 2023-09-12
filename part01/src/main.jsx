import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/Counter';
let counter = 1;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
);

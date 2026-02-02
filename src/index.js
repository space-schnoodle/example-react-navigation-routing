
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import './index.css';
import { NavigationProvider } from './context/navigation.js';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

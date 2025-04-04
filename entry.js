// Root-level entry file that imports App directly
import { createRoot } from 'react-dom/client';
import App from './src/App';
import './src/index.css';

createRoot(document.getElementById("root")).render(App()); 
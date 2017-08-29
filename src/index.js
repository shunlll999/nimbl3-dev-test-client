import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();

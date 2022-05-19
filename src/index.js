//console.log('Hola Mundo');
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const saludo = <h1> Hola Mundo</h1>;
console.log(saludo);

//const divRoot = document.querySelector('#root');
//console.log(divRoot);
const root=createRoot(document.querySelector('#root'));
root.render(saludo);

//const saludo = <h1> Hola Mundo</h1>;
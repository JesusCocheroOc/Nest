import { charmander } from './bases/03-classes';
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
  </div>
`;


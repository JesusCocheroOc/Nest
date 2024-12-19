import { pikachu } from './bases/06-decorators';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${pikachu.name}</h1>
  </div>
`;

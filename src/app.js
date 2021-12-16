import { Canvas } from './components/Canvas';
import './index.scss';

const root = document.getElementById('root');

const canvasElement = document.createElement('canvas');
canvasElement.width = '800';
canvasElement.height = '600';
canvasElement.className = 'canvas';

const canvas = new Canvas(canvasElement);

const button = document.createElement('button');
button.setAttribute('class', 'button');
button.textContent = 'Reset';
button.addEventListener('click', () => {
  canvas.removeBalls();
});

root.appendChild(canvasElement);
root.appendChild(button);

import { Canvas } from './components/Canvas';
import './index.scss';

const root = document.getElementById('root');

const canvasElement = document.createElement('canvas');
canvasElement.width = '800';
canvasElement.height = '600';
canvasElement.className = 'canvas';

const canvas = new Canvas(canvasElement);

const speedLabel = document.createElement('div');
speedLabel.setAttribute('class', 'label');
speedLabel.textContent = 'Speed';

const slowSpeedButton = document.createElement('button');
slowSpeedButton.setAttribute('class', 'button');
slowSpeedButton.textContent = 'slow';
slowSpeedButton.addEventListener('click', () => {
  canvas.setSpeed = 'slow';
});

const normalSpeedButton = document.createElement('button');
normalSpeedButton.setAttribute('class', 'button');
normalSpeedButton.textContent = 'normal';
normalSpeedButton.addEventListener('click', () => {
  canvas.resetSpeed();
});

const fastSpeedButton = document.createElement('button');
fastSpeedButton.setAttribute('class', 'button');
fastSpeedButton.textContent = 'fast';
fastSpeedButton.addEventListener('click', () => {
  canvas.setSpeed = 'fast';
});

const resetButton = document.createElement('button');
resetButton.setAttribute('class', 'button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', () => {
  canvas.removeBalls();
});

const speedButtonContainer = document.createElement('div');
speedButtonContainer.setAttribute('class', 'speedButtonContainer');
speedButtonContainer.appendChild(speedLabel);
speedButtonContainer.appendChild(slowSpeedButton);
speedButtonContainer.appendChild(normalSpeedButton);
speedButtonContainer.appendChild(fastSpeedButton);

root.appendChild(speedButtonContainer);
root.appendChild(canvasElement);
root.appendChild(resetButton);

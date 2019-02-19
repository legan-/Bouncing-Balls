import Canvas from './components/Canvas';
import './index.scss';

const root = document.getElementById('root');
const canvas = document.createElement('canvas');
canvas.width = '800';
canvas.height = '600';
canvas.className = 'canvas';

root.appendChild(canvas)

window.Canvas = new Canvas(canvas);


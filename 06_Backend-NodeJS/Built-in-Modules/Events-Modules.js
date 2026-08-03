import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
    console.log('Please turn-off the motor!');
    setTimeout(() => {
    console.log('Please turn-off the motor! , its a gentle reminder .... ');
    
    },3000);
});
myEmitter.emit('waterFull');
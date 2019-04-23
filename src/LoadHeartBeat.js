import ClientSocket from 'socket.io-client';
const socket = ClientSocket('http://localhost:3000');

function LoadHeartBeat(cb, sessionId) {
  socket.on('changeHeartBeat', heartBeatLevel => cb(null, heartBeatLevel));
  socket.emit('startHeartBeatCount', 1000, sessionId);
}

function LoadHeartBeatVariation(cb) {
  socket.on('changeHeartBeatVariation', heartBeatVariation => cb(null, heartBeatVariation));
}

function StopHeartBeatCount() {
  socket.emit('stopHearbeatCount');
}
export { LoadHeartBeat, LoadHeartBeatVariation, StopHeartBeatCount };
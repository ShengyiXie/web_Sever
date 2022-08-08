const http = require('http');
const severHandler = require('../app')

const PORT = 5000;

const sever = http.createServer(severHandler);

sever.listen(PORT, () => {
    console.log('sever running at port 5000...');
})
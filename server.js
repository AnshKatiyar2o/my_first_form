const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((request, response) => {
    console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Powered-By': 'Node.js'
    });

    response.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My First Server</title>
<style>
body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 50px auto;
    text-align: center;
}
h1 {
    color: #2E75B6;
}
</style>
</head>
<body>
<h1>Hello, Full-Stack World!</h1>
<p>This Page was Served By Node.js On Port ${PORT}.</p>
<p>Server time: ${new Date().toLocaleString()}</p>
</body>
</html>
`);
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    console.log('Press Ctrl+C to stop the server.');
});
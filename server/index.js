// here we're importing your express app
const server = require('./app');

const port = process.env.PORT || 3030;

// We're telling the app to listen for network requests on port 3000
server.listen(port, function() {
  console.log('Server is listening on http://localhost:' + port);
});

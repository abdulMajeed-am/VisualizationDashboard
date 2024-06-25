// server.js

const app = require('./app'); // Adjust the path as necessary

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Basevele app' }));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

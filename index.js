const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(logger); // Apply logger middleware globally

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });
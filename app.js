const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 😃');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2 Route Handlers

// 3 Routes
// More simple approach

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

// Find and get all
// app.get('/api/v1/tours', getAllTours);
// Create a new or post.
// app.post('/api/v1/tours', createTour);

// Find by the id
// app.get('/api/v1/tours/:id', getTour);
// Update a Tour

// app.patch('/api/v1/tours/:id', updateTour);

// Delete a request

// app.delete('/api/v1/tours/:id', deleteTour);

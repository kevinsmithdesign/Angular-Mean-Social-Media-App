const express = require('express');
const app = express();

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header',
                'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods',
                'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});



app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '1',
      title: 'First Server-Side-Post',
      content: 'This is coming from the server'
    },
    { id: '2',
      title: 'Second Server-Side-Post',
      content: 'This is coming from the server'
    },
    { id: '3',
      title: 'Third Server-Side-Post',
      content: 'This is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Post fetched successfully!',
    posts: posts
  });
});

module.exports = app;

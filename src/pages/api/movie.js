// pages/api/movies.js

import clientPromise from '../../utils/mongodb';

export default async (req, res) => {
  const { moods } = req.query;

  if (!moods) {
    return res.status(400).json({ error: 'Missing moods parameter' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const moviesCollection = db.collection('movie');
    
    // Use aggregation to fetch a random movie
    const pipeline = [
      { $match: { moods } },
      { $sample: { size: 1 } } // Fetch one random document
    ];
    
    const movies = await moviesCollection.aggregate(pipeline).toArray();

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
    
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

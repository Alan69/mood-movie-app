import clientPromise from '../../utils/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const moodsCollection = db.collection('moods');
    const moods = await moodsCollection.find({}).toArray();

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// pages/api/getImage.js

export default async function handler(req, res) {
    const { url } = req.query;
  
    if (!url) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }
  
    try {
      const response = await fetch(url); // Fetch the image from the external source
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
  
      const imageBuffer = await response.arrayBuffer(); // Convert the response to a buffer
      const imageBase64 = Buffer.from(imageBuffer).toString('base64'); // Convert the buffer to base64
  
      // Respond with the image data
      res.setHeader('Content-Type', 'image/jpeg'); // Set the appropriate content type
      res.status(200).send(Buffer.from(imageBase64, 'base64'));
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
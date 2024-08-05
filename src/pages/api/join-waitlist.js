export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      // TODO: Implement your email storage logic here
      // This could involve saving to a database, sending to an email service, etc.
      console.log('Received email for waitlist:', email);
  
      // For now, we'll just simulate a successful submission
      res.status(200).json({ message: 'Successfully joined the waitlist' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
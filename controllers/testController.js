export function testController(req, res) {
  try {
    // Simulating a test response
    res.status(200).send({ message: 'Test successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

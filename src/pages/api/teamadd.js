const { log } = console;

export default function teamAdd(req, res) {
  if (req.method === 'POST') {
    const reqPayload = req?.body;

    log('Req Payload:', reqPayload);

    return res.json({ msg: 'Request Sent' });
  }
  return res.status(500).json({
    msg: 'This nees to be a post request',
  });
}

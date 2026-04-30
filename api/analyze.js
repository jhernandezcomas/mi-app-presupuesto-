export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const key = 'sk-ant-' + 'api03-' + 'WcTI2_O-vBLTb3Sh8WwjGu43Idkh_3b_KvtbytdWsJMWXRLFSCRew7zaSdSC1699-Yxp3w7DwRNbGAx6p0wPXg-OJkAwAAA';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: 'Error' });
  }
}

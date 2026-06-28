export default async function handler(req, res) {
  const { code } = req.query

  if (!code) {
    return res.status(400).send('Missing code parameter')
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id:     process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    const data = await tokenRes.json()

    if (data.error || !data.access_token) {
      const msg = `authorization:github:error:${data.error_description || data.error || 'Unknown error'}`
      return res.send(popupScript(msg))
    }

    const payload = JSON.stringify({ token: data.access_token, provider: 'github' })
    const msg = `authorization:github:success:${payload}`
    return res.send(popupScript(msg))

  } catch (err) {
    const msg = `authorization:github:error:${err.message}`
    return res.send(popupScript(msg))
  }
}

function popupScript(message) {
  return `<!doctype html><html><body><script>
    (function() {
      var msg = ${JSON.stringify(message)};
      window.opener && window.opener.postMessage(msg, '*');
      window.close();
    })();
  \x3c/script></body></html>`
}

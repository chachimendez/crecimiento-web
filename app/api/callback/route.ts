export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("Missing code", { status: 400 });
  }

  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await res.json();

  if (data.error || !data.access_token) {
    const message = JSON.stringify({ error: data.error ?? "no_token" });
    return new Response(`Authentication failed: ${message}`, { status: 401 });
  }

  const payload = JSON.stringify({ token: data.access_token, provider: "github" });

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${payload.replace(/'/g, "\\'")}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
    <p>Autenticando…</p>
  </body>
</html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

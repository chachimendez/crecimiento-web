import { NextResponse } from "next/server";

export function GET(req: Request) {
  const url = new URL(req.url);
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("GITHUB_CLIENT_ID is not configured", { status: 500 });
  }
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", `${url.origin}/api/callback`);
  authUrl.searchParams.set("scope", "repo,user");
  authUrl.searchParams.set("state", crypto.randomUUID());
  return NextResponse.redirect(authUrl.toString());
}

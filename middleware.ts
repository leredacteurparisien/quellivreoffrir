import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host === "quellivreoffrir.vercel.app") {
    const url = new URL(req.url);
    url.host = "quellivreoffrir.fr";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

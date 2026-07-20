import { NextResponse, type NextRequest } from "next/server";

import { isGoneUrl } from "@/lib/constants/gone-urls";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/410") {
    return NextResponse.next({ status: 410 });
  }

  if (isGoneUrl(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/410";
    return NextResponse.rewrite(url, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

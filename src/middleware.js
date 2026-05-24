import {
    NextResponse
} from "next/server";

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const hasLocale =
        pathname.startsWith("/ar") ||
        pathname.startsWith("/en");

    if (hasLocale) return NextResponse.next();

    request.nextUrl.pathname = `/ar${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)",
    ],
};
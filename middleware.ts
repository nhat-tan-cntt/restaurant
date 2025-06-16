// middleware.ts
import { NextRequest } from "next/server";
import i18nMiddleware from "./middleware/i18n-middleware";

export function middleware(request: NextRequest) {
    return i18nMiddleware(request);
    // return authMiddleware(request, response);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

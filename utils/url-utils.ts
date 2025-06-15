// url-utils.ts

/**
 * Loại bỏ locale và trả về path sạch (ví dụ: "/vi/orders/details/1" -> "/orders/details/1")
 */
export function getPathAfterLocale(
    pathname: string,
    locales: string[]
): string {
    const segments = pathname.split("/").filter(Boolean); // ['vi', 'orders', 'details', '1']
    const first = segments[0];

    if (locales.includes(first)) {
        segments.shift(); // Xóa 'vi'
    }

    return "/" + segments.join("/");
}

/**
 * Kiểm tra xem đường dẫn hiện tại có khớp với item sidebar không
 */
export function isPathActive(currentPath: string, itemPath: string): boolean {
    return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
}

/**
 * Thay đổi locale trong pathname hiện tại thành locale mới.
 *
 * @param pathname - Đường dẫn hiện tại (có thể có hoặc không có locale), ví dụ: `/vi/settings` hoặc `/settings`
 * @param currentLocale - Locale hiện tại, ví dụ: `vi`
 * @param newLocale - Locale mới cần chuyển sang, ví dụ: `en`
 * @param locales - Danh sách các locale được hỗ trợ, ví dụ: `["en", "vi"]`
 * @returns Đường dẫn mới với locale đã được thay thế hoặc thêm vào đầu
 *
 * @example
 * switchLocalePath('/vi/settings', 'vi', 'en', ['en', 'vi']) // => '/en/settings'
 * switchLocalePath('/settings', 'en', 'vi', ['en', 'vi'])    // => '/vi/settings'
 */
export function switchLocalePath(
    pathname: string,
    currentLocale: string,
    newLocale: string,
    locales: string[]
): string {
    const segments = pathname.split("/").filter(Boolean);

    if (locales.includes(segments[0])) {
        segments[0] = newLocale;
    } else {
        segments.unshift(newLocale);
    }

    return "/" + segments.join("/");
}

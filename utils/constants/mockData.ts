import {
    MessageSquareMore,
    LayoutGrid,
    ScrollText,
    CalendarDays,
    ClipboardList,
    Box,
    Star
} from "lucide-react";

export const items = [
    {
        title: "Home",
        url: "/vi/dashboard",
        icon: LayoutGrid,
    },
    {
        title: "Orders",
        url: "/vi/orders",
        icon: ScrollText,
    },
    {
        title: "Messages",
        url: "/vi/messages",
        icon: MessageSquareMore,
    },
    {
        title: "Calendar",
        url: "/vi/calendar",
        icon: CalendarDays,
    },
    {
        title: "Menu",
        url: "/vi/menu",
        icon: ClipboardList,
    },
    {
        title: "Inventory",
        url: "/vi/inventory",
        icon: Box,
    },
    {
        title: "Reviews",
        url: "/vi/reviews",
        icon: Star,
    },
];

import {
    MessageSquareMore,
    LayoutGrid,
    ScrollText,
    CalendarDays,
    ClipboardList,
    Box,
    Star,
    SquareTerminal,
} from "lucide-react";

export const items = [
    {
        title: "dashboard",
        url: "/dashboard",
        icon: LayoutGrid,
    },
    {
        title: "orders",
        url: "/orders",
        icon: ScrollText,
    },
    {
        title: "messages",
        url: "/messages",
        icon: MessageSquareMore,
    },
    {
        title: "calendar",
        url: "/calendar",
        icon: CalendarDays,
    },
    {
        title: "menu",
        url: "/menu",
        icon: ClipboardList,
    },
    {
        title: "inventory",
        isActive: true,
        url: "#",
        icon: Box,
        childrens: [
            {
                title: "inventory",
                url: "/inventory",
            },
            {
                title: "purchase-order",
                url: "/purchase-order",
            },
        ],
    },
    {
        title: "reviews",
        url: "/reviews",
        icon: Star,
    },
];

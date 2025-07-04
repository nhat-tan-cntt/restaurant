"use client";

import HeaderAdmin from "@/components/header/HeaderAdmin";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="flex flex-col h-screen overflow-hidden">
                    <HeaderAdmin />
                    <main className="flex flex-col h-screen overflow-y-auto">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}

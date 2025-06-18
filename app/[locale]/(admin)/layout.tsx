import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import "@/styles/globals.css";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import HeaderAdmin from "@/components/header/header-admin";

const geistSans = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Inter_Tight({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Restaurant",
    description: "Restaurant by create next app",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

    return (
        <>
            <html lang={locale} suppressHydrationWarning>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiaseds`}
                >
                    <NextIntlClientProvider>
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
                                    <main className="flex flex-col h-screen overflow-y-auto">{children}</main>
                                </SidebarInset>
                            </SidebarProvider>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </body>
            </html>
        </>
    );
}

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
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
                                <SidebarInset>
                                    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                                        <div className="flex items-center gap-2 px-4">
                                            <SidebarTrigger className="-ml-1" />
                                            <Separator
                                                orientation="vertical"
                                                className="mr-2 data-[orientation=vertical]:h-4"
                                            />
                                        </div>
                                        <div className="flex items-center gap-4 px-4">
                                            <ThemeToggle />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="relative rounded-xl bg-muted p-0 hover:bg-muted/80"
                                            >
                                                <div className="rounded-xl bg-muted p-3">
                                                    <Bell className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <Badge
                                                    className="absolute top-0 right-0 w-4 h-4 p-0 flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-sm"
                                                >
                                                    3
                                                </Badge>
                                            </Button>
                                            <Card className="flex items-center gap-4 p-3 rounded-2xl bg-background border-none shadow-none">
                                                <div>
                                                    <CardTitle className="text-base">Orlando Laurentius</CardTitle>
                                                    <CardDescription>Admin</CardDescription>
                                                </div>
                                                <Avatar className="rounded-lg">
                                                    <AvatarImage
                                                        src="https://github.com/evilrabbit.png"
                                                        alt="@evilrabbit"
                                                    />
                                                    <AvatarFallback className="rounded-lg">OL</AvatarFallback>
                                                </Avatar>
                                            </Card>
                                        </div>
                                    </header>
                                    <main>{children}</main>
                                </SidebarInset>
                            </SidebarProvider>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </body>
            </html>
        </>
    );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
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
                                        <div className="flex items-center gap-2 px-4">
                                            <ThemeToggle />
                                        </div>
                                    </header>
                                    <main>
                                        {children}
                                    </main>
                                </SidebarInset>
                            </SidebarProvider>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </body>
            </html>
        </>
    );
}

"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { items } from "@/utils/constants/mockData";
import { getPathAfterLocale, isPathActive } from "@/utils/url-utils";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ChevronRight, Settings, UtensilsCrossed } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const t = useTranslations("sidebar");
    const pathname = usePathname();
    const cleanPath = getPathAfterLocale(pathname, [...routing.locales]); // Bỏ locale

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <UtensilsCrossed className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-2xl leading-tight">
                        <span className="truncate font-medium">RESTAURANT</span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = isPathActive(
                                    cleanPath,
                                    item.url
                                );

                                return (
                                    <Collapsible
                                        key={item.title}
                                        asChild
                                        defaultOpen={item.isActive}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                {item.childrens ? (
                                                    <CollapsibleTrigger asChild>
                                                        <div
                                                            className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                                                                isActive
                                                                    ? "bg-orange-100 text-orange-500 font-medium"
                                                                    : "text-gray-500 hover:text-orange-500"
                                                            }`}
                                                        >
                                                            {item.icon && (
                                                                <item.icon className="w-5 h-5" />
                                                            )}
                                                            <span>
                                                                {t(
                                                                    `${item.title}`
                                                                )}
                                                            </span>
                                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                        </div>
                                                    </CollapsibleTrigger>
                                                ) : (
                                                    <Link
                                                        href={item.url}
                                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                                                            isActive
                                                                ? "bg-orange-100 text-orange-500 font-medium"
                                                                : "text-gray-500 hover:text-orange-500"
                                                        }`}
                                                    >
                                                        {item.icon && (
                                                            <item.icon className="w-5 h-5" />
                                                        )}
                                                        <span>
                                                            {t(`${item.title}`)}
                                                        </span>
                                                    </Link>
                                                )}
                                            </SidebarMenuButton>

                                            {item.childrens && (
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {item.childrens.map(
                                                            (subItem) => {
                                                                const isActiveSub =
                                                                    isPathActive(
                                                                        cleanPath,
                                                                        subItem.url
                                                                    );

                                                                return (
                                                                    <SidebarMenuSubItem
                                                                        key={
                                                                            subItem.title
                                                                        }
                                                                        className={`relative ${
                                                                            isActiveSub
                                                                                ? "before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[2px] before:bg-orange-500"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        <SidebarMenuSubButton
                                                                            asChild
                                                                            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                                                                                isActiveSub
                                                                                    ? "bg-orange-100 text-orange-500 font-semibold"
                                                                                    : "text-muted-foreground hover:bg-muted/50"
                                                                            }`}
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    subItem.url
                                                                                }
                                                                            >
                                                                                <span>
                                                                                    {t(
                                                                                        `${subItem.title}`
                                                                                    )}
                                                                                </span>
                                                                            </Link>
                                                                        </SidebarMenuSubButton>
                                                                    </SidebarMenuSubItem>
                                                                );
                                                            }
                                                        )}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            )}
                                        </SidebarMenuItem>
                                    </Collapsible>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenuButton asChild>
                    <Link
                        href="/settings"
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                            isPathActive(cleanPath, "/settings")
                                ? "bg-orange-100 text-orange-500 font-medium"
                                : "text-gray-500 hover:text-orange-500"
                        }`}
                    >
                        <Settings />
                        <span>{t("settings")}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

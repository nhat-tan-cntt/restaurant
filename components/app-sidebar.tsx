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
    SidebarRail,
} from "@/components/ui/sidebar";
import { items } from "@/utils/constants/mockData";
import { Settings, UtensilsCrossed } from "lucide-react";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

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
                                const isActive = pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={item.url}
                                                className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                                                    isActive
                                                        ? "bg-orange-100 text-orange-500 font-medium"
                                                        : "text-gray-500 hover:text-orange-500"
                                                }`}
                                            >
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild>
                    <a href="#">
                        <Settings />
                        <span>Settings</span>
                    </a>
                </SidebarMenuButton>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

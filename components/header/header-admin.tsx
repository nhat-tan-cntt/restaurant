"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Search, Menu, UtensilsCrossed } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Command, CommandInput } from "@/components/ui/command";

export default function HeaderAdmin() {
    return (
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
            <div className="hidden md:flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
            </div>

            <div className="hidden md:flex items-center gap-4">
                <div className="hidden lg:block">
                    <Command className="shadow-md">
                        <CommandInput placeholder="Search anything" />
                    </Command>
                </div>
                <div className="block lg:hidden">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-xl bg-muted p-2 shadow-md"
                    >
                        <Search className="w-5 h-5 text-muted-foreground" />
                    </Button>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-xl bg-muted p-0 hover:bg-muted/80 shadow-md"
                >
                    <div className="rounded-xl bg-muted p-3">
                        <Bell className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <Badge className="absolute top-0 right-0 w-4 h-4 p-0 flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-sm">
                        3
                    </Badge>
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger className="flex text-left items-center gap-4 p-3 rounded-2xl bg-background border-none shadow-none">
                        <div className="hidden lg:block min-w-32 max-w-[160px]">
                            <CardTitle className="text-base truncate whitespace-nowrap overflow-hidden text-ellipsis">
                                Orlando Laurentius
                            </CardTitle>
                            <CardDescription>Admin</CardDescription>
                        </div>

                        <Avatar className="rounded-lg shadow-md">
                            <AvatarImage
                                src="https://github.com/evilrabbit.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback className="rounded-lg">
                                OL
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <div>
                                <CardTitle className="text-base">
                                    Orlando Laurentius
                                </CardTitle>
                                <CardDescription>Admin</CardDescription>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex justify-between w-full">
                            <Label>Theme</Label>
                            <ThemeToggle />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex justify-between w-full">
                            <Label>Logout</Label>
                            <Button size="sm" className="h-5">
                                <LogOut size={12} />
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex items-center justify-between w-full md:hidden">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg">
                    <UtensilsCrossed className="size-4" />
                </div>

                <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </header>
    );
}

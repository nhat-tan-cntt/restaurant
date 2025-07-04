"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Ellipsis } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Inventory = {
    id: string;
    name: string;
    image: string;
    category: string;
    status: "Available" | "Out of Stock";
    qty_in_stock: number;
    qty_in_reorder: number;
};

export const columns: ColumnDef<Inventory>[] = [
    {
        id: "select",
        accessorKey: "id",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => {
                    table.toggleAllPageRowsSelected(!!value);
                    setTimeout(() => {
                        const selectedRows = table.getSelectedRowModel().rows;
                        const selectedData = selectedRows.map(
                            (r) => r.original
                        );
                        console.log("Selected Rows", selectedData);
                    }, 0);
                }}
                aria-label="Select all"
            />
        ),
        cell: ({ row, table }) => {
            return (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => {
                        row.toggleSelected(!!value);
                        setTimeout(() => {
                            const selectedData = table
                                .getSelectedRowModel()
                                .rows.map((r) => r.original);

                            console.log("Selected items:", selectedData);
                        }, 0);
                    }}
                    aria-label="Select row"
                />
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorFn: (row) => row.name,
        accessorKey: "item",
        enableHiding: false,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Item
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => {
            const img = row.original.image;
            const name = row.original.name;

            return (
                <div className="flex gap-4">
                    <img width={20} height={20} src={img} alt={name} />
                    <div className="lowercase">{name}</div>
                </div>
            );
        },
    },
    {
        accessorKey: "category",
        enableHiding: false,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Category
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("category")}</div>
        ),
    },
    {
        accessorKey: "status",
        enableHiding: false,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => {
            const status = row.getValue("status");

            return (
                <Badge
                    variant={`${
                        status === "Available" ? "default" : "secondary"
                    }`}
                    className="uppercase gap-2 dark:"
                >
                    <Badge
                        className="h-2 min-w-2 rounded-full px-1"
                        variant={`${
                            status === "Available" ? "secondary" : "default"
                        }`}
                    />
                    {row.getValue("status")}
                </Badge>
            );
        },
    },
    {
        accessorKey: "qty_in_stock",
        enableHiding: false,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Qty in Stock
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="flex gap-4">
                <Progress
                    value={row.getValue("qty_in_stock")}
                    className="w-[50%]"
                />
                <div className="lowercase">{row.getValue("qty_in_stock")}</div>
            </div>
        ),
    },
    {
        accessorKey: "qty_in_reorder",
        enableHiding: false,
        header: ({ column }) => {
            return (
                <div className="flex justify-center">
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Qty in Reorder
                        <ArrowUpDown />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="text-center">{row.getValue("qty_in_reorder")}</div>
        ),
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="data-[state=open]:bg-muted text-muted-foreground flex size-8 outline-none"
                        size="icon"
                    >
                        <Ellipsis />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-32">
                    <DropdownMenuItem>Edit</DropdownMenuItem>

                    <DropdownMenuItem>
                        <Button variant={"destructive"}>Delete</Button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Button variant={"outline"}>Reorder</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button>Update Stock</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];

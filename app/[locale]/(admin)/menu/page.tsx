"use client";

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";

const products = [
    { name: "Smokey Supreme Pizza", price: "$12.00" },
    { name: "Grilled Salmon", price: "$22.00" },
    { name: "Classic Cheeseburger", price: "$10.00" },
    { name: "Fiery Shrimp Salad", price: "$8.00" },
    { name: "Chocolate Lava Cake", price: "$9.00" },
    { name: "Spaghetti Carbonara", price: "$15.00" },
    { name: "Vegan Buddha Bowl", price: "$11.00" },
    { name: "Miso Ramen", price: "$13.00" },
    { name: "BBQ Pulled Pork", price: "$14.00" },
    { name: "Truffle Fries", price: "$6.00" },
    { name: "Lobster Roll", price: "$25.00" },
    { name: "Caesar Salad", price: "$7.00" },
];

export default function PageMenu() {
    const [page, setPage] = useState(1)
    const pageSize = 9
    const totalPages = Math.ceil(products.length / pageSize)
    const currentItems = products.slice((page - 1) * pageSize, page * pageSize)


    return (
        <main className="flex flex-1 flex-col gap-3 p-4 pt-0">
            <div className="grid md:grid-cols-[260px_1fr] gap-5">
                {/* Filter column */}
                <aside className="hidden md:block bg-muted/50 min-h-full rounded-xl px-4 py-6">
                    <div className="bg-muted/50 min-h-full rounded-none lg:rounded-xl" />
                </aside>

                <div className="px-5 pt-5 bg-muted/50 rounded-xl">
                    <div className="flex flex-col">
                        {/* Grid sản phẩm */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {currentItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-muted/50 rounded-xl p-4 border border-neutral-800 flex flex-col h-full"
                                >
                                    {/* Hình ảnh */}
                                    <div className="flex-1">
                                        <div className="aspect-[4/3] bg-muted/50 rounded-lg" />
                                    </div>

                                    {/* Nội dung */}
                                    <div className="mt-4 space-y-1">
                                        <div className="text-base font-semibold">{item.name}</div>
                                        <div className="text-orange-500 font-bold">{item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="w-full py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                            <div className="hidden lg:block text-sm min-w-44">
                                Đang hiển thị {currentItems.length} trong số {products.length}
                            </div>

                            <Pagination className="min-w-28 justify-center md:justify-end">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious className="[&>span]:sr-only p-0" onClick={() => setPage(p => Math.max(1, p - 1))} />
                                    </PaginationItem>
                                    <PaginationItem className="px-4 text-sm">
                                        <PaginationLink href="#">{page}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext className="[&>span]:sr-only p-0" onClick={() => setPage(p => Math.min(totalPages, p + 1))} />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

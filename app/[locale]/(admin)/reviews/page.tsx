"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Reviews() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
                <div className="p-6 col-span-1 bg-muted/50 rounded-xl min-h-80">
                    <div className="flex justify-between">
                        <h4 className="font-bold">Retings</h4>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow-sm"
                            captionLayout="dropdown"
                        />
                    </div>
                </div>

                <div className="p-6 col-span-1 lg:col-span-2 bg-muted/50 rounded-xl min-h-80">
                </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
                <div className="p-6 md:col-span-3 bg-muted/50 min-h-[550px] rounded-xl">
                </div>
            </div>
        </main>
    );
}

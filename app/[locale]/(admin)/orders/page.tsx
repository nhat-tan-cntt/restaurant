"use client";

export default function PageOrder() {

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-4 lg:grid-cols-3">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                    <div className="bg-muted/50 min-h-32 rounded-xl"></div>
                    <div className="bg-muted/50 min-h-32 rounded-xl"></div>
                    <div className="bg-muted/50 min-h-32 rounded-xl"></div>
                    <div className="bg-muted/50 min-h-32 rounded-xl"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:col-span-2 gap-4">
                    <div className="bg-muted/50 rounded-xl min-h-60"></div>
                    <div className="bg-muted/50 rounded-xl min-h-60"></div>
                </div>
            </div>

            <div className="bg-muted/50 min-h-[550px] rounded-xl"></div>
        </main>
    )
}

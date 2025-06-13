"use client";

export default function Order() {

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-3">
                    <div className="grid gap-3">
                        <div className="grid gap-4 lg:grid-cols-3">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                                <div className="bg-muted/50 h-32 rounded-xl"></div>
                                <div className="bg-muted/50 h-32 rounded-xl"></div>
                                <div className="bg-muted/50 h-32 rounded-xl"></div>
                                <div className="bg-muted/50 h-32 rounded-xl"></div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:col-span-2 gap-4 ">
                                <div className="bg-muted/50 rounded-xl min-h-60"></div>
                                <div className="bg-muted/50 rounded-xl min-h-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
                <div className="md:col-span-3">
                    <div className="bg-muted/50 h-[550px] rounded-xl"></div>
                </div>
            </div>
        </main >
    )
}

"use client";
import { useTranslations } from "next-intl";

export default function PageDashboard() {
    // const t = useTranslations("HomePage");

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 pt-0">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-3">
                    <div className="grid grid-flow-row gap-3">
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="bg-muted/50 min-h-32 rounded-xl" />
                                <div className="bg-muted/50 min-h-32 rounded-xl" />
                                <div className="bg-muted/50 min-h-32 rounded-xl" />
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="md:col-span-2">
                                    <div className="bg-muted/50 min-h-52 rounded-xl" />
                                </div>
                                <div>
                                    <div className="bg-muted/50 min-h-52 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="md:col-span-2">
                                    <div className="bg-muted/50 min-h-56 rounded-xl" />
                                </div>
                                <div>
                                    <div className="bg-muted/50 min-h-56 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="md:col-span-3">
                                    <div className="bg-muted/50 min-h-64 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="md:col-span-3">
                                    <div className="bg-muted/50 min-h-52 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block col-span-1">
                    <div className="grid grid-flow-row gap-3">
                        <div>
                            <div className="bg-muted/50 min-h-20 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 min-h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 min-h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 min-h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 min-h-80 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

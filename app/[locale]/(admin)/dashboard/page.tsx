"use client";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 pt-0">
            <div className="grid gap-5 md:grid-cols-4">
                <div className="col-span-3">
                    <div className="grid grid-flow-row gap-3">
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="bg-muted/50 h-32 rounded-xl" />
                                <div className="bg-muted/50 h-32 rounded-xl" />
                                <div className="bg-muted/50 h-32 rounded-xl" />
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="col-span-2">
                                    <div className="bg-muted/50 h-52 rounded-xl" />
                                </div>
                                <div>
                                    <div className="bg-muted/50 h-52 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="col-span-2">
                                    <div className="bg-muted/50 h-56 rounded-xl" />
                                </div>
                                <div>
                                    <div className="bg-muted/50 h-56 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="col-span-3">
                                    <div className="bg-muted/50 h-64 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="col-span-3">
                                    <div className="bg-muted/50 h-52 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block col-span-1">
                    <div className="grid grid-flow-row gap-3">
                        <div>
                            <div className="bg-muted/50 h-20 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 h-52 rounded-xl" />
                        </div>
                        <div>
                            <div className="bg-muted/50 h-80 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

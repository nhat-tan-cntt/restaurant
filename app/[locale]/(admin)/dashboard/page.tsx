"use client";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");

    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        //         <h1>{t("title")}</h1>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
        //     </main>
        // </div>
    );
}

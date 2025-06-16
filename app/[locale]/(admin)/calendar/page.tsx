export default function Page() {
    return <main className="flex flex-1 flex-col gap-3 p-4 pt-0">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-3">
                <div className="grid grid-flow-row gap-3">
                    <div className="bg-muted/50 min-h-[90vh] rounded-xl" />
                </div>
            </div>
            <div className="hidden md:block col-span-1">
                <div className="bg-muted/50 min-h-[90vh] rounded-xl" />
            </div>
        </div>
    </main>;
}

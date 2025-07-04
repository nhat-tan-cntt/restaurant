
export default async function PageDetail({ params }: { params: { id: string } }) {
    const { id } = await params;

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 pt-0">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-3">
                    <div className="grid grid-flow-row gap-3">
                        <div className="grid gap-3 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="hidden md:grid bg-muted/50 rounded-xl p-4 min-h-[90vh] grid-rows-2 gap-4">
                                    <div className="rounded-xl p-4 overflow-auto bg-background flex items-center justify-center text-center font-bold text-muted-foreground">
                                        <div>
                                            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Order ID {id}</h1>
                                            <br />BẢNG DỮ LIỆU (TABLE)</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="rounded-xl p-4 h-full bg-background overflow-auto flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            THẺ 1 (CARD 1)
                                        </div>
                                        <div className="rounded-xl p-4 h-full bg-background overflow-auto flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            THẺ 2 (CARD 2)
                                        </div>
                                    </div>
                                </div>

                                <div className="md:hidden flex flex-col gap-4 min-h-[90vh]">
                                    <div className="bg-muted/50 rounded-xl p-4 flex-[5] flex flex-col">
                                        <div className="rounded-xl p-4 bg-background flex-1 overflow-auto flex items-center justify-center text-center font-bold text-muted-foreground">
                                            BẢNG DỮ LIỆU (TABLE)
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 rounded-xl p-4 flex-[2.5] flex flex-col">
                                        <div className="rounded-xl p-4 bg-background flex-1 overflow-auto flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            THẺ 1 (CARD 1)
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 rounded-xl p-4 flex-[2.5] flex flex-col">
                                        <div className="rounded-xl p-4 bg-background flex-1 overflow-auto flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            THẺ 2 (CARD 2)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="hidden md:flex flex-col gap-4 bg-muted/50 min-h-[90vh] rounded-xl p-4">
                                    <div className="bg-background rounded-xl flex-[2] overflow-hidden flex items-center justify-center text-center font-semibold text-muted-foreground">
                                        BẢN ĐỒ (MAP)
                                    </div>
                                    <div className="bg-background rounded-xl p-4 flex-[1] overflow-auto flex items-center justify-center text-center font-semibold text-muted-foreground">
                                        THÔNG TIN TÀI XẾ (DRIVER)
                                    </div>
                                </div>

                                <div className="md:hidden flex flex-col gap-4 min-h-[90vh]">
                                    <div className="bg-muted/50 rounded-xl p-4 flex-[6] flex flex-col">
                                        <div className="bg-background rounded-xl h-full overflow-hidden flex-1 flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            BẢN ĐỒ (MAP)
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 rounded-xl p-4 flex-[3] flex flex-col">
                                        <div className="bg-background rounded-xl p-4 h-full overflow-auto flex-1 flex items-center justify-center text-center font-semibold text-muted-foreground">
                                            THÔNG TIN TÀI XẾ (DRIVER)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

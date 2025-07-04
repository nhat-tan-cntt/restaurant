import { ChartConfig } from "@/components/ui/chart";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ChartBlock } from "./chart-block";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#F97316",
    },
    mobile: {
        label: "Mobile",
        color: "#fff6e0",
    },
} satisfies ChartConfig

export default function PageInventory() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                <div className="grid lg:col-span-2 gap-4">
                    <div className="grid gap-4 lg:grid-cols-2">
                        <div className="grid lg:grid-cols-2 lg:col-span-2 gap-4 ">
                            <div className="bg-muted/50 rounded-xl min-h-60">
                                <ChartBlock data={chartData} config={chartConfig} />
                            </div>
                            <div className="bg-muted/50 rounded-xl min-h-60">
                                {/* <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                    <BarChart accessibilityLayer data={chartData}>
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip content={<ChartTooltipContent />} />
                                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                    </BarChart>
                                </ChartContainer> */}
                                <ChartBlock data={chartData} config={chartConfig} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
                <div className="md:col-span-3">
                    <div className="bg-muted/50 min-h-[550px] rounded-xl">
                        <div className="container mx-auto py-10">
                            <DataTable columns={columns} data={[]} />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

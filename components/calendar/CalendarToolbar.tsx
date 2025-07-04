'use client'

import { CalendarPlus, ChevronDownIcon } from "lucide-react"
import { Button } from "../ui/button"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

interface CalendarToolbarProps {
    currentDate: string
    view: string
    onViewChange: (view: string) => void
    onAdd: () => void
}

export default function CalendarToolbar({
    currentDate,
    view,
    onViewChange,
    onAdd,
}: CalendarToolbarProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl">
            <div className="text-2xl font-semibold text-muted-foreground">
                {new Date(currentDate).toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                })}
                <ChevronDownIcon className="ml-1 inline size-4 text-muted-foreground" />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <ToggleGroup
                    type="single"
                    value={view}
                    onValueChange={(val) => val && onViewChange(val)}
                >
                    <ToggleGroupItem
                        value="dayGridDay"
                        className="px-4 text-sm data-[state=on]:bg-orange-500 data-[state=on]:text-white"
                    >
                        Day
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="timeGridWeek"
                        className="px-4 text-sm data-[state=on]:bg-orange-500 data-[state=on]:text-white"
                    >
                        Week
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="dayGridMonth"
                        className="px-4 text-sm data-[state=on]:bg-orange-500 data-[state=on]:text-white"
                    >
                        Month
                    </ToggleGroupItem>
                </ToggleGroup>

                <Button onClick={onAdd}>
                    <CalendarPlus />
                    Add Schedule
                </Button>
            </div>
        </div>
    )
}
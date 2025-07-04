'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarToolbar from "./CalendarToolbar";
import { useRef, useState } from "react";
import './FullCalendarCustom.css'
import { Button } from "../ui/button";

interface EventType {
    id: string
    title: string
    start: string
    end: string
    extendedProps: {
        category: string
        attendees: string[]
    }
    classNames: string[]
}

export default function FullCalendarView() {

    const calendarRef = useRef<FullCalendar | null>(null)
    const [view, setView] = useState('dayGridMonth')

    const handleAdd = () => {
        // Open modal, show toast, v.v.
        alert('Add Schedule Clicked!')
    }

    const initialEvents: EventType[] = [
        {
            id: "1",
            title: "Weekly Specials Review",
            start: "2025-07-07T15:00:00",
            end: "2025-07-07T16:00:00",
            extendedProps: {
                category: "meetings",
                attendees: [
                    "https://i.pravatar.cc/40?u=1",
                    "https://i.pravatar.cc/40?u=2",
                    "https://i.pravatar.cc/40?u=3",
                ],
            },
            classNames: ["event-meeting"],
        },
        {
            id: "2",
            title: "Seasonal Menu Update",
            start: "2025-07-08T11:00:00",
            end: "2025-07-08T12:30:00",
            extendedProps: {
                category: "menu",
                attendees: ["https://i.pravatar.cc/40?u=4"],
            },
            classNames: ["event-menu"],
        },
        {
            id: "3",
            title: "Inventory Check",
            start: "2025-07-09T09:00:00",
            end: "2025-07-09T10:00:00",
            extendedProps: {
                category: "inventory",
                attendees: ["https://i.pravatar.cc/40?u=5", "https://i.pravatar.cc/40?u=6"],
            },
            classNames: ["event-inventory"],
        },
        {
            id: "4",
            title: "Private Dining Event",
            start: "2025-07-10T19:00:00",
            end: "2025-07-10T22:00:00",
            extendedProps: {
                category: "events",
                attendees: ["https://i.pravatar.cc/40?u=7"],
            },
            classNames: ["event-event"],
        },
    ]

    return (
        <main className="grid grid-flow-row gap-4 p-6">
            <CalendarToolbar
                currentDate={
                    calendarRef.current?.getApi().getDate().toISOString() ?? new Date().toISOString()
                }
                view={view}
                onViewChange={(v) => {
                    setView(v)
                    calendarRef.current?.getApi().changeView(v)
                }}
                onAdd={handleAdd}
            />
            <div className="grid grid-flow-row gap-4 border rounded-t-lg bg-[#ffffff] dark:bg-[#1e1e1e]">
                <div className="flex flex-wrap gap-2 pt-4 px-4">
                    <Button variant={"secondary"}>
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        Meetings
                    </Button>
                    <Button variant={"secondary"}>
                        <span className="h-2 w-2 rounded-full bg-orange-200" />
                        Menu Updates
                    </Button>
                    <Button variant={"secondary"}>
                        <span className="h-2 w-2 rounded-full bg-orange-100" />
                        Inventory Checks
                    </Button>
                    <Button variant={"secondary"}>
                        <span className="h-2 w-2 rounded-full bg-neutral-800" />
                        Events
                    </Button>
                </div>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={false}
                    nowIndicator={true}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    events={initialEvents}
                    // eventContent={({ event }) => {
                    //     const attendees = event.extendedProps.attendees || []

                    //     const formatTime = (dateStr: string) =>
                    //         new Date(dateStr).toLocaleTimeString("en-US", {
                    //             hour: "2-digit",
                    //             minute: "2-digit",
                    //             hour12: true,
                    //         }).replace(" ", "")

                    //     const startTime = formatTime(event.startStr)
                    //     const endTime = formatTime(event.endStr)

                    //     return (
                    //         <div className="flex h-full min-h-[60px] flex-col justify-between rounded-md p-2">
                    //             <div>
                    //                 <h2 className="text-sm font-medium leading-snug">{event.title}</h2>
                    //                 <div className="opacity-80">{startTime} – {endTime}</div>
                    //             </div>
                    //             <div className="mt-1 flex items-center space-x-1 pt-1">
                    //                 {attendees.slice(0, 2).map((url: string, idx: number) => (
                    //                     <img
                    //                         key={idx}
                    //                         src={url}
                    //                         className="h-5 w-5 rounded-full object-cover"
                    //                         alt={`Attendee ${idx + 1}`}
                    //                     />
                    //                 ))}
                    //                 {attendees.length > 2 && (
                    //                     <span className="text-xs">+{attendees.length - 2} others</span>
                    //                 )}
                    //             </div>
                    //         </div>
                    //     )
                    // }}
                />
            </div>
        </main>
    )
}
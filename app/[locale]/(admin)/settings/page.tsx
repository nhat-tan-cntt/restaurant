"use client";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export default function SettingsPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <LanguageSwitcher />
        </div>
    );
}

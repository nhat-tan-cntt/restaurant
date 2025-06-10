"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { SwitchTheme } from "./switch-theme";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !theme) return null;
    function ChangeTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <SwitchTheme
                id="focus-mode"
                checked={theme === "light" ? false : true}
                onCheckedChange={ChangeTheme}
                checkedIcon={<Moon size={12} />}
                uncheckedIcon={<Sun size={12} />}
            />
        </div>
    );
}

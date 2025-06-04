import { useEffect, useState } from "react"

export function DarkModeToggle() {
    const [dark, setDark] = useState(
        () => window.matchMedia?.('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [dark])

    return (
        <button
            className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700 dark:text-white text-slate-900"
            onClick={() => setDark(d => !d)}
        >
            {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
    )
}

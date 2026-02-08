import Link from "next/link"
import { APP_STORE_URL } from "@/app/data"

export function AppStoreButton() {
    return (
        <Link
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
        >
            <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-[50px] w-auto"
            />
        </Link>
    )
}

import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "My hobby",
    viewport: "width=device-width,initial-scale=1",
    description: "A page about my hobbies! By Luke Papaoikonomou",
});

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap",
        },
    ];
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

"use client";
// client 에서 interactive하게 동작하도록 해줌 => react component가 되도록 만들어줌.
// hydrate 된다는 의미. client에서 render 된다는 의미가 아니다.

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "👀" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "👀" : ""}
                </li>
            </ul>
        </nav>
    );
}

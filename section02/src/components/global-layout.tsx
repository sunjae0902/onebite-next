import { ReactNode } from "react";
import Link from "next/link";
import style from './global-layout.module.css';

export default function GlobalLayout({ // props 객체 내부에 ReactNode 객체를 넘김.
    children,  
}: {
    children: ReactNode;
}) {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <Link href={"/"}>📚 ONEBITE BOOKS</Link>
            </header>
            <main className={style.main}>{children}</main>
            <footer className={style.footer}>제작 @sunjaenation</footer>
        </div>
    );
}

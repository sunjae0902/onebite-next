"use client";

import ServerComponent from "@/app/(with-searchbar)/server-component";
import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode; }) {
    console.log("client component!")
    return (
        children // 자동으로 클라이언트 컴포넌트로 실행됨 -> 되도록 임포트 하지말고 children props로 불러올 것(근데 함수면 불가)
    );
}
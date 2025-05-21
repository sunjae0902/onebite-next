"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./serachbar.module.css";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        router.push(`/search?q=${search}`);
    }

    return (
        <div className={style.container}>
            <input value={search} onChange={onChangeSearch}/>
            <button onClick={onSubmit}>검색</button>
        </div>
    );
}
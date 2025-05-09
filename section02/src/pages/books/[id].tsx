import style from './[id].module.css';
import {GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBookItem from "@/lib/main/content/fetch-book-item";
import Head from 'next/head';


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const bookItem = await fetchBookItem(Number(context.params!.id));
    return {
        props: {
            bookItem
        }
    }
}

export default function Page({bookItem} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    
    if (!bookItem) {
        return "문제가 발생했습니다. 다시 시도해주세요.";
    }

    return (
        <>
            <Head>
                <title>{bookItem.title}</title>
                <meta property="og:image" content={bookItem.coverImgUrl}></meta>
                <meta property="og:title" content={bookItem.title}></meta>
                <meta property='og:description' content={bookItem.description}></meta>
            </Head>
        <div className={style.container}>
            <div className = {style.cover_img_container} style={{ backgroundImage: `url('${bookItem.coverImgUrl}')` }}>
                <img src={bookItem.coverImgUrl} />
            </div>
            <div>
                <div className={style.title}>{bookItem.title}</div>
                <div className={style.subTitle}>{bookItem.subTitle}</div>
                <div className={style.author}>{bookItem.author} | {bookItem.publisher}</div>
            </div>
            <div className={style.description}>{bookItem.description}</div>
            </div>
            </>
    );
}
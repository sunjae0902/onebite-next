import SearchableLayout from "@/components/search/searchable-layout";
import { useRouter } from "next/router"; // 쿼리 파라미터 불러오기 위한 훅
import { ReactNode } from "react";
import BookItem from "@/components/books/boot-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/main/fetch-books";
import Head from "next/head";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const searchedBookList = await fetchBooks(context.query.q as string);

    return {
        props: {
            searchedBookList
        }
    }
}

export default function SearchPage({searchedBookList} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    console.log(router); // 라우터 객체 정보 출력 (2번 렌더링 되므로 2번 출력됨)
    // const { q } = router.query; // router.query 객체 안에 'q'를 추출해서 담음. const q = router.query.q 와 같음
    return (
        <>
            <Head>
                <title>한입북스 - 검색 결과</title>
                <meta property="og:image" content="/thumbnail.png"></meta>
                <meta property="og:title" content="한입북스 - 검색 결과"></meta>
                <meta property='og:description' content='한입 북스에 등록된 도서들을 만나보세요.'></meta>
            </Head>
        <div>
            {searchedBookList.map((book) => <BookItem key={book.id} {...book} />)}
            </div>
            </>
    );
}

SearchPage.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};

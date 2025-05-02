import SearchableLayout from '@/components/search/searchable-layout';
import style from './index.module.css';
import { ReactNode} from 'react';
import BookItem from '@/components/books/boot-item';
import {InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/main/fetch-books';
import fetchRandomBooks from '@/lib/main/fetch-random-books';
import Head from 'next/head';

export const getStaticProps = async () => { 
  const [bookList, recommendedBookList] = await Promise.all([ 
    fetchBooks(),
    fetchRandomBooks()
  ]);

  return {
    props: {
      bookList,
      recommendedBookList
    },
    revalidate: 3 
  };
};

export default function Home({ bookList, recommendedBookList }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumnail.png"></meta>
        <meta property="og:title" content="한입북스"></meta>
        <meta property='og:description' content='한입 북스에 등록된 도서들을 만나보세요.'></meta>
      </Head>
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recommendedBookList.map((book) => <BookItem key = {book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {bookList.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
      </div>
      </>
  );
}

Home.getLayout = (page: ReactNode) => { 
  return <SearchableLayout>{page}</SearchableLayout>;
};

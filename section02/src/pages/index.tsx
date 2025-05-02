import SearchableLayout from '@/components/search/searchable-layout';
import style from './index.module.css';
import { ReactNode} from 'react';
import BookItem from '@/components/books/boot-item';
import {InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/main/fetch-books';
import fetchRandomBooks from '@/lib/main/fetch-random-books';


export const getStaticProps = async () => { 
  const [bookList, recommendedBookList] = await Promise.all([ // 여러 비동기 함수 동시에 호출!!
    fetchBooks(),
    fetchRandomBooks()
  ]);

  return {
    props: {
      bookList,
      recommendedBookList
    },
    revalidate: 3 // ISR
  };
};

export default function Home({ bookList, recommendedBookList }: InferGetStaticPropsType<typeof getStaticProps>) { // 메서드에서 props 받아옴
  return (
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
  );
}

Home.getLayout = (page: ReactNode) => { // 객체에 메서드 추가
  return <SearchableLayout>{page}</SearchableLayout>;
};

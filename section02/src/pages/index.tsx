import SearchableLayout from '@/components/search/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/books/boot-item';

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem key = {book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => { // 객체에 메서드 추가
  return <SearchableLayout>{page}</SearchableLayout>;
};

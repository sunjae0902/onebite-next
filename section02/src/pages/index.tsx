import SearchableLayout from '@/components/search/searchable-layout';
import style from './index.module.css';
import { ReactNode, useEffect } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/books/boot-item';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = () => { // SSR
  // 접속 요청 시, 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 가져오는 함수 -> 서버 측에서 한 번만 실행됨
  const data = "hello";
  console.log("서버 환경에서만 실행됨");
  return {
    props: {data} // 반드시 props를 포함하는 객체를 리턴해야 함
  };

};

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) { // 메서드에서 props 받아옴
  console.log(data);

  useEffect(() => { // 브라우저에서만 렌더링 될 때마다 실행됨
    console.log(window);
  });

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

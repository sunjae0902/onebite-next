import styles from "./page.module.css";
import books from "../../ mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() { // 기본적으로 서버 컴포넌트로 설정되므로 브라우저에서는 실행되지 않음!
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem  key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem  key={book.id} {...book}/>)}
      </section>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() { // 기본적으로 서버 컴포넌트로 설정되므로 브라우저에서는 실행되지 않음!
  return (
    <div className={styles.page}>
      인덱스 페이지
    </div>
  );
}

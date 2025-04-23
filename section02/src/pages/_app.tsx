import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link"; // 네비게이팅
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/test'); // replace, back 등 지원
  };

  useEffect(() => { // programatic 네비게이팅에서 프리페칭 사용
    router.prefetch('/test')
  }, [])

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> 
        &nbsp;
        <Link href={"/search"} prefetch={false}>search</Link>  {/* // 명시적으로 prefetch 해제 */}
        &nbsp;
        <Link href={"/books/1"}>books/1</Link>
        <div>
          <button onClick={onClickButton}>test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

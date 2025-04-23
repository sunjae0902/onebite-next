import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link"; // 네비게이팅
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/search'); // replace, back 등 지원
  };

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> 
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/books/1"}>books/1</Link>
        <div>
          <button onClick={onClickButton}>search 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

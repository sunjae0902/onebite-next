import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router" // 쿼리 파라미터 불러오기 위한 훅
import { ReactNode } from "react";

export default function SearchPage() {

    const router = useRouter();
    console.log(router); // 라우터 객체 정보 출력 (2번 렌더링 되므로 2번 출력됨)
    const {q} = router.query; // router.query 객체 안에 'q'를 추출해서 담음. const q = router.query.q 와 같음
    return <h1>Search {q}</h1>
}

SearchPage.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}

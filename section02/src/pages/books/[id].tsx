import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { id } = router.query; // 대괄호 내부의 이름으로 들어감. [id]
    return <h1>Book {id}</h1>;
}
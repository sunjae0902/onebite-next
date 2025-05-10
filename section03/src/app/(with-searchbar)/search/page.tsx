export default async function Page({ // 서버컴포넌트에서는 async 붙일 수 있음
  searchParams, // 구조 분해 -> props에서 꺼내옴
}: {
  searchParams: Promise<{ q: string }>; // 변수 명과 타입 지정
}) {
  const { q } = await searchParams; // 구조 분해 할당
  return <div>{q}</div>;
}

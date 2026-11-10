import LinkCard from "@/components/LinkCard";

// 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "박민규",
  bio: "취미 개발자 \\ 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.png",
};

const links = [
  { title: "🐙 GitHub", url: "https://github.com/m0824park-creator" },
  { title: "✍️ 블로그", url: "https://blog.naver.com/minggyo_" },
  { title: "📮 이메일", url: "mailto:m0824.park@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-16">
      {/* 원형 프로필 사진 */}
      {/* eslint-disable-next-line @next/next/no-img-element -- 로컬 정적 이미지라 next/image 생략 */}
      <img
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={150}
        height={150}
        className="h-36 w-36 rounded-full object-cover shadow-[0_16px_32px_-8px_rgba(120,70,40,0.4)] ring-4 ring-white/80 dark:ring-white/20"
      />

      {/* 이름 / 한 줄 소개 */}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-center text-sm leading-relaxed opacity-70">
        {profile.bio}
      </p>

      {/* 링크 카드 목록 */}
      <ul className="mt-12 flex w-full flex-col gap-5">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

import LinkCard from "@/components/LinkCard";

// 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-5 py-12">
      {/* 원형 프로필 사진 (더미: 이니셜) */}
      <div
        role="img"
        aria-label={`${profile.name} 프로필 사진`}
        className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-gradient-to-br from-emerald-300 to-sky-400 text-6xl font-bold text-white dark:border-gray-600"
      >
        {profile.name.charAt(0)}
      </div>

      {/* 이름 / 한 줄 소개 */}
      <h1 className="mt-5 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {profile.bio}
      </p>

      {/* 링크 카드 목록 */}
      <ul className="mt-10 flex w-full flex-col gap-6">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

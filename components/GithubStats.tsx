export default function GithubStats() {
  const username = "Augustu-tech";

  return (
    <section className="mt-20 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">
        GitHub Activity
      </h2>

      {/* Top Row */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

        {/* Stats */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
          className="rounded-xl"
        />

        {/* Languages */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
          alt="Top Languages"
          className="rounded-xl"
        />

      </div>

      {/* 🔥 STREAK (PLACE HERE) */}
      <div className="mt-6 flex justify-center">
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight`}
          alt="GitHub Streak"
          className="rounded-xl"
        />
      </div>

    </section>
  );
}
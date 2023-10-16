import localFont from "next/font/local";

const jobs = [
  {
    title: "Senior Rust Engineer (Systems)",
    company: "Firezone",
    url: "https://www.workatastartup.com/jobs/51981",
  },
  {
    title: "Experienced Rust/AI Developer",
    company: "Instant Domains",
    url: "https://www.workatastartup.com/jobs/52868",
  },
  {
    title: "Senior Rust Developer",
    company: "GitButler",
    url: "https://gitbutler.homerun.co/senior-rust-developer/en",
  },
  {
    title: "Senior Software Engineer",
    company: "Cloudflare",
    url: "https://boards.greenhouse.io/cloudflare/jobs/5074114?gh_jid=5074114",
  },
  {
    title: "Software Engineer (Rust/TypeScript)",
    company: "Deno",
    url: "https://jobs.ashbyhq.com/Deno/21fe2085-a213-4ac5-ad44-516242335ee8",
  },
  {
    title: "Senior Software Engineer",
    company: "Lincoln Laboratory at MIT",
    url: "https://careers.ll.mit.edu/job/Lexington-Sr_-Software-Engineer-Rust-MA-02420/1073614600/",
  },
  {
    title: "Software Engineer - Static Analysis Engine",
    company: "Datadog",
    url: "https://careers.datadoghq.com/detail/5382867",
  },
];

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const ppNeueMontrealMono = localFont({
  src: "../public/fonts/PPNeueMontrealMono-Bold.otf",
  variable: "--font-pp-neue-montreal-mono",
});

export default function Home() {
  shuffle(jobs);
  return (
    <div className="bg-[#1c1c1c] h-screen">
      <main className="w-full flex flex-col text-white items-center ">
        <div className="max-w-xl pt-10">
          <h1 className={`${ppNeueMontrealMono.variable} text-4xl py-5`}>
            Rust Jobs
          </h1>
          <p>Jobs working with the Rust programming language. No crypto.</p>
          <p>
            To add or remove a job,{" "}
            <a
              href="https://github.com/NicholasLYang/rustjobs.fyi/pulls"
              className="underline decoration-red-400"
            >
              open a pull request.
            </a>
          </p>
          <ul className="pt-10">
            {jobs.map(({ title, company, url }) => (
              <li key={url}>
                <a href={url} className="text-white">
                  {title} at <span className="text-red-300">{company}</span>
                </a>
                <hr className="pb-5"></hr>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

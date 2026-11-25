import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import LocalTime from "@/components/LocalTime";
import { demos, principles, site } from "@/lib/data";

const facts = [
  { label: "Now", value: "Co-founder, Sabi & Genpay" },
  { label: "Studying", value: "Computer Science, Bowen University '27" },
  { label: "Community", value: "CS Commissioner, NACOS Bowen" },
];

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-ink-soft"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-14 sm:px-8 sm:pt-20">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_260px] md:gap-16">
          <div>
            <p className="hero-kicker label flex items-center gap-2.5">
              <span aria-hidden="true" className="status-dot" />
              Open to internships &amp; freelance work
            </p>
            <h1 className="hero-title mt-6 text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
              Tolulope Adegoke
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-xl leading-snug text-ink-soft sm:text-2xl">
              I build web and mobile products from the first idea to software
              people actually use. Right now that&rsquo;s{" "}
              <Link href="/work/sabi" className="focus-ring rounded-sm text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-accent">
                Sabi
              </Link>
              , an AI exam-prep platform with 141 students, and Genpay, a
              ticketing platform for events.
            </p>
            <div className="hero-copy mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary focus-ring">
                Email me
              </a>
              <a href="#work" className="btn btn-secondary focus-ring">
                See my work
              </a>
              <span className="ml-1 flex gap-4 text-sm text-ink-soft">
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="nav-link focus-ring rounded-sm hover:text-ink">
                  GitHub
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link focus-ring rounded-sm hover:text-ink">
                  LinkedIn
                </a>
              </span>
            </div>
          </div>

          <figure className="hero-portrait-wrap mx-auto w-full max-w-[260px] md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-dim">
              <Image
                src="/images/tolulope-profile.jpeg"
                alt="Tolulope Adegoke"
                fill
                priority
                className="object-cover object-[52%_center]"
                sizes="(min-width: 768px) 260px, 70vw"
              />
            </div>
            <figcaption className="label mt-3 flex justify-between">
              <span>Ibadan, Nigeria</span>
              <LocalTime />
            </figcaption>
          </figure>
        </div>

        <dl className="hero-copy mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="label">{f.label}</dt>
              <dd className="mt-1.5 text-[0.95rem]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Work */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="scroll-mt-6 border-t border-line bg-paper-dim/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 id="work-heading" className="text-3xl font-semibold sm:text-4xl">
                Selected work
              </h2>
              <p className="label hidden sm:block">2026 · Web &amp; mobile</p>
            </div>
          </Reveal>

          {/* Sabi: featured */}
          <Reveal className="mt-10">
            <Link
              href="/work/sabi"
              className="project-card focus-ring group grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="flex flex-col p-7 sm:p-9">
                <p className="label">01 · Co-founder, Product &amp; Engineering · 2026</p>
                <h3 className="mt-4 text-4xl font-semibold">Sabi</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  AI-powered JAMB and WAEC exam prep for Nigerian students. An
                  AI tutor explains every wrong answer, and a dashboard shows
                  which topics are holding a score back.
                </p>
                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="text-3xl font-semibold tracking-tight">141</dt>
                    <dd className="mt-1 text-sm text-ink-soft">students signed up</dd>
                  </div>
                  <div>
                    <dt className="text-3xl font-semibold tracking-tight">₦0</dt>
                    <dd className="mt-1 text-sm text-ink-soft">spent on acquisition</dd>
                  </div>
                </dl>
                <div className="mt-7">
                  <Tags items={["Next.js", "Supabase", "AI", "Paystack"]} />
                </div>
                <span className="project-link mt-auto pt-8 text-sm font-medium text-accent">
                  Read the case study <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="relative min-h-[260px] overflow-hidden bg-accent-soft/60 p-6 sm:p-10 lg:pr-0">
                <div className="shot-frame overflow-hidden rounded-lg border border-line bg-paper shadow-[0_24px_60px_-30px_rgba(18,20,18,.35)] lg:rounded-r-none">
                  <Image
                    src="/images/sabi-landing.png"
                    alt="Sabi landing page, headline: You go sabi this exam."
                    width={3072}
                    height={1536}
                    priority
                    className="shot-image h-auto w-full"
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Sonix */}
            <Reveal delay={60}>
              <Link
                href="/work/sonix"
                className="project-card focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper"
              >
                <div className="flex justify-center overflow-hidden bg-ink px-6 pt-8">
                  <div className="w-[190px] overflow-hidden rounded-t-[1.6rem] border-x-[6px] border-t-[6px] border-[#2a2c2a]">
                    <Image
                      src="/images/sonix-home.jpeg"
                      alt="Sonix home screen showing featured playlists and trending tracks"
                      width={540}
                      height={1170}
                      className="shot-image -mb-[38%] h-auto w-full"
                      sizes="190px"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="label">02 · Personal project · 2026</p>
                  <h3 className="mt-3 text-2xl font-semibold">Sonix</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    A cross-platform Flutter music player, built to learn mobile
                    development end to end: browsing, search and playback
                    through the Deezer API.
                  </p>
                  <div className="mt-5">
                    <Tags items={["Flutter", "Dart", "Deezer API"]} />
                  </div>
                  <span className="project-link mt-auto pt-6 text-sm font-medium text-accent">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Genpay */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                <div className="relative flex min-h-[220px] flex-1 items-end overflow-hidden bg-accent p-7 text-paper">
                  <svg aria-hidden="true" className="absolute -right-10 -top-10 h-64 w-64 opacity-[0.12]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="14">
                    <rect x="20" y="50" width="160" height="100" rx="18" />
                    <path d="M120 50v100" strokeDasharray="10 10" />
                  </svg>
                  <p className="relative max-w-[16ch] text-3xl font-semibold leading-tight tracking-tight">
                    Tickets and merch for events, in one place.
                  </p>
                </div>
                <div className="flex flex-col p-7">
                  <p className="label">03 · Co-founder &amp; Software Engineer · In progress</p>
                  <h3 className="mt-3 text-2xl font-semibold">Genpay</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    An event ticketing and merchandise platform. I build the
                    Flutter mobile app and the Next.js web dashboard, with
                    Supabase and Paystack behind it.
                  </p>
                  <div className="mt-5">
                    <Tags items={["Flutter", "Next.js", "Supabase", "Paystack"]} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Websites */}
      <section
        id="websites"
        aria-labelledby="websites-heading"
        className="mx-auto max-w-6xl scroll-mt-6 px-6 py-20 sm:px-8 sm:py-24"
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="label">Freelance</p>
              <h2 id="websites-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
                Websites for small businesses
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-ink-soft md:justify-self-end">
              Fast, mobile-first sites for cafes, shops and creatives. Each of
              these demos has its own look and real features, not just a
              pretty homepage.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {demos.map((demo, i) => (
            <li key={demo.name}>
              <Reveal delay={i * 60}>
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card focus-ring group block overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div className="overflow-hidden bg-paper-dim">
                    <Image
                      src={demo.image}
                      alt={demo.alt}
                      width={demo.width}
                      height={demo.height}
                      className="shot-image aspect-[4/3] h-auto w-full object-cover"
                      sizes="(min-width: 768px) 360px, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="label">{demo.kind}</p>
                    <h3 className="mt-2 text-xl font-semibold">{demo.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{demo.blurb}</p>
                    <span className="project-link mt-4 inline-block text-sm font-medium text-accent">
                      Open the live demo <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="text-lg">
              Need a website for your business?{" "}
              <span className="text-ink-soft">Tell me what you sell and who it&rsquo;s for.</span>
            </p>
            <a
              href={`mailto:${site.email}?subject=Website%20project`}
              className="btn btn-primary focus-ring shrink-0 self-start sm:self-auto"
            >
              Start a project
            </a>
          </div>
        </Reveal>
      </section>

      {/* How I work */}
      <section aria-labelledby="principles-heading" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-24 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="label">How I work</p>
            <h2 id="principles-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
              Lessons from building with real users
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
              I&rsquo;m early in my career, but I&rsquo;ve shipped products
              people use and pay for. These are the habits that came out of it.
            </p>
            <Link
              href="/about"
              className="project-link focus-ring mt-6 inline-block rounded-sm text-sm font-medium text-accent"
            >
              More about me <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 60}>
                  <div className="border-t-2 border-ink pt-4">
                    <span className="font-mono text-xs text-ink-soft">0{i + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

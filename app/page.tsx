import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import LocalTime from "@/components/LocalTime";
import Stickers from "@/components/Stickers";
import { demos, principles, site } from "@/lib/data";

const facts = [
  { label: "Now", value: "Chief Product Officer & Co-founder, Sabi" },
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

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 12" preserveAspectRatio="none" className={`h-3 ${className}`} fill="none">
      <path
        d="M2 8 C 12 2, 22 2, 32 7 S 52 12, 62 6 S 82 1, 92 6 S 110 11, 118 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const offTheClock = [
  { emoji: "🎧", title: "Music", body: "Something is always playing while I build." },
  { emoji: "🏀", title: "Basketball", body: "Watching it, and arguing about it after." },
  { emoji: "🚗", title: "Cars", body: "Will absolutely slow down to look at a nice one." },
];

const noteTilt = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-14 sm:px-8 sm:pt-20">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_260px] md:gap-16">
          <div>
            <h1 className="hero-title text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
              Hi, I&rsquo;m Tolu{" "}
              <span aria-hidden="true" className="wave">👋</span>
              <span className="sr-only">, short for Tolulope Adegoke.</span>
            </h1>
            <p aria-hidden="true" className="hero-kicker note mt-3 -rotate-2 text-2xl sm:text-[1.7rem]">
              (Tolulope Adegoke Samuel, if we&rsquo;re being formal)
            </p>
            <p className="hero-copy mt-6 max-w-2xl text-xl leading-snug text-ink-soft sm:text-2xl">
              I build web and mobile products from the first idea to software
              people actually use. Right now that&rsquo;s{" "}
              <Link href="/work/sabi" className="focus-ring rounded-sm text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-accent">
                Sabi
              </Link>
              , an AI exam-prep platform used by 500+ students.
            </p>
            <div className="hero-copy mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary focus-ring">
                Email me
              </a>
              <a href={site.cv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring">
                View my CV
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

          <figure className="hero-portrait-wrap mx-auto w-full max-w-[250px] md:mx-0">
            <div className="relative">
              <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-2xl border-[1.5px] border-ink bg-paper-dim shadow-[6px_6px_0_var(--ink)]">
                <Image
                  src="/images/tolulope-profile.jpeg"
                  alt="Tolulope Adegoke"
                  fill
                  priority
                  className="object-cover object-[52%_center]"
                  sizes="(min-width: 768px) 250px, 70vw"
                />
              </div>
              <Stickers />
            </div>
            <figcaption className="note mt-7 text-center text-xl">
              psst, the stickers move ↑
              <span className="mt-1 block text-base text-ink-soft">
                it&rsquo;s <LocalTime /> in Ibadan right now
              </span>
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
                Selected{" "}
                <span className="relative inline-block">
                  work
                  <Squiggle className="absolute -bottom-3 left-0 w-full text-pop" />
                </span>
              </h2>
              <p aria-hidden="true" className="note hidden rotate-[-3deg] text-2xl sm:block">
                start with this one ↓
              </p>
            </div>
          </Reveal>

          {/* Sabi: featured */}
          <Reveal className="mt-10">
            <article className="project-card group relative grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex flex-col p-7 sm:p-9">
                <p className="label">01 · Chief Product Officer &amp; Co-founder · 2026</p>
                <h3 className="mt-4 text-4xl font-semibold">Sabi</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  AI-powered JAMB and WAEC exam prep for Nigerian students. An
                  AI tutor explains every wrong answer, and a dashboard shows
                  which topics are holding a score back.
                </p>
                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="text-3xl font-semibold tracking-tight">500+</dt>
                    <dd className="mt-1 text-sm text-ink-soft">students signed up</dd>
                  </div>
                  <div>
                    <dt className="text-3xl font-semibold tracking-tight">2 exams</dt>
                    <dd className="mt-1 text-sm text-ink-soft">JAMB &amp; WAEC covered</dd>
                  </div>
                </dl>
                <div className="mt-7">
                  <Tags items={["Next.js", "Supabase", "AI", "Paystack"]} />
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  {/* The case-study link stretches over the whole card */}
                  <Link
                    href="/work/sabi"
                    className="project-link btn btn-primary focus-ring after:absolute after:inset-0 after:content-['']"
                  >
                    Read the case study <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href={site.sabi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary focus-ring relative z-10 bg-paper"
                  >
                    Try Sabi live <span aria-hidden="true">↗</span>
                  </a>
                </div>
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
            </article>
          </Reveal>

          {/* Sonix */}
          <Reveal className="mt-6">
            <Link
              href="/work/sonix"
              className="project-card focus-ring group grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="flex flex-col p-7 sm:p-9">
                <p className="label">02 · Personal project · 2026</p>
                <h3 className="mt-4 text-4xl font-semibold">Sonix</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  A cross-platform Flutter music player, built to learn mobile
                  development end to end. Search, charts and 30-second previews
                  through the Deezer API, plus a full-screen player, mini
                  player and a saved library.
                </p>
                <div className="mt-7">
                  <Tags items={["Flutter", "Dart", "Deezer API"]} />
                </div>
                <span className="project-link mt-auto pt-8 text-sm font-medium text-accent">
                  Read the case study <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="flex items-end justify-center gap-4 overflow-hidden bg-ink px-6 pt-10 sm:gap-6">
                {[
                  { src: "/images/sonix-search.jpeg", alt: "Sonix search screen", cls: "hidden translate-y-8 sm:block" },
                  { src: "/images/sonix-home.jpeg", alt: "Sonix home screen showing featured playlists and trending tracks", cls: "" },
                  { src: "/images/sonix-player.jpeg", alt: "Sonix full-screen player", cls: "hidden translate-y-8 sm:block" },
                ].map((shot) => (
                  <div
                    key={shot.src}
                    className={`w-[150px] shrink-0 overflow-hidden rounded-t-[1.4rem] border-x-[5px] border-t-[5px] border-[#2a2d35] sm:w-[170px] ${shot.cls}`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={540}
                      height={1170}
                      className="shot-image -mb-[30%] h-auto w-full"
                      sizes="170px"
                    />
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
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
              <p aria-hidden="true" className="note mt-2 rotate-[-2deg] text-xl">
                go on, open one on your phone
              </p>
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
                  className={`project-card tilt ${["tilt-l", "tilt-0", "tilt-r"][i % 3]} focus-ring group block overflow-hidden rounded-2xl border border-line bg-paper p-3 pb-0`}
                >
                  <div className="overflow-hidden rounded-lg bg-paper-dim">
                    <Image
                      src={demo.image}
                      alt={demo.alt}
                      width={demo.width}
                      height={demo.height}
                      className="shot-image aspect-[4/3] h-auto w-full object-cover"
                      sizes="(min-width: 768px) 360px, 100vw"
                    />
                  </div>
                  <div className="px-3 pb-6 pt-5">
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
          <ol className="grid gap-x-8 gap-y-10 pt-3 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 60}>
                  <div className={`sticky-note ${noteTilt[i % noteTilt.length]}`}>
                    <span className="note text-2xl">#{i + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Off the clock */}
      <section aria-labelledby="offclock-heading" className="border-t border-line bg-paper-dim/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="label">Off the clock</p>
            <h2 id="offclock-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
              When I&rsquo;m not shipping
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {offTheClock.map((x, i) => (
              <li key={x.title}>
                <Reveal delay={i * 60}>
                  <div className="group flex items-start gap-4 rounded-2xl border-[1.5px] border-ink bg-paper p-6 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1">
                    <span aria-hidden="true" className="text-4xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                      {x.emoji}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{x.title}</h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{x.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

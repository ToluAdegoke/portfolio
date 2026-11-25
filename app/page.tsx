import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import LocalTime from "@/components/LocalTime";
import Stickers from "@/components/Stickers";
import { demos, included, services, site, steps } from "@/lib/data";

const projectMail = `mailto:${site.email}?subject=${encodeURIComponent("Website project")}`;

const facts = [
  { label: "I build", value: "Business websites, online stores & portfolios" },
  { label: "Based in", value: "Ibadan, working with clients anywhere" },
  { label: "Also built", value: "Sabi, an app used by a lot of Nigerian students" },
];

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

// Hand-drawn double-loop arrow that keeps drawing itself in.
function SwirlArrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 80" fill="none" className={`swirl ${className}`}>
      <g>
        <path
          className="swirl-line"
          pathLength={1}
          d="M4 30 C 40 18, 84 24, 78 38 C 73 48, 34 47, 40 37 C 46 28, 90 34, 82 48 C 76 58, 36 57, 42 47 C 48 38, 74 50, 64 64 C 61 68, 60 72, 59 75"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className="swirl-head"
          pathLength={1}
          d="M50 68 L59 78 L68 68"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
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
              <span className="sr-only">, short for Tolulope Adegoke. I build websites for businesses.</span>
            </h1>
            <p aria-hidden="true" className="hero-kicker note mt-3 -rotate-2 text-2xl sm:text-[1.7rem]">
              (Tolulope Adegoke Samuel, if we&rsquo;re being formal)
            </p>
            <p className="hero-copy mt-6 max-w-2xl text-xl leading-snug text-ink-soft sm:text-2xl">
              I design and build websites for cafes, shops, photographers and
              brands. Sites that look great on a phone, load fast, and make it
              easy for customers to find you, order or get in touch.
            </p>
            <div className="hero-copy mt-9 flex flex-wrap items-center gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href={projectMail} className="btn btn-secondary focus-ring">
                Email me
              </a>
              <a href="#websites" className="nav-link focus-ring ml-1 rounded-sm text-sm text-ink-soft hover:text-ink">
                See my websites ↓
              </a>
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

      {/* Websites */}
      <section
        id="websites"
        aria-labelledby="websites-heading"
        className="scroll-mt-20 border-t border-line bg-paper-dim/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 id="websites-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Sites I&rsquo;ve{" "}
                  <span className="relative inline-block">
                    built
                  </span>
                </h2>
              </div>
              <p aria-hidden="true" className="note relative rotate-[-3deg] pr-20 text-2xl">
                go on, open one on your phone
                <SwirlArrow className="absolute -right-4 -top-6 h-[75px] w-24 text-accent" />
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 space-y-8">
            {demos.map((demo, i) => (
              <li key={demo.name}>
                <Reveal>
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card focus-ring group grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-[0.8fr_1.2fr]"
                  >
                    <div className={`flex flex-col p-7 sm:p-9 ${i % 2 ? "lg:order-2" : ""}`}>
                      <p className="label">
                        0{i + 1} · {demo.kind}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold">{demo.name}</h3>
                      <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">{demo.blurb}</p>
                      <span className="project-link mt-auto pt-8 text-sm font-medium text-accent">
                        Open the live site <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                    <div className="relative overflow-hidden bg-accent-soft/60 px-6 pt-8 sm:px-10 sm:pt-10">
                      {/* Browser window */}
                      <div className="shot-frame overflow-hidden rounded-t-lg border border-b-0 border-line bg-paper shadow-[0_24px_60px_-30px_rgba(11,13,18,.35)]">
                        <div aria-hidden="true" className="flex gap-1.5 border-b border-line px-3 py-2.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-line" />
                          <span className="h-2.5 w-2.5 rounded-full bg-line" />
                          <span className="h-2.5 w-2.5 rounded-full bg-line" />
                        </div>
                        <Image
                          src={demo.shot}
                          alt={`${demo.name} website, desktop view`}
                          width={1440}
                          height={900}
                          className="shot-image h-auto w-full"
                          sizes="(min-width: 1024px) 620px, 100vw"
                        />
                      </div>
                      {/* Phone */}
                      <div className="absolute bottom-0 right-5 hidden w-[118px] overflow-hidden rounded-t-[1.3rem] border-x-[5px] border-t-[5px] border-ink bg-ink shadow-[0_20px_40px_-18px_rgba(11,13,18,.6)] sm:right-8 sm:block">
                        <Image
                          src={demo.shotMobile}
                          alt={`${demo.name} website, phone view`}
                          width={390}
                          height={844}
                          className="-mb-[35%] h-auto w-full"
                          sizes="118px"
                        />
                      </div>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24"
      >
        <Reveal>
          <h2 id="services-heading" className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            What I can build for your business
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((x, i) => (
            <li key={x.title}>
              <Reveal delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border-[1.5px] border-ink bg-paper p-7 shadow-[4px_4px_0_var(--ink)]">
                  <h3 className="text-2xl font-semibold">{x.title}</h3>
                  <p className="label mt-2">{x.for}</p>
                  <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{x.body}</p>
                  <p className="note mt-5 text-xl">{x.example}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-8 rounded-2xl bg-ink p-7 text-paper sm:p-9">
            <h3 className="text-xl font-semibold">Every site comes with</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((x) => (
                <li key={x} className="flex gap-3 text-[0.95rem] text-paper/85">
                  <span aria-hidden="true" className="mt-0.5 text-pop">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="scroll-mt-20 border-t border-line"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 id="process-heading" className="text-3xl font-semibold sm:text-4xl">
              From first chat to live site
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-6 gap-y-10 pt-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((p, i) => (
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

          <Reveal>
            <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <p className="text-lg">
                Have a business that needs a website?{" "}
                <span className="text-ink-soft">Tell me what you sell and who it&rsquo;s for.</span>
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href={projectMail} className="btn btn-secondary focus-ring">
                  Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beyond websites */}
      <section aria-labelledby="beyond-heading" className="border-t border-line bg-paper-dim/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 id="beyond-heading" className="max-w-2xl text-3xl font-semibold sm:text-4xl">
              I also build full products
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              So if your site needs logins, payments or a dashboard later,
              you won&rsquo;t need someone new.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                <div className="overflow-hidden bg-accent-soft/60 px-6 pt-6">
                  <Image
                    src="/images/sabi-landing.png"
                    alt="Sabi landing page, headline: You go sabi this exam."
                    width={3072}
                    height={1536}
                    className="shot-image h-auto w-full rounded-t-md border border-b-0 border-line"
                    sizes="(min-width: 768px) 520px, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="label">Co-founder · 500+ students</p>
                  <h3 className="mt-3 text-2xl font-semibold">Sabi</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    AI-powered JAMB and WAEC exam prep, with an AI tutor,
                    mock exams and Paystack subscriptions.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-medium">
                    <Link
                      href="/work/sabi"
                      className="project-link focus-ring rounded-sm text-accent after:absolute after:inset-0 after:content-['']"
                    >
                      Read the case study <span aria-hidden="true">→</span>
                    </Link>
                    <a
                      href={site.sabi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring relative z-10 rounded-sm text-ink-soft underline underline-offset-4 hover:text-ink"
                    >
                      Try it live ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={60} className="h-full">
              <Link
                href="/work/sonix"
                className="project-card focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper"
              >
                <div className="flex justify-center gap-4 overflow-hidden bg-ink px-6 pt-6">
                  {["/images/sonix-home.jpeg", "/images/sonix-player.jpeg"].map((src) => (
                    <div key={src} className="w-[130px] overflow-hidden rounded-t-[1.2rem] border-x-[4px] border-t-[4px] border-[#2a2d35]">
                      <Image
                        src={src}
                        alt=""
                        width={540}
                        height={1170}
                        className="shot-image -mb-[45%] h-auto w-full"
                        sizes="130px"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="label">Mobile app · Flutter</p>
                  <h3 className="mt-3 text-2xl font-semibold">Sonix</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    A cross-platform music player with search, charts and
                    previews through the Deezer API.
                  </p>
                  <span className="project-link mt-auto pt-6 text-sm font-medium text-accent">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Off the clock */}
      <section aria-labelledby="offclock-heading" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 id="offclock-heading" className="text-3xl font-semibold sm:text-4xl">
              When I&rsquo;m not building
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

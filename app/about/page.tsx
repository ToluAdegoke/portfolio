import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Tolulope Adegoke",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="grid items-end gap-8 sm:grid-cols-[1fr_180px]">
        <div>
          <h1 className="hero-title font-display text-4xl leading-tight sm:text-5xl">
            About
          </h1>
        </div>
        <div className="hero-portrait-wrap relative mx-auto aspect-square w-40 overflow-hidden rounded-full border border-line sm:mx-0 sm:w-44">
          <Image
            src="/images/tolulope-profile.jpeg"
            alt="Tolulope Adegoke smiling"
            fill
            priority
            className="object-cover"
            sizes="176px"
          />
        </div>
      </div>

      <Reveal className="mt-10">
      <div className="space-y-6 text-lg leading-relaxed text-ink/90">
        <p>
          I&rsquo;m a Computer Science student at Bowen University in
          Nigeria, expecting to graduate in 2027. Alongside my coursework,
          I co-founded two products that I continue to build: Sabi, an
          AI-powered JAMB and WAEC exam-prep platform, and Genpay, an event
          ticketing and merchandise platform.
        </p>
        <p>
          My work sits across product and engineering; I make product
          decisions, work on frontend implementation, and use AI-assisted
          development to move from idea to working software faster than I
          could otherwise. I&rsquo;ve built both web and mobile projects,
          including Sonix, a Flutter music player I built to learn mobile
          development end to end.
        </p>
        <p>
          At Bowen, I serve as Computer Science Commissioner for the
          Nigeria Association of Computer Science Students (NACOS), where I
          represent the department. I previously served as a student
          representative who coordinated between students and faculty.
        </p>
        <p className="text-ink-soft">
          I&rsquo;m based in Ibadan, Nigeria. Outside of building, I follow
          music, basketball, and cars.
        </p>
      </div>
      </Reveal>

      <Reveal delay={80}>
      <div className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-2xl">Currently</h2>
        <ul className="mt-4 space-y-2 text-ink-soft">
          <li>Chief Product Officer &amp; Co-Founder at Sabi</li>
          <li>Co-Founder &amp; Software Engineer at Genpay</li>
          <li>Computer Science Commissioner, NACOS at Bowen University</li>
        </ul>
      </div>
      </Reveal>
    </div>
  );
}

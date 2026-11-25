import type { Metadata } from "next";
import { DesktopShot } from "@/components/Shot";
import CaseSection from "@/components/CaseSection";
import Callout from "@/components/Callout";
import Stat from "@/components/Stat";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sabi - Tolulope Adegoke",
  description:
    "Case study: Sabi, an AI-powered JAMB/WAEC exam-prep platform built with a co-founder.",
};

export default function SabiCaseStudy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
      <p className="text-sm text-ink-soft">Case study</p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
        Sabi
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        An AI-powered JAMB and WAEC exam-prep platform for Nigerian
        secondary school students. Chief Product Officer &amp; Co-Founder.
      </p>
      <a
        href={site.sabi}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary focus-ring mt-7"
      >
        Try Sabi live at sabiexam.com <span aria-hidden="true">↗</span>
      </a>

      <div className="mt-12">
        <DesktopShot
          src="/images/sabi-landing.png"
          alt="Sabi landing page with the headline 'You go sabi this exam' and the Professor Sabi mascot"
          width={3072}
          height={1536}
          priority
        />
      </div>

      <div className="mt-4">
        <CaseSection index="01" title="The problem">
          <p>
            JAMB and WAEC are the two exams that decide whether Nigerian
            secondary school students get into university. Most students
            prepare with past-question PDFs and group study; they can see
            whether an answer was right or wrong, but rarely get a clear
            explanation of <em>why</em>, or a sense of which topics are
            actually holding their score back.
          </p>
        </CaseSection>

        <CaseSection index="02" title="Who we were building for">
          <p>
            Primarily, JAMB and WAEC candidates studying independently. The
            product also has a school-facing side; Sabi supports licensing
            and school-level access, for teachers who want their students
            practicing on a shared platform rather than photocopied past
            questions.
          </p>
        </CaseSection>

        <CaseSection index="03" title="The initial hypothesis">
          <p>
            Students would learn faster and retain more if every practice
            question came with an explanation tailored to their mistake;
            not just the correct answer, but the reasoning behind it; and
            if their practice time was steered toward their actual weak
            topics instead of a fixed syllabus order.
          </p>
        </CaseSection>

        <CaseSection index="04" title="What we built">
          <div className="space-y-8">
            <p>
              A practice mode where every question comes with an AI
              tutor, &ldquo;Professor Sabi&rdquo;, that explains wrong
              answers in plain language, a timed mock-exam mode that
              mirrors the real JAMB format, and a student dashboard that
              turns practice activity into a predicted score, an accuracy
              trend, and a weakness heatmap by topic.
            </p>
            <DesktopShot
              src="/images/sabi-practice.png"
              alt="Sabi practice mode showing a question map and subject navigation"
              width={3072}
              height={1536}
            />
            <DesktopShot
              src="/images/sabi-explanation.png"
              alt="Professor Sabi AI explanation panel breaking down a wrong answer on a vowel-sounds question"
              width={3072}
              height={1536}
              caption="The AI explanation panel, the core of the practice experience."
            />
            <DesktopShot
              src="/images/sabi-exam.png"
              alt="Sabi mock exam interface with subject tabs, timer, and question navigator"
              width={3072}
              height={1536}
              caption="Mock exam mode: timed, with subject tabs and a question navigator."
            />
            <DesktopShot
              src="/images/sabi-dashboard.png"
              alt="Sabi student dashboard with predicted score, accuracy, streak, and weakness heatmap"
              width={3072}
              height={1536}
              caption="The dashboard; predicted score, accuracy, streak, and a weakness heatmap."
            />
          </div>
        </CaseSection>

        <CaseSection index="05" title="My role">
          <p>
            I work across product and engineering. That means making calls
            on what we build next and why, running early growth
            experiments, and implementing a meaningful share of the
            frontend myself using AI-assisted development throughout. My
            co-founder owns the backend and database schema independently.
          </p>
        </CaseSection>

        <CaseSection index="06" title="Product decisions that mattered">
          <p>
            Subscription gating touches almost every part of the product —
            AI explanations, mock exams, parent dashboards, analytics. It
            would have been easy to gate access only in the interface and
            call it done, but that&rsquo;s trivial to bypass. Enforcing it
            server-side, with row-level security policies that actually
            hold up, was slower to build but the only version worth
            shipping.
          </p>
          <p>
            We also kept the streak and study-plan logic deliberately
            simple by anchoring it to a single timezone
            (<code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              Africa/Lagos
            </code>
            ) rather than building general timezone handling our users
            don&rsquo;t need yet — a case of not solving a problem we
            don&rsquo;t have.
          </p>
        </CaseSection>

        <CaseSection index="07" title="How I used AI">
          <p>
            AI shows up in Sabi two different ways, and I try to keep them
            distinct. Inside the product, the AI explanation feature is
            core to the learning experience — it&rsquo;s what turns a
            wrong answer into something a student actually understands. In
            my own workflow, I use AI-assisted development to move faster
            through frontend implementation and debugging, particularly
            when adapting to backend schema changes I wasn&rsquo;t always
            looped in on ahead of time.
          </p>
        </CaseSection>

        <CaseSection index="08" title="Challenges">
          <p>
            Coordinating frontend and backend work when the database
            schema changes independently is a recurring one — at one
            point, the subjects a student selected during onboarding moved
            from a single array field to a proper table, and the frontend
            had to be reworked to match, including a mapping layer to
            reconcile subject names shown in the UI with the codes stored
            in the database.
          </p>
          <p>
            Getting the product to actually work well on the range of
            phones and connections Nigerian students use meant a full
            responsiveness pass across every page, not just the marketing
            site — this turned out to matter more for real usage than any
            single new feature.
          </p>
        </CaseSection>

        <CaseSection index="09" title="What we changed">
          <p>
            The subject-selection step in onboarding changed shape more
            than once as we saw how the original design broke down in
            practice — including a redirect loop caused by onboarding
            checks reading stale state. It was a reminder that first-run
            flows deserve as much attention as the core product, since
            that&rsquo;s the one experience every user has to get through.
          </p>
        </CaseSection>

        <CaseSection index="10" title="Traction">
          <p>
            Sabi has grown to more than 500 students. The funnel numbers
            below come from an earlier measurement, taken when we had 141
            users. That early data told me more about where the funnel
            breaks than about product-market fit, and I&rsquo;d rather show
            it clearly than dress it up.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-4 sm:grid-cols-5">
            <Stat value="500+" label="Students today" />
            <Stat value="141" label="Users at measurement" />
            <Stat value="3" label="Paying users" />
            <Stat value="18%" label="Reach a first practice session" approx />
            <Stat value="0%" label="Conversion, first-session cohort" />
          </div>

          <p>
            <strong>Acquisition.</strong> All of the first 141 users came
            through word of mouth, which was our only real channel at the
            time, with acquisition cost effectively ₦0.
          </p>
          <p>
            <strong>Activation.</strong> Only an estimated ~18% of signups
            reach their first practice session. That&rsquo;s an early,
            lower-confidence observation, not a precise figure — but even
            as a rough number, it points to most of the drop-off happening
            before anyone experiences the actual product.
          </p>
          <p>
            <strong>Retention.</strong> An estimated ~4 users have
            practiced at least twice within a 7-day window. The sample is
            too small to call this a retention curve — it&rsquo;s an early
            signal at best.
          </p>
          <p>
            <strong>Monetization.</strong> 3 users were paying at the time. Among
            users tracked in the current measurement who completed a first
            practice session, observed conversion to paid is 0%.
          </p>

          <Callout label="Open questions, honestly">
            <p>
              Those two monetization facts sit next to each other
              uncomfortably — 3 paying users, but 0% conversion measured
              from a completed first practice session. I don&rsquo;t have
              a clean explanation for how those paths diverge yet, and I&rsquo;d
              rather say that than guess. Same for onboarding drop-off:
              I know a lot of signups don&rsquo;t reach a first practice
              session, but not yet why. Both are open product questions
              I&rsquo;m working to answer with better instrumentation and
              direct user feedback, not more features.
            </p>
          </Callout>
        </CaseSection>

        <CaseSection index="11" title="What I learned">
          <p>
            Building the parts of a product that don&rsquo;t show up in a
            demo — entitlement logic, RLS policies, timezone-aware streaks —
            taught me as much as the visible features did. But the bigger
            lesson has been about reading data honestly: it&rsquo;s easy to
            build more features, and much harder to sit with numbers that
            say your activation funnel is leaking, and go find out why
            instead of shipping around the question.
          </p>
        </CaseSection>

        <CaseSection index="12" title="What&rsquo;s next">
          <p>
            Closing the gap between signup and first practice session is
            the priority — that&rsquo;s where most of the current loss is.
            Concretely, that means better instrumentation to see where in
            onboarding people stop, and direct conversations with students
            who signed up but didn&rsquo;t come back, rather than guessing
            from the dashboard alone.
          </p>
        </CaseSection>
      </div>
    </div>
  );
}

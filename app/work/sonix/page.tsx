import type { Metadata } from "next";
import { PhoneShot } from "@/components/Shot";
import CaseSection from "@/components/CaseSection";

export const metadata: Metadata = {
  title: "Sonix | Tolulope Adegoke",
  description:
    "Case study: Sonix, a Flutter music player built with the Deezer API.",
};

export default function SonixCaseStudy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">
        Sonix
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        A cross-platform Flutter music player built to learn mobile
        development end to end with a real public API.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
        <PhoneShot
          src="/images/sonix-home.jpeg"
          alt="Sonix home screen with featured playlists, trending tracks, and popular albums"
          width={540}
          height={1170}
          priority
        />
        <PhoneShot
          src="/images/sonix-search.jpeg"
          alt="Sonix search screen showing real-time song results for 'burning'"
          width={540}
          height={1170}
        />
        <PhoneShot
          src="/images/sonix-player.jpeg"
          alt="Sonix full-screen player showing album art and a 30-second preview, powered by Deezer"
          width={540}
          height={1170}
        />
      </div>

      <div className="mt-4">
        <CaseSection index="01" title="What it solves">
          <p>
            Sonix isn&rsquo;t a commercial product; it&rsquo;s a personal
            project I built to go deep on mobile development: consuming a
            real third-party API, managing state across a full-screen
            player and a persistent mini-player, and handling audio
            playback properly. I wanted to tackle all of that rather than
            build another to-do app.
          </p>
        </CaseSection>

        <CaseSection index="02" title="The product experience">
          <div className="space-y-6">
            <p>
              A home screen surfaces featured playlists, trending tracks,
              and popular albums pulled from Deezer. Search returns
              real-time results across songs and artists. Tapping a track
              opens a full-screen player with a 30-second preview, and a
              mini-player keeps playback visible while browsing elsewhere
              in the app.
            </p>
            <PhoneShot
              src="/images/sonix-artist.jpeg"
              alt="Sonix artist page for Asake showing a top tracks list"
              width={540}
              height={1170}
              caption="Artist pages list the top tracks pulled from Deezer."
            />
          </div>
        </CaseSection>

        <CaseSection index="03" title="UI/UX decisions">
          <p>
            A dark theme suits a media app that is often used in low-light
            settings. The persistent mini-player was a deliberate choice:
            playback state should never disappear just because you navigate
            to search or your library. Because every clip is capped at 30
            seconds, the player clearly labels that limit on screen, so the
            clip feels like a preview rather than a broken full track.
          </p>
        </CaseSection>

        <CaseSection index="04" title="Technical implementation">
          <p>
            The app is built in Flutter and Dart and structured into clear
            layers: models, providers, services, screens, and widgets. State
            management uses{" "}
            <code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              provider
            </code>
            , with a single{" "}
            <code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              PlayerProvider
            </code>{" "}
            as the source of truth for playback state, so the full-screen
            player and the mini-player never fall out of sync. Playback
            itself runs on{" "}
            <code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              just_audio
            </code>
            . Search results, charts, and artist data come from the Deezer
            API over plain HTTP. Artwork is loaded with{" "}
            <code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              cached_network_image
            </code>
            , while liked songs and playlists are persisted locally with{" "}
            <code className="rounded bg-paper-dim px-1 py-0.5 text-[0.9em]">
              shared_preferences
            </code>
            .
          </p>
        </CaseSection>

        <CaseSection index="05" title="Challenges">
          <p>
            The Deezer API wasn&rsquo;t built around this app, so much of the
            work involved handling edge cases: tracks with no preview and
            loading states while search and chart data arrive asynchronously.
            Keeping playback state consistent across two different player
            surfaces (full-screen and mini) was the other real design
            problem. I solved it by routing both through the same provider
            instead of letting either one manage its own state.
          </p>
        </CaseSection>

        <CaseSection index="06" title="Limitations">
          <p>
            Playback is limited to Deezer&rsquo;s 30-second previews, a
            constraint of the API rather than the app. Some tracks
            don&rsquo;t have preview audio available at all. Background
            playback while the app is minimized isn&rsquo;t
            fully supported yet.
          </p>
        </CaseSection>

        <CaseSection index="07" title="What I learned">
          <p>
            Building Sonix end to end gave me real reps in cross-platform
            Flutter development, working with inconsistent responses from a
            REST API, managing state in a
            medium-sized app without it turning into spaghetti, and
            structuring a project so it can keep growing without a
            rewrite.
          </p>
        </CaseSection>
      </div>
    </div>
  );
}

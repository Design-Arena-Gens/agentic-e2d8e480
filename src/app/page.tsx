const features = [
  {
    title: "Code in Rhythm",
    description:
      "Stream ideas, iterate live, and watch MEMO Code remix your prompts into production-ready features.",
  },
  {
    title: "Context That Sticks",
    description:
      "Adaptive memory keeps every decision in play so your AI pair stays in sync with your product direction.",
  },
  {
    title: "Deploy in One Flow",
    description:
      "Preview, test, and ship without leaving the studio. MEMO Code connects to your stack end-to-end.",
  },
];

const highlights = [
  "Autonomous agent orchestration",
  "Multi-modal debugging",
  "Live collaboration canvas",
  "Audit-ready change history",
];

const testimonials = [
  {
    quote:
      "MEMO Code feels like a creative partner that actually understands our voice. We prototype in hours, not weeks.",
    name: "Hannah Kim",
    role: "Head of Product, NeonTide",
  },
  {
    quote:
      "The built-in memory layer means our agents never forget the edge cases. Shipping has never been smoother.",
    name: "Diego Martins",
    role: "CTO, Waveform Labs",
  },
];

const sessionLog = `prompt: "Craft a shimmering dashboard for our launch event"
memo-agent: synthesizing theme...
memo-agent: deploying gradient mesh, reactive cards, pulse interactions.`;

const vibeDirectives = `palette: dusk neon
motion: drift + pulse
voice: optimistic minimalism`;

const agentResponse = `✔ components scaffolded
✔ tests generated
✔ deployment preview staged`;

const nextActions = `export to repo → push to vercel
share interactive preview with team`;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20vw] top-[-10vh] h-[60vh] w-[60vw] rounded-full bg-pink-500/40 blur-3xl" />
        <div className="absolute right-[-25vw] top-1/3 h-[55vh] w-[55vw] rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-full h-[40vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-purple-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg font-semibold tracking-tight">
              M
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">MEMO Code</p>
              <p className="text-xs text-white/40">Vibe-driven coding intelligence</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#flow">
              Flow
            </a>
            <a className="transition hover:text-white" href="#testimonials">
              Voices
            </a>
            <a className="transition hover:text-white" href="#cta">
              Join Beta
            </a>
          </nav>
          <a
            href="#cta"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Launch Studio
            <span className="hidden text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white md:inline">
              →
            </span>
          </a>
        </header>

        <section className="relative mt-20 flex flex-col gap-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-14 lg:mt-24">
          <div className="absolute -top-20 left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/30 via-sky-500/30 to-purple-500/30 blur-3xl" />
          <div className="z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Vibe coding, amplified
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn moods into shipped product with MEMO Code.
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                MEMO Code blends creative intuition with rigorous automation. Describe the vibe, drop your constraints, and our AI conductors translate it into resilient, production-grade code you can deploy instantly.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                >
                  Request Early Access
                </a>
                <a
                  href="#flow"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Watch the Flow
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <div className="absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-500/40 blur-2xl" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-pink-500/30 blur-2xl" />
              <div className="relative space-y-4 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Live Session</p>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/70">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-white/60">memo-agent • composing</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">{sessionLog}</pre>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10" />
                  <div>
                    <p className="text-sm font-semibold text-white">Sonic Draft complete</p>
                    <p className="text-xs text-white/60">Preview ready in 42 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-24 grid gap-10 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-sm font-semibold text-white/70">
                  ✦
                </span>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section
          id="flow"
          className="mt-28 flex flex-col gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-10 text-white backdrop-blur-xl lg:flex-row"
        >
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">How it flows</p>
            <h2 className="text-3xl font-semibold">Conduct your product sessions like a live set.</h2>
            <p className="text-base text-white/70">
              Switch between ideation, generation, and refinement without breaking the rhythm. MEMO Code orchestrates agents, versioning, and deployment so your team can stay in the creative pocket.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 space-y-6 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_35px_rgba(236,72,153,0.25)]">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>session.memos</span>
              <span>sync · 02:37 remaining</span>
            </div>
            <div className="space-y-4 font-mono text-xs leading-relaxed text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">vibe directives</p>
                <pre>{vibeDirectives}</pre>
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-4">
                <p className="text-white">memo-agent response</p>
                <pre>{agentResponse}</pre>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">next actions</p>
                <pre>{nextActions}</pre>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-28 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(14,165,233,0.25)]"
            >
              <div className="absolute -top-12 right-8 text-6xl text-white/10">“</div>
              <blockquote className="relative text-lg leading-relaxed text-white/80">
                {testimonial.quote}
              </blockquote>
              <div className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </section>

        <section
          id="cta"
          className="mt-28 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-sky-400/10 p-10 text-center text-white backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Join the beta wave</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Bring your vibe to the future of coding.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            We’re onboarding teams that want to pair expressive product thinking with production-ready delivery. Share your email and we’ll send you an invite window.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 text-left sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@studio.co"
              className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90 sm:w-auto"
            >
              Request Invite
            </button>
          </form>
          <p className="mt-6 text-xs text-white/60">
            MEMO Code integrates with GitHub, Linear, Vercel, and your internal tools.
          </p>
        </section>

        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-10 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MEMO Code Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Press Kit</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

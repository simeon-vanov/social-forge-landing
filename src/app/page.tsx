export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-sans)]">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">
            Social<span className="gradient-text">Forge</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pain" className="hover:text-white transition-colors">Why</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
          </div>
          <a
            href="#download"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[128px]" />
          <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[128px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            AI-powered social media automation
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Stop burning out.<br />
            <span className="gradient-text">Start growing.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            63% of creators burned out last year. Not because they lacked talent — because growing on social media
            is a full-time job. SocialForge is your AI-powered desktop agent that creates posts,
            replies to your feed, and grows your X/Twitter audience on autopilot.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Download for Windows
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-8 py-3.5 text-base font-medium text-[var(--muted)] transition-colors hover:border-zinc-600 hover:text-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mx-auto mt-24 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "10h+", label: "saved per week" },
            { value: "24/7", label: "autopilot mode" },
            { value: "280", label: "char-perfect posts" },
            { value: "$0", label: "forever free" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-1 text-xs text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            The Problem
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold md:text-5xl">
            Social media growth is <span className="gradient-text">broken</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--muted)] text-lg">
            The algorithms changed. The rules changed. But the tools didn&apos;t.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Content creation is a full-time job",
                desc: "Creators spend 10+ hours per week just writing posts. That's a part-time job producing zero direct revenue.",
              },
              {
                icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
                title: "Algorithms crush organic reach",
                desc: "LinkedIn views dropped 47% overnight. Instagram engagement collapsed 79% in one year. Your content disappears.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Engagement requires constant presence",
                desc: "Replying drives 42% more growth, but followers expect replies within 24 hours. There aren't enough hours in the day.",
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "AI tools produce generic content",
                desc: "91% of creators use AI — but the output sounds corporate and requires hours of editing. It doesn't sound like you.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Help is unaffordable",
                desc: "Social media managers cost $1,500-6,000/month. Agencies charge even more. Most creators are stuck doing it all themselves.",
              },
              {
                icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                title: "Most creators quit in 3-6 months",
                desc: "Not from lack of talent — from burnout. 63% of creators experienced burnout last year. The workload is simply unsustainable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Features
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold md:text-5xl">
            Your personal <span className="gradient-text">growth engine</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--muted)] text-lg">
            SocialForge runs on your desktop, uses your browser session, and speaks in your voice.
            No API keys. No monthly fees. No generic AI slop.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                title: "Custom Prompts Per Content Type",
                desc: "Write a different prompt for educational posts, engagement tweets, tips, and threads. Each content type gets its own voice and angle. Full control, zero templates.",
                badge: "AI Prompts",
              },
              {
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                title: "Intelligent Reply Agent",
                desc: "Scrapes your feed, triages posts by relevance, and generates authentic replies that add value. Learns your reply style from previous responses to stay consistent.",
                badge: "Feed Monitor",
              },
              {
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Content Calendar & Scheduling",
                desc: "Plan your week with themes and topics. The agent auto-generates and posts content at optimal times. Visual calendar view with full editorial control.",
                badge: "Scheduler",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Your Voice, Not AI Slop",
                desc: "Feeds your recent posts and replies into every prompt so the AI matches your style. Same tone, same vocabulary, different content every time.",
                badge: "Voice Match",
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Desktop-Native, Privacy-First",
                desc: "Runs as a Windows desktop app using your own browser session. Your data stays on your machine. No cloud servers, no subscriptions, no data harvesting.",
                badge: "Desktop",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Real-Time Dashboard",
                desc: "Live activity feed, post history, engagement metrics, and agent controls. See exactly what your agent is doing, approve posts before they go live, or let it run fully autonomous.",
                badge: "Control",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card-hover rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            How It Works
          </div>
          <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
            Three steps to <span className="gradient-text">autopilot</span>
          </h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Install & authenticate",
                desc: "Download the desktop app, open it, and log in to X.com through the built-in browser. SocialForge uses your existing session — no API keys or tokens needed.",
              },
              {
                step: "02",
                title: "Configure your prompts & strategy",
                desc: "Set up your content types (educational, tips, threads, engagement). Write a custom AI prompt for each type that defines your voice. Set daily targets and schedule your content calendar.",
              },
              {
                step: "03",
                title: "Let the agent work",
                desc: "SocialForge monitors your feed, triages relevant posts, generates on-brand replies, and publishes your scheduled content. Watch it all happen in real-time from the dashboard, or just let it run.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--card)] text-xl font-bold gradient-text">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Comparison
          </div>
          <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
            Why not just use <span className="gradient-text">Buffer or Hootsuite?</span>
          </h2>
          <div className="overflow-hidden rounded-xl border border-[var(--card-border)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--card-border)] bg-[var(--card)]">
                  <th className="px-6 py-4 font-medium text-[var(--muted)]">Feature</th>
                  <th className="px-6 py-4 font-medium text-[var(--muted)]">Scheduling Tools</th>
                  <th className="px-6 py-4 font-medium gradient-text">SocialForge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--card-border)]">
                {[
                  ["Generates content for you", "Generic AI output", "Custom prompts per content type"],
                  ["Learns your voice", "No", "Feeds recent posts into every prompt"],
                  ["Auto-replies to feed", "No", "Triages & replies autonomously"],
                  ["Content strategy planning", "Basic calendar", "Weekly themes + auto-slot generation"],
                  ["Privacy", "Cloud-based, data stored remotely", "Local desktop app, your data stays yours"],
                  ["Price", "$15-249+/month", "Free & open source"],
                ].map(([feature, others, us]) => (
                  <tr key={feature} className="bg-[var(--background)]">
                    <td className="px-6 py-4 font-medium">{feature}</td>
                    <td className="px-6 py-4 text-[var(--muted)]">{others}</td>
                    <td className="px-6 py-4 text-blue-400">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glow rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-12 md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Ready to <span className="gradient-text">stop doing it all yourself?</span>
            </h2>
            <p className="mb-10 text-lg text-[var(--muted)]">
              Download SocialForge for Windows. Free, open source, no sign-up required.
              Your content. Your voice. Your growth. On autopilot.
            </p>
            <a
              href="https://github.com/nicksimmons/socialforge/releases"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] px-10 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Download from GitHub
            </a>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Windows 10/11 required. macOS & Linux coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-12 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-[var(--muted)]">
            SocialForge — Open source AI social media growth engine
          </span>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="https://github.com/nicksimmons/socialforge" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          1. HERO — Attention + Value Prop + CTA
          ════════════════════════════════════════════ */}
      <section className="noise-overlay relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/8 blur-[150px]" />
          <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-cyan-500/6 blur-[120px]" />
          <div className="absolute left-1/6 top-1/2 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[100px]" />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed08_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed08_1px,transparent_1px)] bg-[size:48px_48px]"
            style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)]/80 px-4 py-1.5 text-sm text-[var(--muted)] backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            AI-powered X/Twitter growth agent
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Stop burning out.<br />
            <span className="gradient-text">Start growing.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            SocialForge is your AI desktop agent that monitors your feed, writes replies in your voice,
            and posts content on autopilot — so you can focus on what actually matters.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get SocialForge — &euro;30 Lifetime
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-8 py-3.5 text-base font-medium text-[var(--muted)] transition-colors hover:border-purple-500/40 hover:text-white"
            >
              See How It Works
            </a>
          </div>

          {/* Trust bar */}
          <div className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Runs locally on your PC
            </span>
            <span className="hidden sm:inline text-[var(--card-border)]">|</span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Powered by Grok + Claude
            </span>
            <span className="hidden sm:inline text-[var(--card-border)]">|</span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Zero API costs
            </span>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          2. PROBLEM — Agitate the pain
          ════════════════════════════════════════════ */}
      <section id="pain" className="relative py-32 px-6 bg-[var(--surface-1)] overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/4 blur-[150px]" />

        <div className="mx-auto max-w-6xl relative">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-red-400">
            The Problem
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold md:text-5xl">
            Growing on X is a <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">full-time job</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--muted)] text-lg">
            You know the grind. Write posts, engage with replies, stay consistent, keep up with the algorithm — all while running your actual business.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "10+ hours a week on content",
                desc: "Writing posts, scheduling, replying to comments — it's a part-time job that produces zero direct revenue.",
              },
              {
                icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
                title: "Algorithms punish inconsistency",
                desc: "Miss a day and your reach drops. The algorithm rewards volume and consistency, not quality alone.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Replies drive growth, but who has time?",
                desc: "Engaging with others drives 42% more followers. But your audience expects replies within hours. Every day.",
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "AI tools sound like AI tools",
                desc: "91% of creators use AI, but the output sounds corporate and generic. It doesn't sound like you, and your audience can tell.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Hiring help costs $1,500+/month",
                desc: "Social media managers start at $1,500/month. Agencies charge even more. Most creators can't justify the cost.",
              },
              {
                icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                title: "63% of creators burn out",
                desc: "Not from lack of talent — from unsustainable workload. Most quit within 3-6 months. The system is broken.",
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

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          3. SOLUTION — Meet SocialForge
          ════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[var(--surface-2)] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/6 blur-[150px]" />

        <div className="mx-auto max-w-4xl text-center relative">
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            The Solution
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet <span className="gradient-text">SocialForge</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            A Windows desktop agent that sits on your machine and does what a social media manager would — monitor your feed,
            write replies that sound like you, create posts on schedule, and grow your audience 24/7.
            No cloud. No API keys. No monthly bill.
          </p>

          {/* Stats bar */}
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "10h+", label: "saved per week" },
              { value: "24/7", label: "runs on autopilot" },
              { value: "280", label: "char-perfect posts" },
              { value: "\u20AC0/mo", label: "zero running costs" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[var(--card-border)] bg-[var(--card)]/60 p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-xs text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          4. FEATURES — Detailed capabilities
          ════════════════════════════════════════════ */}
      <section id="features" className="relative py-32 px-6 bg-[var(--surface-1)] overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/4 blur-[120px]" />

        <div className="mx-auto max-w-6xl relative">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Features
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold md:text-5xl">
            Two AI engines. <span className="gradient-text">Your voice.</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--muted)] text-lg">
            SocialForge combines Grok&apos;s real-time X knowledge with Claude&apos;s writing quality —
            and learns from every edit you make to sound more like you over time.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Grok-Powered Feed Intelligence",
                desc: "SocialForge drives Grok's free web interface via your browser session — zero API costs. Grok triages your feed, scores post relevance, and decides what's worth replying to with full X context awareness.",
                badge: "Grok Integration",
                color: "cyan",
              },
              {
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Claude Code CLI for Smarter Writing",
                desc: "Connect Claude Code as an external text generator via MCP. Claude polls for pending replies and posts, generates higher-quality text using its reasoning capabilities, and submits it back — all through the CLI you already use.",
                badge: "Claude Code",
                color: "violet",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Learns Your Voice From Every Edit",
                desc: "Every time you edit, approve, or reject a generated post, the system learns. Your recent posts and replies feed into every prompt — same tone, same vocabulary, increasingly accurate to how you actually write.",
                badge: "Personalization",
                color: "emerald",
              },
              {
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                title: "Autonomous Reply Agent",
                desc: "Scrapes your Following feed every 5 minutes. Triages posts by relevance. Generates authentic, context-aware replies that add value — not generic comments. Human-like timing and typing built in.",
                badge: "Feed Monitor",
                color: "blue",
              },
              {
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Content Calendar with Weekly Themes",
                desc: "Plan your week with rotating themes and topics. The agent auto-generates posts at optimal times matching your content strategy. Visual calendar with full editorial control — approve or let it fly.",
                badge: "Scheduler",
                color: "purple",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Real-Time System Access",
                desc: "Give Claude Code access to your system information, recent posts, and engagement data. Get content that references real, up-to-date information — not generic AI filler disconnected from reality.",
                badge: "Live Context",
                color: "amber",
              },
            ].map((feature) => {
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "hover:border-violet-500/30" },
                cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/30" },
                blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-500/30" },
                emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/30" },
                purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "hover:border-purple-500/30" },
                amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "hover:border-amber-500/30" },
              };
              const c = colorMap[feature.color];
              return (
                <div
                  key={feature.title}
                  className={`card-hover rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 ${c.border}`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.bg}`}>
                      <svg className={`h-5 w-5 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                    <span className={`rounded-full ${c.bg} px-3 py-1 text-xs font-medium ${c.text}`}>
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          5. HOW IT WORKS — 3 steps
          ════════════════════════════════════════════ */}
      <section id="how-it-works" className="relative py-32 px-6 bg-[var(--surface-2)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,#7c3aed06_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{ maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 100%)' }}
        />

        <div className="mx-auto max-w-4xl relative">
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
                title: "Install & log in to X",
                desc: "Download SocialForge for Windows. Open it, log in to X.com through the built-in browser. It uses your existing session — no API keys, no tokens, no configuration headaches.",
              },
              {
                step: "02",
                title: "Set your voice & strategy",
                desc: "Write custom prompts for each content type — educational posts, engagement tweets, threads. Define your weekly themes, daily targets, and content calendar. Optionally connect Claude Code for higher-quality generation.",
              },
              {
                step: "03",
                title: "Let the agent run",
                desc: "SocialForge monitors your feed, triages relevant posts via Grok, generates on-brand replies, and publishes your scheduled content. Watch it from the dashboard, approve posts before they go live, or let it run fully autonomous.",
              },
            ].map((step, i) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--card)] text-xl font-bold gradient-text">
                    {step.step}
                  </div>
                  {i < 2 && (
                    <div className="absolute left-1/2 top-14 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--card-border)] to-transparent" />
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 text-center">
            <a
              href="#pricing"
              className="glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get SocialForge — &euro;30 Lifetime
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          6. COMPARISON — Why not alternatives
          ════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[var(--surface-1)] overflow-hidden">
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/4 blur-[120px]" />

        <div className="mx-auto max-w-4xl relative">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Comparison
          </div>
          <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
            Why not just use <span className="gradient-text">Buffer or Hootsuite?</span>
          </h2>
          <div className="overflow-hidden rounded-xl border border-[var(--card-border)] glow">
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
                  ["Generates content", "Generic AI templates", "Custom prompts per content type"],
                  ["AI quality", "Single model, no context", "Grok triage + Claude writing"],
                  ["Learns your voice", "No", "Feeds recent posts into every prompt"],
                  ["Auto-replies to feed", "No", "Triages & replies autonomously"],
                  ["Gets smarter over time", "No", "Learns from your edits & rejections"],
                  ["Privacy", "Cloud-based, your data on their servers", "Desktop app, data stays on your machine"],
                  ["Price", "$15\u2013249/month ($180\u2013$2,988/year)", "\u20AC30 once, yours forever"],
                ].map(([feature, others, us]) => (
                  <tr key={feature} className="bg-[var(--background)] hover:bg-[var(--surface-1)] transition-colors">
                    <td className="px-6 py-4 font-medium">{feature}</td>
                    <td className="px-6 py-4 text-[var(--muted)]">{others}</td>
                    <td className="px-6 py-4 text-violet-400">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          7. PRICING — with anchor
          ════════════════════════════════════════════ */}
      <section id="pricing" className="relative py-32 px-6 bg-[var(--surface-2)] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/6 blur-[150px]" />

        <div className="mx-auto max-w-3xl text-center relative">
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Pricing
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            One price. <span className="gradient-text">Yours forever.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-[var(--muted)]">
            No subscriptions. No usage limits. No API fees.
            Pay once, get lifetime access and all future updates.
          </p>

          <div className="glow-strong rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5" />
            <div className="relative">
              {/* Price anchor */}
              <p className="mb-2 text-sm text-[var(--muted)]">
                Other tools charge <span className="line-through text-red-400/80">$15&ndash;249/month</span>
              </p>
              <div className="mb-2 flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold gradient-text md:text-7xl">&euro;30</span>
              </div>
              <p className="mb-8 text-[var(--muted)]">One-time payment &middot; Lifetime access &middot; All future updates</p>

              <div className="mb-8 mx-auto max-w-sm text-left space-y-3">
                {[
                  "Grok-powered feed monitoring & replies",
                  "Claude Code integration for smarter writing",
                  "Content calendar with weekly themes",
                  "Learns your voice from every edit",
                  "Real-time dashboard & controls",
                  "Anti-detection with human-like behavior",
                  "All future updates included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <svg className="h-4 w-4 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#download"
                className="glow inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] px-10 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Get SocialForge Now
              </a>
              <p className="mt-6 text-sm text-[var(--muted)]">
                Windows 10/11 required. macOS &amp; Linux coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          8. GUARANTEE — Risk reversal
          ════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[var(--surface-1)]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 mb-6">
            <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="mb-3 text-2xl font-bold">30-Day Money-Back Guarantee</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Try SocialForge for 30 days. If it doesn&apos;t save you time or you&apos;re not happy for any reason,
            email us and get a full refund. No questions asked.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          9. FAQ — Objection handling
          ════════════════════════════════════════════ */}
      <section id="faq" className="py-32 px-6 bg-[var(--surface-2)]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            FAQ
          </div>
          <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
            Common <span className="gradient-text">questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is \u20AC30 really a one-time payment?",
                a: "Yes. You pay once and get lifetime access, including all future updates. No subscriptions, no hidden fees, no usage caps. We charge \u20AC30 instead of a monthly fee because we believe in building tools that respect your wallet.",
              },
              {
                q: "How does the Grok integration work without API costs?",
                a: "SocialForge uses Playwright to drive Grok's free web interface through your own X Premium session — the same Grok you already have access to. No API keys needed, no per-token charges. Grok handles feed triage and initial content generation at zero cost.",
              },
              {
                q: "What does the Claude Code integration add?",
                a: "When connected, Claude Code acts as an advanced text generator via MCP (Model Context Protocol). It polls for pending replies and posts, generates higher-quality text using Claude's reasoning capabilities, and learns from your edits and rejections to sound more like you over time. It can also access your system information for contextually rich, up-to-date content.",
              },
              {
                q: "Will my account get flagged or banned?",
                a: "SocialForge is built with anti-detection as a core principle. It uses human-like typing speeds (30-120ms per character), randomized delays between actions (2-5 minutes), jitter on cycle intervals, and character-by-character input. It behaves like a human using X, because it operates through a real browser session.",
              },
              {
                q: "Will it keep getting updates?",
                a: "Yes. Your \u20AC30 includes all future updates. SocialForge is actively developed and we're committed to keeping it current with X platform changes, new AI model integrations, and feature improvements. macOS and Linux support are on the roadmap.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6">
                <h3 className="mb-3 text-lg font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          10. FINAL CTA
          ════════════════════════════════════════════ */}
      <section id="download" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/6 blur-[150px]" />

        <div className="mx-auto max-w-3xl text-center relative">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Stop doing it all yourself.<br />
            <span className="gradient-text">Let your agent take over.</span>
          </h2>
          <p className="mb-10 text-lg text-[var(--muted)]">
            One-time &euro;30 purchase. Lifetime updates. 30-day money-back guarantee.
          </p>
          <a
            href="#"
            className="glow inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] px-10 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Get SocialForge — &euro;30 Lifetime
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] bg-[var(--surface-1)] py-12 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-[var(--muted)]">
            SocialForge — AI-powered X/Twitter growth agent
          </span>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

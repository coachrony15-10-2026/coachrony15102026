import { ArrowRight, ArrowUpRight, Check, ImageIcon } from "lucide-react";
import portraitAsset from "@/assets/portrait.png.asset.json";
import { approach, journey, projects, services } from "@/data/portfolio";

function SectionHead({ label, title, center }: { label: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-primary">{label}</p>
      <h2 className="bn mt-3 text-3xl font-bold leading-snug text-foreground sm:text-4xl">{title}</h2>
      <div className={`accent-line mt-5 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.25fr_1fr] md:py-28">
        <div className="reveal">
          <p className="eyebrow text-accent">AI Coach • Digital Educator • Consultant</p>
          <h1 className="bn mt-5 text-4xl font-bold leading-[1.3] sm:text-5xl lg:text-[3.4rem]">
            আমি AI দিয়ে আইডিয়াকে বাস্তব ডিজিটাল সলিউশনে রূপ দিতে কাজ করি।
          </h1>
          <p className="bn mt-6 max-w-xl text-lg leading-relaxed text-navy-muted">
            আমি MD RONY — CoachRony ব্র্যান্ডের প্রতিষ্ঠাতা। AI, ওয়েব প্রযুক্তি ও অটোমেশন ব্যবহার করে মানুষ এবং ব্যবসাকে ডিজিটাল সলিউশন তৈরি, কাজ সহজ করা এবং নতুন সুযোগ তৈরি করতে সাহায্য করি।
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="bn inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              আমার কাজ দেখুন <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="bn inline-flex items-center rounded-md border border-navy-border px-6 py-3 font-semibold transition-colors hover:bg-navy-elevated">
              একসঙ্গে কাজ করি
            </a>
          </div>
          <p className="mt-10 text-sm font-medium tracking-wide text-navy-muted">
            AI Solutions <span className="text-accent">/</span> Websites & Software <span className="text-accent">/</span> Business Automation <span className="text-accent">/</span> Digital Education
          </p>
        </div>
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-navy-border">
            <img src={portraitAsset.url} alt="MD RONY" width={800} height={800} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" aria-hidden />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-md border border-navy-border bg-navy-elevated px-4 py-3 text-xs">
            <p className="eyebrow text-accent">Philosophy</p>
            <p className="mt-1 font-semibold">Learn → Build → Automate → Launch → Grow</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead label="About Me" title="প্রযুক্তিকে সহজ করে বাস্তব কাজে লাগানোই আমার লক্ষ্য।" />
          <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="eyebrow text-muted-foreground">Core focus</p>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              {["AI Coach", "Digital Educator", "Consultant", "AI Solution Builder"].map((r) => (
                <li key={r} className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" />{r}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bn space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>আমি MD RONY, বাংলাদেশ থেকে কাজ করি। CoachRony ব্র্যান্ডের মাধ্যমে মানুষ ও ব্যবসাকে AI এবং আধুনিক ডিজিটাল প্রযুক্তি ব্যবহার করে বাস্তব সমস্যার সমাধান করতে সাহায্য করি।</p>
          <p>ব্যাংকিং, শিক্ষা, ভূমি ডিজিটাইজেশন, গ্রাফিক ডিজাইন ও ফ্রিল্যান্সিং — বিভিন্ন ক্ষেত্রে কাজের অভিজ্ঞতা আমাকে শিখিয়েছে, প্রযুক্তি তখনই মূল্যবান যখন তা মানুষের দৈনন্দিন কাজ সহজ করে।</p>
          <p>আমার বিশ্বাস — শুধু শেখা যথেষ্ট নয়, নিজের হাতে তৈরি করাটাই আসল। তাই আমি প্র্যাকটিক্যাল, প্রজেক্ট-ভিত্তিক পদ্ধতিতে শেখাই এবং কাজ করি।</p>
          <p className="pt-2 font-[Montserrat] text-2xl font-extrabold italic tracking-tight text-foreground">— MD RONY</p>
          <a href="#journey" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            আমার কাজ ও অভিজ্ঞতা দেখুন <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead label="Services" title="AI ও ডিজিটাল প্রযুক্তির মাধ্যমে বাস্তব সমস্যা সমাধান" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, status }) => (
            <article key={title} className="group flex flex-col bg-card p-7 transition-colors hover:bg-background">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">{status}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="bn mt-2 flex-1 leading-relaxed text-muted-foreground">{desc}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-80 transition-opacity group-hover:opacity-100">
                Discuss a project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead label="Featured Projects" title="আইডিয়া থেকে বাস্তব প্রজেক্ট" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[16/9] bg-navy">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <div className="grid-lines flex h-full items-center justify-center text-navy-muted">
                    <div className="text-center">
                      <ImageIcon className="mx-auto h-7 w-7" aria-hidden />
                      <p className="mt-2 text-xl font-extrabold text-navy-foreground">{p.title}</p>
                      <p className="eyebrow mt-1">Screenshot coming soon</p>
                    </div>
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-xs font-semibold text-foreground">{p.status}</span>
              </div>
              <div className="p-6">
                <p className="eyebrow text-primary">{p.category}</p>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="bn mt-2 leading-relaxed text-muted-foreground">{p.desc}</p>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                    Visit project <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="mt-5 text-sm font-medium text-muted-foreground">Link coming soon</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Training() {
  const points = ["Project-based learning", "Practical AI workflows", "Website & digital product creation", "Business automation concepts", "Beginner-friendly explanations"];
  return (
    <section id="training" className="bg-navy py-24 text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-accent">Training & Education</p>
          <h2 className="bn mt-3 text-3xl font-bold leading-snug sm:text-4xl">শুধু শেখা নয়, নিজের হাতে তৈরি করা শিখুন।</h2>
          <div className="accent-line mt-5" />
          <p className="bn mt-6 text-lg leading-relaxed text-navy-muted">
            CoachRony Academy-তে প্র্যাকটিক্যাল AI শিক্ষা, ওয়েবসাইট ও সফটওয়্যার তৈরি, ডিজিটাল প্রোডাক্ট ডেভেলপমেন্ট এবং বিজনেস অটোমেশন শেখানো হয় — হাতে-কলমে, সহজ ভাষায়।
          </p>
          <a href="https://coachrony.com/" target="_blank" rel="noopener noreferrer" className="bn mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
            CoachRony Academy দেখুন <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="divide-y divide-navy-border rounded-lg border border-navy-border bg-navy-elevated">
          {points.map((pt, i) => (
            <li key={pt} className="flex items-center gap-4 px-6 py-5">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <span className="font-semibold">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead label="Professional Journey" title="অভিজ্ঞতার বিভিন্ন ক্ষেত্র" />
        <ol className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {journey.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex gap-5 border-l-2 border-border py-5 pl-6 transition-colors hover:border-primary">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="bn mt-1 text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead label="My Approach" title="Problem → Solution → Build → Launch → Grow" center />
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {approach.map((s) => (
            <li key={s.n} className="relative rounded-lg border border-border bg-background p-6">
              <span className="text-3xl font-extrabold text-primary/25">{s.n}</span>
              <h3 className="mt-3 font-bold">{s.title}</h3>
              <p className="bn mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

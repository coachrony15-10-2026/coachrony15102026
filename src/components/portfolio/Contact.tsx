import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Loader2, Mail, CheckCircle2, AlertCircle, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { contact, inquiryTypes, socials } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "নাম লিখুন").max(100),
  email: z.string().trim().email("সঠিক ইমেইল লিখুন").max(255),
  inquiry_type: z.string().min(1, "একটি বিষয় বেছে নিন"),
  message: z.string().trim().min(10, "অন্তত ১০ অক্ষরের বার্তা লিখুন").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "w-full rounded-md border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("inquiries").insert(parsed.data);
    if (error) return setStatus("error");
    form.reset();
    setStatus("sent");
  }

  const err = (k: keyof Errors) => errors[k] && <p className="bn mt-1.5 text-sm text-destructive">{errors[k]}</p>;

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-primary">Contact</p>
          <h2 className="bn mt-3 text-3xl font-bold leading-snug sm:text-4xl">আপনার আইডিয়াকে বাস্তবে রূপ দিতে প্রস্তুত?</h2>
          <div className="accent-line mt-5" />
          <p className="bn mt-6 text-lg leading-relaxed text-muted-foreground">
            আপনি যদি একটি ডিজিটাল প্রজেক্ট তৈরি করতে চান, ব্যবসায় AI ব্যবহার করতে চান অথবা প্রশিক্ষণ ও সহযোগিতার বিষয়ে আলোচনা করতে চান, তাহলে যোগাযোগ করুন।
          </p>
          <ul className="mt-8 space-y-3 text-sm font-medium">
            <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-primary" /><a href={contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">coachrony.com</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />
              {contact.email ? <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a> : <span className="text-muted-foreground">Email coming soon</span>}
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.filter((s) => s.href).map((s) => (
              <a key={s.label} href={s.href!} target="_blank" rel="noopener noreferrer" className="rounded-md border border-border px-3 py-1.5 text-sm hover:border-primary">{s.label}</a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
              <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} />
              {err("name")}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} />
              {err("email")}
            </div>
          </div>
          <div>
            <label htmlFor="inquiry_type" className="mb-1.5 block text-sm font-semibold">Project or inquiry type</label>
            <select id="inquiry_type" name="inquiry_type" defaultValue="" className={field} aria-invalid={!!errors.inquiry_type}>
              <option value="" disabled>Select one</option>
              {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
            {err("inquiry_type")}
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows={5} className={`${field} bn`} aria-invalid={!!errors.message} />
            {err("message")}
          </div>
          <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60">
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <div aria-live="polite">
            {status === "sent" && <p className="bn flex items-center gap-2 text-sm font-medium text-primary"><CheckCircle2 className="h-4 w-4" />ধন্যবাদ! আপনার বার্তা পৌঁছেছে, শীঘ্রই যোগাযোগ করব।</p>}
            {status === "error" && <p className="bn flex items-center gap-2 text-sm font-medium text-destructive"><AlertCircle className="h-4 w-4" />বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Contact", "#contact"]];
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">MD RONY <span className="text-navy-muted">|</span> <span className="text-accent">CoachRony</span></p>
          <p className="mt-1 text-sm text-navy-muted">AI Coach • Digital Educator • Consultant</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-navy-muted">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-navy-foreground">{l}</a>)}
          <a href={contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-navy-foreground">coachrony.com</a>
          {socials.filter((s) => s.href).map((s) => <a key={s.label} href={s.href!} target="_blank" rel="noopener noreferrer" className="hover:text-navy-foreground">{s.label}</a>)}
        </nav>
      </div>
      <div className="border-t border-navy-border py-5 text-center text-xs text-navy-muted">© {new Date().getFullYear()} MD RONY. All rights reserved.</div>
    </footer>
  );
}

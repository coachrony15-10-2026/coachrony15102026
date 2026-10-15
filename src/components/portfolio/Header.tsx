import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy-border bg-navy/95 text-navy-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-baseline gap-2" aria-label="MD RONY — home">
          <span className="text-lg font-extrabold tracking-tight">MD RONY</span>
          <span className="eyebrow text-accent">CoachRony</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-navy-muted transition-colors hover:text-navy-foreground">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Let's Collaborate
          </a>
        </nav>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-navy-border px-5 pb-5 md:hidden">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-navy-muted hover:text-navy-foreground">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
            Let's Collaborate
          </a>
        </nav>
      )}
    </header>
  );
}

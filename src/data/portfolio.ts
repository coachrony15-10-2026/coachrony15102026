import {
  Bot, Code2, Workflow, GraduationCap, ShoppingBag, Sparkles,
  Landmark, Palette, Map, School, Briefcase, ImageIcon,
  type LucideIcon,
} from "lucide-react";

/**
 * Edit everything on the site from here.
 * Leave a value as null to show a clear "coming soon" state instead of a fake link.
 */
export const contact = {
  email: null as string | null, // e.g. "hello@coachrony.com"
  phone: null as string | null,
  website: "https://coachrony.com/",
};

export const socials: { label: string; href: string | null }[] = [
  { label: "Facebook", href: null },
  { label: "YouTube", href: null },
  { label: "LinkedIn", href: null },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
];

export const services: { icon: LucideIcon; title: string; desc: string; status: string }[] = [
  { icon: Bot, title: "AI Solution Building", desc: "ব্যবসা ও ব্যক্তিগত প্রয়োজন অনুযায়ী AI টুল ও ওয়ার্কফ্লো তৈরি, যাতে কাজ দ্রুত ও সহজ হয়।", status: "Available" },
  { icon: Code2, title: "Website & Software Development", desc: "আধুনিক ওয়েব প্রযুক্তি ও AI ব্যবহার করে ওয়েবসাইট, ল্যান্ডিং পেজ ও ছোট সফটওয়্যার তৈরি।", status: "Available" },
  { icon: Workflow, title: "Business Automation & AI Agents", desc: "পুনরাবৃত্ত কাজ স্বয়ংক্রিয় করা এবং AI এজেন্ট দিয়ে ব্যবসার প্রক্রিয়া সহজ করা।", status: "In development" },
  { icon: GraduationCap, title: "AI Training & Digital Education", desc: "হাতে-কলমে AI, ওয়েবসাইট তৈরি ও ডিজিটাল স্কিল শেখানো — সহজ বাংলায়।", status: "Available" },
  { icon: ShoppingBag, title: "Digital Product & Online Business", desc: "ডিজিটাল প্রোডাক্ট তৈরি ও অনলাইনে বিক্রির পরিকল্পনা ও বাস্তবায়নে সহায়তা।", status: "By discussion" },
  { icon: Sparkles, title: "AI-Powered Content & Creative", desc: "AI দিয়ে কনটেন্ট, ডিজাইন ও ক্রিয়েটিভ অ্যাসেট তৈরির কার্যকর পদ্ধতি।", status: "By discussion" },
];

export type Project = {
  title: string;
  category: string;
  desc: string;
  status: string;
  href: string | null;
  image: string | null; // add a screenshot URL here
};

export const projects: Project[] = [
  { title: "CoachRony Academy", category: "Education Platform", desc: "প্র্যাকটিক্যাল AI, ওয়েবসাইট ও ডিজিটাল স্কিল শেখার প্ল্যাটফর্ম।", status: "Live", href: "https://coachrony.com/", image: null },
  { title: "Vibe Coding", category: "Learning Program", desc: "AI-এর সাহায্যে কোড লিখে ওয়েবসাইট ও অ্যাপ তৈরি শেখার উদ্যোগ।", status: "Live", href: "https://vibecoding.coachrony.com/", image: null },
  { title: "AI Solution Builder", category: "AI Product", desc: "আইডিয়া থেকে কার্যকর AI সলিউশন তৈরির কাঠামো ও টুলস।", status: "In progress", href: null, image: null },
  { title: "AI Employee & Business Automation", category: "Automation", desc: "AI এজেন্ট দিয়ে ব্যবসার দৈনন্দিন কাজ স্বয়ংক্রিয় করার প্রজেক্ট।", status: "In progress", href: null, image: null },
  { title: "Digital Product Business", category: "Online Business", desc: "ডিজিটাল প্রোডাক্ট তৈরি ও অনলাইনে বিক্রির ব্যবসায়িক মডেল।", status: "Planned", href: null, image: null },
];

export const journey: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Landmark, title: "Banking Agent Business", desc: "এজেন্ট ব্যাংকিং ব্যবসা-সংক্রান্ত কাজের অভিজ্ঞতা।" },
  { icon: Palette, title: "Graphic Design Training (LEDP)", desc: "LEDP-এর আওতায় গ্রাফিক ডিজাইন প্রশিক্ষণ।" },
  { icon: Map, title: "Land Digitization", desc: "ভূমি ডিজিটাইজেশন-সংক্রান্ত কাজ।" },
  { icon: School, title: "Technical Officer — Primary Education", desc: "প্রাথমিক শিক্ষায় টেকনিক্যাল অফিসার হিসেবে কাজের অভিজ্ঞতা।" },
  { icon: Briefcase, title: "Freelancing", desc: "Fiverr ও Freelancer.com-এ ফ্রিল্যান্সিং।" },
  { icon: ImageIcon, title: "Digital Asset Creation", desc: "Adobe Stock, Freepik ও Shutterstock-এর মতো প্ল্যাটফর্মের জন্য ডিজিটাল অ্যাসেট তৈরি।" },
];

export const approach = [
  { n: "01", title: "Understand the Problem", desc: "সমস্যা ও লক্ষ্য পরিষ্কারভাবে বোঝা।" },
  { n: "02", title: "Design the Solution", desc: "সহজ ও কার্যকর সমাধানের নকশা।" },
  { n: "03", title: "Build & Test", desc: "তৈরি করা ও বাস্তবে পরীক্ষা করা।" },
  { n: "04", title: "Launch", desc: "ব্যবহারকারীর কাছে পৌঁছে দেওয়া।" },
  { n: "05", title: "Improve & Grow", desc: "ফিডব্যাক থেকে ক্রমাগত উন্নতি।" },
];

export const inquiryTypes = [
  "AI Solution", "Website / Software", "Business Automation",
  "Training / Workshop", "Collaboration", "Other",
];

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero, About, Services, Projects, Training, Journey, Approach } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "MD RONY — AI Coach, Digital Educator & Consultant | CoachRony";
const description = "MD RONY, founder of CoachRony, helps people and businesses turn ideas into practical digital solutions using AI, modern web technologies and automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://coachrony.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://coachrony.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Training />
        <Journey />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

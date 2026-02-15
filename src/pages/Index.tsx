import Navbar from "@/components/Navbar";
import { Mail, Linkedin, Download, ExternalLink, GraduationCap, Award, Briefcase, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/* ───────── Section wrapper ───────── */
const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`scroll-mt-16 px-6 py-16 md:py-20 ${className}`}>
    <div className="mx-auto max-w-4xl">{children}</div>
  </section>
);

const SectionTitle = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <div className="mb-8 flex items-center gap-3">
    <Icon className="h-5 w-5 text-accent" />
    <h2 className="text-2xl">{children}</h2>
  </div>
);

/* ───────── Page ───────── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <Section id="hero" className="pt-24 md:pt-32">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Portfolio</p>
        <h1 className="text-4xl leading-tight md:text-5xl">Roma Kalani</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Teacher of Mathematics&ensp;·&ensp;NPQ in Leading Teaching&ensp;·&ensp;Harvard Graduate
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a href="mailto:romakalani89@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" /> romakalani89@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/romakalani/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <Separator className="my-8" />

        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Committed and versatile Teacher of Mathematics with over eight years of classroom experience across
          the UK and India. Proven track record of raising attainment at KS3 and KS4, leading whole-school
          numeracy strategy, and coaching colleagues through instructional coaching. Skilled in curriculum
          design, data-driven intervention, and fostering an inclusive learning environment. Harvard-educated
          with an NPQ in Leading Teaching.
        </p>

        <div className="mt-8">
          <Button asChild variant="outline" className="gap-2">
            <a href="/Roma_Kalani_CV.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </Section>

      {/* ── Education ── */}
      <Section id="education" className="bg-card">
        <SectionTitle icon={GraduationCap}>Education</SectionTitle>
        <div className="space-y-6">
          {[
            {
              school: "Harvard Graduate School of Education",
              degree: "Master in Education (M.Ed.)",
              years: "2016 – 2017",
              note: "Cambridge, MA, USA",
            },
            {
              school: "MICA, Ahmedabad",
              degree: "Post Graduate Programme in Art Direction",
              years: "2013 – 2014",
              note: "Ahmedabad, India",
            },
            {
              school: "University of Mumbai",
              degree: "Bachelor of Engineering — Computer Engineering",
              years: "2007 – 2011",
              note: "Mumbai, India",
            },
          ].map((e) => (
            <div key={e.school} className="border-l-2 border-accent/30 pl-5">
              <p className="text-xs font-medium uppercase tracking-wide text-accent">{e.years}</p>
              <h3 className="mt-1 text-lg">{e.school}</h3>
              <p className="text-sm text-muted-foreground">{e.degree}</p>
              <p className="text-xs text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Qualifications ── */}
      <Section id="qualifications">
        <SectionTitle icon={BookOpen}>Professional Qualifications</SectionTitle>
        <div className="space-y-4">
          {[
            { title: "National Professional Qualification in Leading Teaching (NPQLT)", org: "UCL", year: "2024" },
            { title: "SCITT Mentor", org: "Sutton SCITT / NASBTT", year: "2024" },
            { title: "ECT Mentor", org: "UCL", year: "2023" },
            { title: "Teaching for Mastery", org: "MathsHubs London SouthWest, NCETM", year: "2022" },
          ].map((q) => (
            <div key={q.title} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="font-medium">{q.title}</p>
                <p className="text-sm text-muted-foreground">
                  {q.org}&ensp;·&ensp;{q.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" className="bg-card">
        <SectionTitle icon={Briefcase}>Teaching & Leadership Experience</SectionTitle>

        {/* Glenthorne */}
        <div className="mb-10 border-l-2 border-accent/30 pl-5">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">2020 – Present</p>
          <h3 className="mt-1 text-lg">Glenthorne High School, Sutton</h3>
          <p className="mb-3 text-sm text-muted-foreground">Teacher of Mathematics</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li><strong className="text-foreground">KS3 Coordinator —</strong> Redesigned the Year 7–9 curriculum aligned with White Rose, introduced half-termly assessments, and led standardisation meetings.</li>
            <li><strong className="text-foreground">Numeracy Coordinator —</strong> Launched a whole-school numeracy strategy including Numeracy Ninjas, cross-curricular workshops, and a staff toolkit adopted across ten departments.</li>
            <li><strong className="text-foreground">Instructional Coach —</strong> Line-managed four teachers using the Leverage Leadership model, delivering weekly observation–feedback cycles that improved T&L ratings.</li>
            <li><strong className="text-foreground">Data & Intervention —</strong> Used FFT and internal data to design targeted Year 11 intervention groups, contributing to a 12 pp rise in Grade 4+ outcomes.</li>
            <li><strong className="text-foreground">SCITT & ECT Mentor —</strong> Mentored trainee and early-career teachers through structured programmes (UCL / Sutton SCITT).</li>
          </ul>
        </div>

        {/* Earlier roles */}
        <h3 className="mb-4 text-lg">Earlier Experience</h3>
        <div className="space-y-4">
          {[
            { role: "Teacher of Mathematics", place: "Ashcroft Technology Academy, London", years: "2020" },
            { role: "Teacher of Mathematics", place: "Fatima High School, Mumbai", years: "2018 – 2019" },
            { role: "Teacher of Mathematics/STEM", place: "AISU, Utah", years: "2017 – 2018" },
            { role: "Teach for India Fellow", place: "Mumbai", years: "2014 – 2016" },
          ].map((r) => (
            <div key={r.place} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent/50" />
              <div>
                <p className="font-medium">{r.role}</p>
                <p className="text-sm text-muted-foreground">
                  {r.place}&ensp;·&ensp;{r.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Pastoral ── */}
      <Section id="pastoral">
        <SectionTitle icon={BookOpen}>Pastoral & Co-Curricular Leadership</SectionTitle>
        <div className="space-y-4">
          {[
            { title: "Whole-School CPD (150 staff)", detail: "Co-designed and co-delivered session on effective homework marking and DIRT, strengthening consistency and impact of written feedback across departments." },
            { title: "Inclusion Committee CPD (150 staff)", detail: "Co-led a session on facilitating sensitive classroom discussions through an inclusion lens, providing practical routines, language and strategies to support respectful, safe dialogue." },
            { title: "Form Tutor (Y7–Y11)", detail: "Provided daily pastoral care, academic mentoring, and wellbeing support; guided pupils through GCSE transition and option pathways." },
            { title: "A-Level Tutor", detail: "Delivered contextual mentoring, university/careers guidance, and structured academic monitoring to support post-18 progression." },
            { title: "Challenge Week Facilitator", detail: "Delivered interdisciplinary sessions on Art, Media, and the significance of teamwork, fostering collaboration and creative thinking." },
            { title: "Founder & Lead – AI Club", detail: "Established and lead weekly enrichment exploring artificial intelligence, ethics, and emerging technologies." },
            { title: "Lead – Puzzle & Board Games Club", detail: "Lead a strategic thinking and problem-solving club promoting resilience, collaboration, and logical reasoning." },
          ].map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-muted-foreground">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Recognitions ── */}
      <Section id="awards">
        <SectionTitle icon={Award}>Recognitions</SectionTitle>
        <div className="space-y-4">
          {[
            { title: "Outstanding Teacher Award", detail: "Murray City, USA, 2018" },
            { title: "Head of Communications — Harvard South Asia Education Initiative", detail: "2016 – 2017" },
            { title: "TEDx Curator", detail: "TEDx City2.0, Mumbai, 2012 – 2013" },
          ].map((a) => (
            <div key={a.title} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="font-medium">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Footer / Contact ── */}
      <Section id="contact" className="bg-card">
        <div className="text-center">
          <h2 className="mb-4 text-2xl">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:romakalani89@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" /> romakalani89@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/romakalani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">References available on request</p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="/Roma_Kalani_CV.pdf" download>
                <Download className="h-3.5 w-3.5" />
                Download CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;

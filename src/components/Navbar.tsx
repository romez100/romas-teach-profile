import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "qualifications", label: "Qualifications" },
  { id: "experience", label: "Experience" },
  { id: "pastoral", label: "Pastoral" },
  { id: "awards", label: "Recognitions" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <button onClick={() => scrollTo("hero")} className="font-semibold tracking-wide text-foreground">
          Roma Kalani
        </button>

        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-2 border-t px-6 py-4 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="w-full text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

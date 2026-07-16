import { useEffect, useState } from "react";
import {
  careerProfile,
  experiences,
  interests,
  languages,
  profile,
  projects,
  skills,
} from "./data";

const THEMES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "ocean", label: "Ocean" },
  { id: "sunset", label: "Sunset" },
] as const;

type Theme = (typeof THEMES)[number]["id"];

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const current = document.documentElement.dataset.theme as Theme;
    return THEMES.some((t) => t.id === current) ? current : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

/** Adds .visible to .reveal elements as they scroll into view. */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function PrintHeader() {
  return (
    <header className="print-header print-only">
      <h1>{profile.name}</h1>
      <p className="print-tagline">{profile.tagline}</p>
      <p className="print-contact">
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
        <span>{profile.website}</span>
        <span>github.com/{profile.github}</span>
        <span>{profile.timezone}</span>
        <span>{profile.citizenship}</span>
      </p>
      <p className="print-contact print-meta">
        <span>
          <strong>Languages:</strong>{" "}
          {languages.map((l) => `${l.idiom} (${l.level})`).join(", ")}
        </span>
        <span>
          <strong>Interests:</strong> {interests.join(", ")}
        </span>
      </p>
    </header>
  );
}

function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="nav no-print">
      <span className="nav-brand">
        
      </span>
      <div className="nav-controls">
        <div className="theme-picker" role="radiogroup" aria-label="Theme">
          {THEMES.map((t) => (
            <button
              key={t.id}
              role="radio"
              aria-checked={theme === t.id}
              className={`theme-dot theme-dot-${t.id} ${
                theme === t.id ? "active" : ""
              }`}
              title={t.label}
              onClick={() => setTheme(t.id)}
            >
              <span className="sr-only">{t.label}</span>
            </button>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => window.print()}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          CV as PDF
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero no-print">
      <div className="avatar-ring">
        <img className="avatar" src={profile.avatar} alt={profile.name} />
      </div>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>

      <div className="chips">
        <a className="chip" href={`mailto:${profile.email}`}>
          ✉ {profile.email}
        </a>
        <a className="chip" href={`tel:${profile.phone}`}>
          ☎ {profile.phone}
        </a>
        <a
          className="chip"
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          {profile.github}
        </a>
        <a
          className="chip"
          href={`https://${profile.website}`}
          target="_blank"
          rel="noreferrer"
        >
          ⌂ {profile.website}
        </a>
        <span className="chip chip-static">🕐 {profile.timezone}</span>
        <span className="chip chip-static">🌍 {profile.citizenship}</span>
      </div>

      <div className="chips chips-secondary">
        {languages.map((l) => (
          <span className="chip chip-static chip-small" key={l.idiom}>
            {l.idiom} · {l.level}
          </span>
        ))}
        {interests.map((i) => (
          <span className="chip chip-static chip-small" key={i}>
            {i}
          </span>
        ))}
      </div>
    </header>
  );
}

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <div className="bg-orbs no-print" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Nav />

      <div className="content">
        <Hero />
        <main className="main">
          <PrintHeader />

          <section className="section card reveal">
            <h2 className="section-title">Career Profile</h2>
            <p className="prose">{careerProfile}</p>
          </section>

          <section className="section card reveal">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experiences.map((exp) => (
                <article
                  className="experience reveal"
                  key={`${exp.role}-${exp.time}`}
                >
                  <header className="experience-header">
                    <h3>{exp.role}</h3>
                    <span className="time">{exp.time}</span>
                  </header>
                  <p className="company">{exp.company}</p>
                  <ul className="details">
                    {exp.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {projects.length > 0 && (
            <section className="section card reveal">
              <h2 className="section-title">Projects</h2>
              <div className="projects">
                {projects.map((p) => (
                  <article className="project" key={p.title}>
                    <header className="project-header">
                      <h3>
                        {p.link && p.link !== "#" ? (
                          <a href={p.link} target="_blank" rel="noreferrer">
                            {p.title} ↗
                          </a>
                        ) : (
                          p.title
                        )}
                      </h3>
                      {p.lang && (
                        <span className="project-lang">{p.lang}</span>
                      )}
                    </header>
                    <p>{p.tagline}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="section card reveal">
            <h2 className="section-title">Skills &amp; Proficiency</h2>
            <ul className="skills">
              {skills.map((s) => (
                <li key={s.name} style={{ "--level": `${s.level}%` } as never}>
                  <div className="skill-row">
                    <span>{s.name}</span>
                    <span className="muted">{s.level}%</span>
                  </div>
                  <div
                    className="skill-bar"
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={s.name}
                  >
                    <div className="skill-bar-fill" />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer no-print">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}

export default App;

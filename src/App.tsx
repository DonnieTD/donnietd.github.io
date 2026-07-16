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

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
  };
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

function Sidebar() {
  return (
    <aside className="sidebar no-print">
      <img className="avatar" src={profile.avatar} alt={profile.name} />
      <h1 className="name">{profile.name}</h1>
      <p className="tagline">{profile.tagline}</p>

      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className="contact-label">Phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </li>
        <li>
          <span className="contact-label">Timezone</span>
          {profile.timezone}
        </li>
        <li>
          <span className="contact-label">Citizenship</span>
          {profile.citizenship}
        </li>
        <li>
          <span className="contact-label">Website</span>
          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.website}
          </a>
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.github}
          </a>
        </li>
      </ul>

      <section className="sidebar-section">
        <h2>Languages</h2>
        <ul className="plain-list">
          {languages.map((l) => (
            <li key={l.idiom}>
              {l.idiom} <span className="muted">({l.level})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar-section">
        <h2>Interests</h2>
        <ul className="plain-list">
          {interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="page">
      <div className="actions no-print">
        <button className="btn" onClick={() => window.print()}>
          Download CV (PDF)
        </button>
        <button
          className="btn btn-icon"
          onClick={toggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="layout">
        <Sidebar />

        <main className="main">
          <PrintHeader />
          <section className="section">
            <h2 className="section-title">Career Profile</h2>
            <p className="prose">{careerProfile}</p>
          </section>

          <section className="section">
            <h2 className="section-title">Experience</h2>
            {experiences.map((exp) => (
              <article className="experience" key={`${exp.role}-${exp.time}`}>
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
          </section>

          {projects.length > 0 && (
            <section className="section">
              <h2 className="section-title">Projects</h2>
              <div className="projects">
                {projects.map((p) => (
                  <article className="project" key={p.title}>
                    <h3>
                      {p.link && p.link !== "#" ? (
                        <a href={p.link} target="_blank" rel="noreferrer">
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p>{p.tagline}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="section">
            <h2 className="section-title">Skills &amp; Proficiency</h2>
            <ul className="skills">
              {skills.map((s) => (
                <li key={s.name}>
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
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${s.level}%` }}
                    />
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

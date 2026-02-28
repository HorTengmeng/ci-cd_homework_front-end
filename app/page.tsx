export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg: #080808;
          --surface: #0f0f0f;
          --accent: #c8a96e;
          --accent2: #e8d5a3;
          --text: #f0ece4;
          --muted: #5a5550;
          --border: #1e1c1a;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Space Mono', monospace;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid transparent;
          background: linear-gradient(to bottom, rgba(8,8,8,0.9), transparent);
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .nav-line {
          width: 40px;
          height: 1px;
          background: var(--muted);
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 2rem 4rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-left {
          animation: fadeUp 1s ease forwards;
          opacity: 0;
        }

        .hero-tag {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-tag::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: var(--accent);
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 7vw, 6rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 2rem;
        }

        .hero-name em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-desc {
          font-size: 0.75rem;
          line-height: 1.9;
          color: var(--muted);
          letter-spacing: 0.05em;
          max-width: 360px;
          margin-bottom: 3rem;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text);
          text-decoration: none;
          border: 1px solid var(--border);
          padding: 1rem 2rem;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
          background: transparent;
        }

        .hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-cta:hover::before {
          transform: translateX(0);
        }

        .hero-cta:hover {
          color: var(--bg);
          border-color: var(--accent);
        }

        .hero-cta span {
          position: relative;
          z-index: 1;
        }

        .hero-cta-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        /* HERO RIGHT */
        .hero-right {
          animation: fadeUp 1s ease 0.2s forwards;
          opacity: 0;
          position: relative;
        }

        .hero-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 3rem;
          position: relative;
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 2rem;
          right: 2rem;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--accent), transparent);
        }

        .card-number {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          margin-bottom: 2rem;
        }

        .card-stat {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .card-stat:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .stat-label {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--text);
        }

        .stat-value.accent {
          color: var(--accent);
        }

        /* MARQUEE */
        .marquee-section {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          overflow: hidden;
          animation: fadeUp 1s ease 0.4s forwards;
          opacity: 0;
        }

        .marquee-track {
          display: flex;
          gap: 0;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }

        .marquee-item {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .marquee-dot {
          width: 3px;
          height: 3px;
          background: var(--accent);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ABOUT SECTION */
        .about {
          padding: 8rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .section-num {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: var(--accent);
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          letter-spacing: 0.05em;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .about-cell {
          background: var(--bg);
          padding: 2.5rem;
          transition: background 0.3s ease;
        }

        .about-cell:hover {
          background: var(--surface);
        }

        .cell-icon {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .cell-title {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .cell-text {
          font-size: 0.7rem;
          line-height: 1.8;
          color: var(--muted);
        }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: var(--muted);
        }

        .footer-copy {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--muted);
        }

        /* BG DECORATION */
        .bg-circle {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 169, 110, 0.04) 0%, transparent 70%);
          top: -200px;
          right: -200px;
          pointer-events: none;
          z-index: 0;
        }

        .bg-circle2 {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 169, 110, 0.03) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
          pointer-events: none;
          z-index: 0;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .hero-right {
            display: none;
          }
        }
      `}</style>

      <div className="grain" />
      <div className="bg-circle" />
      <div className="bg-circle2" />

      {/* NAV */}
      <nav>
        <div className="nav-logo">HT</div>
        <div className="nav-line" />
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-tag">Portfolio — 2025</div>
            <h1 className="hero-name">
              Hor<br />
              <em>Tengmeng</em>
            </h1>
            <p className="hero-desc">
              Building digital experiences with precision and purpose.
              Developer. Creator. Problem solver.
            </p>
            <button className="hero-cta">
              <span>View My Work</span>
              <span className="hero-cta-arrow">→</span>
            </button>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="card-number">01 / PROFILE</div>
              <div className="card-stat">
                <div className="stat-label">Full Name</div>
                <div className="stat-value">Hor Tengmeng</div>
              </div>
              <div className="card-stat">
                <div className="stat-label">Role</div>
                <div className="stat-value accent">Developer</div>
              </div>
              <div className="card-stat">
                <div className="stat-label">Status</div>
                <div className="stat-value">Available for work</div>
              </div>
              <div className="card-stat">
                <div className="stat-label">Based in</div>
                <div className="stat-value">Cambodia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Docker', 'CI/CD', 'Vercel', 'GitHub Actions', 'Full Stack', 'Web Development'].map((item) => (
                <div key={item} className="marquee-item">
                  <span className="marquee-dot" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about">
        <div className="section-header">
          <span className="section-num">02</span>
          <div className="section-line" />
          <h2 className="section-title">What I Do</h2>
        </div>

        <div className="about-grid">
          <div className="about-cell">
            <div className="cell-icon">◈</div>
            <div className="cell-title">Development</div>
            <p className="cell-text">
              Building robust, scalable web applications from front to back. Clean code. Better products.
            </p>
          </div>
          <div className="about-cell">
            <div className="cell-icon">◇</div>
            <div className="cell-title">Deployment</div>
            <p className="cell-text">
              CI/CD pipelines, Docker, and cloud infrastructure. Shipping with confidence every time.
            </p>
          </div>
          <div className="about-cell">
            <div className="cell-icon">○</div>
            <div className="cell-title">Design</div>
            <p className="cell-text">
              Thoughtful interfaces that balance aesthetics and usability. Details that make the difference.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-name">Hor Tengmeng</div>
        <div className="footer-copy">© 2025 — All rights reserved</div>
      </footer>
    </>
  );
}
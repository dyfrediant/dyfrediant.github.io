import { a5 as attr_class, a6 as attr, e as escape_html, a7 as ensure_array_like, a8 as stringify, a3 as derived, a9 as head } from "../../chunks/index.js";
function tagToBadge(tag) {
  const known = /* @__PURE__ */ new Set([
    "Fullstack",
    "Frontend",
    "Backend",
    "UI",
    "UX",
    "DevOps",
    "CRO",
    "API",
    "CRM"
  ]);
  return known.has(tag) ? `badge-${tag.toLowerCase()}` : "badge-tech";
}
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { project, variant = "project" } = $$props;
    function displayUrl(url) {
      try {
        return new URL(url).hostname.replace(/^www\./, "");
      } catch {
        return url;
      }
    }
    const statusLabel = derived(() => {
      switch (project.status) {
        case "coming-soon":
          return "Coming Soon";
        case "internal":
          return "Internal Use Only";
        case "defunct":
          return "No Longer Exists";
        default:
          return "";
      }
    });
    $$renderer2.push(`<div${attr_class(`${stringify(variant)}-card`)} data-animate="fade-up"><div${attr_class(`${stringify(variant)}-card-image`)}><img${attr("src", project.image)}${attr("alt", project.title)} loading="lazy"/></div> <div${attr_class(`${stringify(variant)}-card-body`)}>`);
    if (variant === "highlight") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<h3>${escape_html(project.title)}</h3>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<h4>${escape_html(project.title)}</h4>`);
    }
    $$renderer2.push(`<!--]--> <div class="badge-group"><!--[-->`);
    const each_array = ensure_array_like(project.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span${attr_class(`badge ${stringify(tagToBadge(tag))}`)}>${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (project.status === "coming-soon") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span${attr_class(`${stringify(variant)}-card-link`)}><span>${escape_html(statusLabel())}</span></span>`);
    } else if (project.status === "internal" || project.status === "defunct") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<span${attr_class(`${stringify(variant)}-card-link error`)}><i class="fas fa-link-slash"></i> ${escape_html(statusLabel())}</span>`);
    } else if (project.url) {
      $$renderer2.push("<!--[2-->");
      $$renderer2.push(`<a${attr("href", project.url)}${attr_class(`${stringify(variant)}-card-link`)} target="_blank" rel="noopener"><span>${escape_html(displayUrl(project.url))}</span> <i class="fas fa-arrow-right"></i></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let featuredProjects = derived(() => data.featuredProjects);
    let latestProjects = derived(() => data.latestProjects);
    let archivedProjects = derived(() => data.archivedProjects);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link rel="preconnect" href="https://api.fontshare.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet"/> <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&amp;display=swap" rel="stylesheet"/> <link rel="stylesheet" href="/assets/fontawesome/css/all.min.css"/> `);
      $$renderer3.push(`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer=""><\/script>`);
      $$renderer3.push(` `);
      $$renderer3.push(`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer=""><\/script>`);
    });
    $$renderer2.push(`<header class="site-header" id="header"><div class="header-inner"><a href="/" class="logo" aria-label="Frediant Home"><span class="logo-bracket">&lt;</span> Frediant <span class="logo-bracket">/></span></a> <nav class="header-actions" aria-label="Social links"><a href="https://www.linkedin.com/in/aldyfrediant/" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://gitlab.com/aldyfrediant" class="social-link" target="_blank" rel="noopener" aria-label="GitLab"><i class="fa-brands fa-gitlab"></i></a> <a href="mailto:dyfrediant@skiff.com" class="btn btn-primary hide-mobile">Contact Me</a></nav></div></header> <main><section class="hero" id="hero"><div class="container hero-content"><p class="hero-greeting">Hello, I'm</p> <h1 class="hero-name"><span class="hero-name-line"><span class="highlight">Fred</span></span></h1> <p class="hero-tagline">Fullstack Developer &amp; <span class="highlight">CRO Specialist</span> — I build high-conversion digital products, from architecture to pixel-perfect UI.</p> <div class="hero-cta-group"><a href="#projects" class="btn btn-primary">View Work <i class="fas fa-arrow-down"></i></a> <a href="mailto:dyfrediant@skiff.com" class="btn btn-secondary">Get In Touch</a></div></div> <div class="hero-scroll-indicator" aria-hidden="true"><span class="scroll-line"></span> <span>SCROLL</span></div></section> <section class="stats" id="stats"><div class="container"><div class="stats-grid"><div class="stat-item" data-animate="scale-in"><div class="stat-number" data-count="7">0</div> <p class="stat-label">Years Experience</p></div> <div class="stat-item" data-animate="scale-in"><div class="stat-number" data-count="50">0</div> <p class="stat-label">Projects Shipped</p></div> <div class="stat-item" data-animate="scale-in"><div class="stat-number" data-count="15">0</div> <p class="stat-label">Happy Clients</p></div> <div class="stat-item" data-animate="scale-in"><div class="stat-number" data-count="99" data-suffix="%">0</div> <p class="stat-label">Client Retention</p></div></div></div></section> <section class="section" id="highlights"><div class="container"><div class="section-header"><div><span class="section-label">Featured Work</span> <h2 class="section-title">High<span class="section-title-accent">lights</span></h2></div> <p class="section-subtitle">Selected projects that showcase fullstack development, UI/UX design, and conversion optimization.</p></div> <div class="highlights-grid"><!--[-->`);
    const each_array = ensure_array_like(featuredProjects());
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      ProjectCard($$renderer2, { project, variant: "highlight" });
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section" id="projects"><div class="container"><div class="section-header"><div><span class="section-label">Portfolio</span> <h2 class="section-title">Latest <span class="section-title-accent">Projects</span></h2></div></div> <div class="projects-grid"><!--[-->`);
    const each_array_1 = ensure_array_like(latestProjects());
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array_1[$$index_1];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section" id="archived"><div class="container"><div class="section-header"><div><span class="section-label">Archive</span> <h2 class="section-title">Past <span class="section-title-accent">Work</span></h2></div></div> <div class="projects-grid"><!--[-->`);
    const each_array_2 = ensure_array_like(archivedProjects());
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let project = each_array_2[$$index_2];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div></div></section> <footer class="site-footer"><div class="container"><div class="footer-terminal" data-animate="fade-up"><div class="terminal-header"><span class="terminal-dot red"></span> <span class="terminal-dot yellow"></span> <span class="terminal-dot green"></span> <span class="terminal-title">frediant@portfolio ~ %</span></div> <div class="terminal-body"><div><span class="terminal-prompt">$</span> whoami</div> <div><span class="terminal-output">Fred — Fullstack Developer &amp; CRO Specialist</span></div> <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> cat ./stack.txt</div> <div><span class="terminal-output">Laravel · React · Next.js · TypeScript · jQuery · WordPress</span></div> <div><span class="terminal-output">Google Optimize · Clevertap · Mailchimp · Figma · Adobe XD</span></div> <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> echo $mission</div> <div><span class="terminal-output">Building digital products that convert. Pixel by pixel.</span></div> <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> <span class="terminal-cursor"></span></div></div></div> <div class="footer-cta" data-animate="fade-up"><h3>Let's build something <span class="section-title-accent">great</span> together.</h3> <a href="mailto:dyfrediant@skiff.com" class="btn btn-primary" style="margin-top: var(--space-6);">Start a Conversation <i class="fas fa-paper-plane"></i></a></div> <div class="footer-bottom"><span>© 2026 Frediant. Built with <span style="color: var(--accent-mint);">♥</span> and caffeine.</span> <div class="footer-socials"><a href="https://www.linkedin.com/in/aldyfrediant/" target="_blank" rel="noopener">LinkedIn</a> <a href="https://gitlab.com/aldyfrediant" target="_blank" rel="noopener">GitLab</a></div></div></div></footer></main>`);
  });
}
export {
  _page as default
};

<script>
  import { onMount } from 'svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';

  let { data } = $props();
  let featuredProjects = $derived(data.featuredProjects);
  let latestProjects = $derived(data.latestProjects);
  let archivedProjects = $derived(data.archivedProjects);

  let headerEl;
  let heroEl;
  let greetingEl;
  let heroNameEl;
  let taglineEl;
  let ctaGroupEl;
  let scrollIndicatorEl;

  $effect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        headerEl?.classList.add('scrolled');
      } else {
        headerEl?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  onMount(() => {
    // Reduced motion check — skip animations if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Double-check GSAP + ScrollTrigger loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP/ScrollTrigger not loaded — animations disabled');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ── Hero name stagger (immediate, no scroll trigger) ──
    gsap.fromTo('.hero-name-line span',
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2,
      }
    );

    // ── Hero greeting ──
    gsap.fromTo('.hero-greeting',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.05 }
    );

    // ── Hero tagline ──
    gsap.fromTo('.hero-tagline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 }
    );

    // ── Hero CTAs ──
    gsap.fromTo('.hero-cta-group',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.9 }
    );

    // ── Fade-up reveals (staggered) ──
    gsap.utils.toArray('[data-animate="fade-up"]').forEach((el, i) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ── Fade-right reveals ──
    gsap.utils.toArray('[data-animate="fade-right"]').forEach((el) => {
      gsap.fromTo(el,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ── Scale-in reveals (staggered) ──
    gsap.utils.toArray('[data-animate="scale-in"]').forEach((el, i) => {
      gsap.fromTo(el,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ── Counter animations ──
    gsap.utils.toArray('[data-count]').forEach((el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.floor(obj.val) + suffix;
            },
          });
        },
        once: true,
      });
    });

    // ── Scroll indicator fade ──
    ScrollTrigger.create({
      trigger: '#stats',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('.hero-scroll-indicator', { opacity: 0, duration: 0.6 });
      },
      onLeaveBack: () => {
        gsap.to('.hero-scroll-indicator', { opacity: 0.5, duration: 0.6 });
      },
    });

    // ── Project card hover tilt ──
    document.querySelectorAll('.project-card, .highlight-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.5,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });
  });
</script>

<svelte:head>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/fontawesome/css/all.min.css" />
  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
</svelte:head>

<!-- ═══ HEADER ═══ -->
<header class="site-header" id="header" bind:this={headerEl}>
  <div class="header-inner">
    <a href="/" class="logo" aria-label="Frediant Home">
      <span class="logo-bracket">&lt;</span>
      Frediant
      <span class="logo-bracket">/&gt;</span>
    </a>
    <nav class="header-actions" aria-label="Social links">
      <a href="https://www.linkedin.com/in/aldyfrediant/" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://gitlab.com/aldyfrediant" class="social-link" target="_blank" rel="noopener" aria-label="GitLab">
        <i class="fa-brands fa-gitlab"></i>
      </a>
      <a href="mailto:dyfrediant@skiff.com" class="btn btn-primary hide-mobile">Contact Me</a>
    </nav>
  </div>
</header>

<main>
  <!-- ═══ HERO ═══ -->
  <section class="hero" id="hero">
    <div class="container hero-content">
      <p class="hero-greeting">Hello, I'm</p>
      <h1 class="hero-name">
        <span class="hero-name-line"><span class="highlight">Fred</span></span>
      </h1>
      <p class="hero-tagline">
        Fullstack Developer &amp; <span class="highlight">CRO Specialist</span> — I build high-conversion digital products, from architecture to pixel-perfect UI.
      </p>
      <div class="hero-cta-group">
        <a href="#projects" class="btn btn-primary">
          View Work
          <i class="fas fa-arrow-down"></i>
        </a>
        <a href="mailto:dyfrediant@skiff.com" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
    <div class="hero-scroll-indicator" aria-hidden="true">
      <span class="scroll-line"></span>
      <span>SCROLL</span>
    </div>
  </section>

  <!-- ═══ STATS ═══ -->
  <section class="stats" id="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item" data-animate="scale-in">
          <div class="stat-number" data-count="7">0</div>
          <p class="stat-label">Years Experience</p>
        </div>
        <div class="stat-item" data-animate="scale-in">
          <div class="stat-number" data-count="50">0</div>
          <p class="stat-label">Projects Shipped</p>
        </div>
        <div class="stat-item" data-animate="scale-in">
          <div class="stat-number" data-count="15">0</div>
          <p class="stat-label">Happy Clients</p>
        </div>
        <div class="stat-item" data-animate="scale-in">
          <div class="stat-number" data-count="99" data-suffix="%">0</div>
          <p class="stat-label">Client Retention</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ HIGHLIGHTS ═══ -->
  <section class="section" id="highlights">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="section-label">Featured Work</span>
          <h2 class="section-title">High<span class="section-title-accent">lights</span></h2>
        </div>
        <p class="section-subtitle">Selected projects that showcase fullstack development, UI/UX design, and conversion optimization.</p>
      </div>

      <div class="highlights-grid">
        {#each featuredProjects as project (project.slug)}
          <ProjectCard {project} variant="highlight" />
        {/each}
      </div>
    </div>
  </section>

  <!-- ═══ LATEST PROJECTS ═══ -->
  <section class="section" id="projects">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="section-label">Portfolio</span>
          <h2 class="section-title">Latest <span class="section-title-accent">Projects</span></h2>
        </div>
      </div>

      <div class="projects-grid">
        {#each latestProjects as project (project.slug)}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </section>

  <!-- ═══ ARCHIVED PROJECTS ═══ -->
  <section class="section" id="archived">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="section-label">Archive</span>
          <h2 class="section-title">Past <span class="section-title-accent">Work</span></h2>
        </div>
      </div>

      <div class="projects-grid">
        {#each archivedProjects as project (project.slug)}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </section>

  <!-- ═══ FOOTER / TERMINAL ═══ -->
  <footer class="site-footer">
    <div class="container">
      <!-- Terminal -->
      <div class="footer-terminal" data-animate="fade-up">
        <div class="terminal-header">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
          <span class="terminal-title">frediant@portfolio ~ %</span>
        </div>
        <div class="terminal-body">
          <div><span class="terminal-prompt">$</span> whoami</div>
          <div><span class="terminal-output">Fred — Fullstack Developer &amp; CRO Specialist</span></div>
          <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> cat ./stack.txt</div>
          <div><span class="terminal-output">Laravel · React · Next.js · TypeScript · jQuery · WordPress</span></div>
          <div><span class="terminal-output">Google Optimize · Clevertap · Mailchimp · Figma · Adobe XD</span></div>
          <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> echo $mission</div>
          <div><span class="terminal-output">Building digital products that convert. Pixel by pixel.</span></div>
          <div style="margin-top: 12px;"><span class="terminal-prompt">$</span> <span class="terminal-cursor"></span></div>
        </div>
      </div>

      <!-- CTA -->
      <div class="footer-cta" data-animate="fade-up">
        <h3>Let's build something <span class="section-title-accent">great</span> together.</h3>
        <a href="mailto:dyfrediant@skiff.com" class="btn btn-primary" style="margin-top: var(--space-6);">
          Start a Conversation
          <i class="fas fa-paper-plane"></i>
        </a>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <span>&copy; 2026 Frediant. Built with <span style="color: var(--accent-mint);">♥</span> and caffeine.</span>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/aldyfrediant/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://gitlab.com/aldyfrediant" target="_blank" rel="noopener">GitLab</a>
        </div>
      </div>
    </div>
  </footer>
</main>

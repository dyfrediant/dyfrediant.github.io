import matter from "gray-matter";
const __vite_glob_0_0 = "---\ntitle: AMPG\ndescription: Full-stack Laravel application with DevOps pipeline for internal business operations.\ndate: 2023-04-01\ntags:\n  - Fullstack\n  - DevOps\n  - Laravel\nimage: /assets/img/ampg.webp\narchived: false\nstatus: internal\n---\n";
const __vite_glob_0_1 = "---\ntitle: Cari Kuliah\ndescription: Full-stack university search platform with comprehensive UI/UX and DevOps deployment.\ndate: 2022-08-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/carikuliah.webp\nurl: https://carikuliah.com\narchived: false\n---\n";
const __vite_glob_0_2 = "---\ntitle: Enfagrow\ndescription: CRO implementation with Google Optimize to improve e-commerce conversion rates and user experience.\ndate: 2024-08-01\ntags:\n  - CRO\n  - Google Optimize\nimage: /assets/img/enfa.webp\nurl: https://store.enfa.co.id/\narchived: false\n---\n";
const __vite_glob_0_3 = "---\ntitle: FPT V2\ndescription: Complete redesign with modern React stack — Next.js, T3 architecture, and improved performance.\ndate: 2026-12-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - React\n  - Next.js\n  - T3\nimage: /assets/img/fpt-2.webp\nfeatured: true\narchived: false\nstatus: coming-soon\n---\n";
const __vite_glob_0_4 = "---\ntitle: Felicia Putri Tjiasaka\ndescription: Full-stack portfolio website with custom CMS, UI/UX design, and DevOps deployment pipeline.\ndate: 2025-01-15\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/fpt.webp\nurl: https://feliciaputritjiasaka.com\nfeatured: true\narchived: false\n---\n";
const __vite_glob_0_5 = "---\ntitle: Innisfree Malaysia\ndescription: Conversion rate optimization (CRO) with Google Optimize A/B testing and UI/UX improvements.\ndate: 2024-03-01\ntags:\n  - CRO\n  - UI\n  - UX\n  - Google Optimize\nimage: /assets/img/innisfree.webp\nurl: https://www.innisfree.my/\narchived: false\n---\n";
const __vite_glob_0_6 = "---\ntitle: Lofity\ndescription: Full-stack Laravel application with UI/UX design and DevOps pipeline — now decommissioned.\ndate: 2022-06-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/lofity.webp\narchived: true\nstatus: defunct\n---\n";
const __vite_glob_0_7 = "---\ntitle: Love, Bonito — Asset Mgmt\ndescription: Full-stack internal asset management system for tracking and managing company equipment and inventory.\ndate: 2022-02-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/love-bonito.webp\narchived: true\nstatus: internal\n---\n";
const __vite_glob_0_8 = "---\ntitle: Love, Bonito — Blog\ndescription: Full-stack WordPress blog for Love, Bonito with custom theme development and content management.\ndate: 2021-09-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - Wordpress\nimage: /assets/img/love-bonito.webp\narchived: true\nstatus: defunct\n---\n";
const __vite_glob_0_9 = "---\ntitle: Love, Bonito — Career Page\ndescription: Full-stack career portal for Love, Bonito — job listings, applications, and candidate management.\ndate: 2021-11-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/love-bonito.webp\narchived: true\nstatus: defunct\n---\n";
const __vite_glob_0_10 = "---\ntitle: Love, Bonito — CSR Rating\ndescription: Full-stack internal CSR rating system for Love, Bonito — employee engagement scoring platform.\ndate: 2022-03-01\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/love-bonito.webp\narchived: true\nstatus: internal\n---\n";
const __vite_glob_0_11 = "---\ntitle: Love, Bonito — Return Receipt\ndescription: Full-stack return receipt generator for Love, Bonito's e-commerce returns and exchange workflow.\ndate: 2022-01-15\ntags:\n  - Fullstack\n  - UI\n  - UX\n  - DevOps\n  - Laravel\n  - jQuery\nimage: /assets/img/love-bonito.webp\narchived: true\nstatus: internal\n---\n";
const __vite_glob_0_12 = "---\ntitle: Noel Gifts\ndescription: Conversion optimization and frontend development with jQuery for Malaysia's leading gift retailer.\ndate: 2023-06-01\ntags:\n  - CRO\n  - Google Optimize\n  - jQuery\nimage: /assets/img/noel.webp\nurl: https://www.noelgifts.com/\narchived: false\n---\n";
const __vite_glob_0_13 = "---\ntitle: Peruri Sign\ndescription: UI/UX design for Indonesia's digital signature platform — wireframing, prototyping, and visual design.\ndate: 2023-02-01\ntags:\n  - UI\n  - UX\n  - Adobe XD\n  - Figma\nimage: /assets/img/peruri.webp\nurl: https://sign.peruri.co.id/\narchived: true\n---\n";
const __vite_glob_0_14 = "---\ntitle: SSCorner\ndescription: Front-end development for SSCorner using Laravel — custom UI components and responsive design.\ndate: 2022-11-01\ntags:\n  - Frontend\n  - Laravel\nimage: /assets/img/sscorner.webp\nurl: https://sscorner.id\narchived: true\n---\n";
const __vite_glob_0_15 = "---\ntitle: Sushi King Malaysia\ndescription: Clevertap API integration for customer engagement and loyalty program automation.\ndate: 2024-06-01\ntags:\n  - API\n  - Clevertap\nimage: /assets/img/sushiking.webp\nurl: https://sushi-king.com/\narchived: false\n---\n";
const __vite_glob_0_16 = "---\ntitle: Tokio Marine Vietnam\ndescription: CRM integration with Mailchimp for automated customer communication and marketing campaigns.\ndate: 2023-11-01\ntags:\n  - CRM\n  - Mailchimp\nimage: /assets/img/tokio-marine.webp\nurl: https://tokiomarineonline.com.vn/\narchived: false\n---\n";
const __vite_glob_0_17 = "---\ntitle: UNHCR Thailand\ndescription: A/B testing and conversion optimization for the UNHCR Thailand donation page to maximize contributions.\ndate: 2023-09-01\ntags:\n  - CRO\n  - Google Optimize\nimage: /assets/img/unhcr.webp\nurl: https://www.unhcr.or.th/donate/refugees\narchived: false\n---\n";
const __vite_glob_0_18 = "---\ntitle: Wahana Visi Indonesia\ndescription: Conversion rate optimization and frontend development for the WVI donation platform.\ndate: 2024-01-01\ntags:\n  - CRO\n  - Google Optimize\n  - jQuery\nimage: /assets/img/wvi.webp\nurl: https://wahanavisi.org\narchived: false\n---\n";
const modules = /* @__PURE__ */ Object.assign({
  "/src/content/portfolio/ampg.md": __vite_glob_0_0,
  "/src/content/portfolio/cari-kuliah.md": __vite_glob_0_1,
  "/src/content/portfolio/enfagrow.md": __vite_glob_0_2,
  "/src/content/portfolio/fpt-v2.md": __vite_glob_0_3,
  "/src/content/portfolio/fpt.md": __vite_glob_0_4,
  "/src/content/portfolio/innisfree.md": __vite_glob_0_5,
  "/src/content/portfolio/lofity.md": __vite_glob_0_6,
  "/src/content/portfolio/love-bonito-asset.md": __vite_glob_0_7,
  "/src/content/portfolio/love-bonito-blog.md": __vite_glob_0_8,
  "/src/content/portfolio/love-bonito-career.md": __vite_glob_0_9,
  "/src/content/portfolio/love-bonito-csr.md": __vite_glob_0_10,
  "/src/content/portfolio/love-bonito-return.md": __vite_glob_0_11,
  "/src/content/portfolio/noel-gifts.md": __vite_glob_0_12,
  "/src/content/portfolio/peruri-sign.md": __vite_glob_0_13,
  "/src/content/portfolio/sscorner.md": __vite_glob_0_14,
  "/src/content/portfolio/sushi-king.md": __vite_glob_0_15,
  "/src/content/portfolio/tokio-marine.md": __vite_glob_0_16,
  "/src/content/portfolio/unhcr.md": __vite_glob_0_17,
  "/src/content/portfolio/wvi.md": __vite_glob_0_18
});
const allProjects = Object.entries(modules).map(([path, raw]) => {
  const { data } = matter(
    /** @type {string} */
    raw
  );
  return {
    ...data,
    slug: path.split("/").pop().replace(".md", ""),
    section: data.featured ? "featured" : data.archived ? "archived" : "latest"
  };
}).sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));
function load() {
  return {
    projects: allProjects,
    featuredProjects: allProjects.filter((p) => p.featured),
    latestProjects: allProjects.filter((p) => !p.featured && !p.archived),
    archivedProjects: allProjects.filter((p) => p.archived)
  };
}
export {
  load
};

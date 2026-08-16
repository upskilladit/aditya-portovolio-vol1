export const personalInfo = {
  name: "Garry Audie",
  nickname: "Aditya",
  title: "Creator & Tech Explorer",
  tagline: "I translate complex tech into content that clicks.",
  bio: "Garry Audie is an AI creator based in Indonesia, helping global brands, technology companies, and GTM teams understand Indonesian audiences through creator-led content, product storytelling, and practical insight into AI tools and workflows.",
  aboutDetailed: "Garry Audie is an Indonesia-based creator covering AI tools, SaaS, creator workflows, and emerging technology through a commercially sharp but audience-friendly lens. With a background in videography and branded storytelling, he helps translate technical products into content that actually lands.",
  email: "business@adplay.id",
  phone: "(+62) 85176785180",
  location: "Tangerang, Indonesia • Available Worldwide",
  status: "Available for opportunities",
  socials: {
    youtube: "https://youtube.com/@garryaudie",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    github: "https://github.com/upskilladit"
  }
};

export const latestVideo = {
  id: "00",
  title: "Latest YouTube Video.",
  subtitle: "Watch the breakdown on the newest frontier models and AI workflows.",
  youtubeId: "dQw4w9WgXcQ", // Replaceable with real video ID
  thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  views: "45.2K views",
  duration: "14:20",
  topic: "DeepSeek vs Claude 3.7 vs Gemini 2.0 Benchmark"
};

export const blogArticles = [
  {
    id: "claude-secret-codes",
    title: "Claude Secret Codes: 100 Slash Command & Shortcut buat Claude",
    category: "AI Tools",
    readTime: "7 menit baca",
    excerpt: "Kumpulan 100 \"secret code\" buat Claude — slash command dan shortcut yang maksa Claude masuk ke mode, format, atau pola reasoning tertentu. Ini cara mikirin dan makainya biar nggak cuma gimmick.",
    date: "12 Feb 2026",
    badge: "100 Prompt & Shortcuts",
    coverTheme: "dark-terminal",
    content: `
# Claude Secret Codes: 100 Slash Command & Shortcut buat Claude

Banyak orang memakai Claude hanya sekadar mengetik prompt biasa. Padahal, dengan memanfaatkan struktur prompt engineering terarah dan pseudo-command slash, kita bisa memaksa model masuk ke reasoning pipeline yang jauh lebih tajam.

### 1. The Reasoning Mode Hack
Gunakan prompt terstruktur seperti \`/deepthink\` atau \`/architect\` untuk memisahkan fase *Planning* dari *Execution*.

\`\`\`bash
/deepthink --focus="database architecture" --constraints="zero downtime, PostgreSQL 16"
\`\`\`

### 2. Output Formatting Directives
Hindari jawaban bertele-tele dengan membatasi output hanya ke kode atau tabel terstruktur.
    `
  },
  {
    id: "cari-leads-firecrawl",
    title: "Cari Leads dari Web Pakai Claude Code + Firecrawl (Setup, Prompt, dan Skill)",
    category: "AI Tools",
    readTime: "8 menit baca",
    excerpt: "Lu bisa kasih Claude Code akses live ke web dan suruh dia ngumpulin leads. Tinggal deskripsiin bisnis yang lu cari, Claude nyari dan baca halamannya, terus balikin list rapi berisi company plus kontak publiknya.",
    date: "28 Jan 2026",
    badge: "Firecrawl + Claude Code",
    coverTheme: "fire-crawl",
    content: `
# Cari Leads dari Web Pakai Claude Code + Firecrawl

Otomatisasi lead generation menggunakan kombinasi web crawler berbasis Markdown dan LLM reasoning engine.

### Persiapan Setup
1. Dapatkan Firecrawl API Key
2. Pasang MCP Server Firecrawl di Claude Desktop / Claude Code
3. Eksekusi prompt automasi scraping yang mematuhi robots.txt
    `
  },
  {
    id: "humanize-ai-text",
    title: "Humanize AI Text: Bikin Tulisan Lolos Detektor dengan Skor 0% AI",
    category: "AI Tools",
    readTime: "10 menit baca",
    excerpt: "AI detector nggak baca makna tulisan lu, dia ngukur pola statistik (burstiness & perplexity). Hapus polanya, tulisan lu kebaca sebagai manusia. Ini cara bikin skill reusable yang nge-humanize semua tulisan.",
    date: "15 Jan 2026",
    badge: "0% AI Score Guide",
    coverTheme: "emerald-matrix",
    content: `
# Humanize AI Text: Memahami Burstiness dan Variasi Kalimat

Detektor AI seperti GPTZero atau Originality.ai tidak memiliki kecerdasan magis — mereka hanya mengukur metrik probabilitas distribusi kata (perplexity) dan variasi panjang kalimat (burstiness).

Dengan merestrukturisasi ritme kalimat dari monoton menjadi dinamis, teks AI Anda akan terasa alami dan humanis.
    `
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Mobile App Dev",
    category: "React Native • Content",
    views: "91.3K views",
    multiplier: "15.2x",
    description: "End-to-end showcase of building high-performance mobile application with smooth micro-interactions.",
    tag: "Dev",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Figure 03 Robot",
    category: "AI • Tech Review",
    views: "183K views",
    multiplier: "30.5x",
    description: "In-depth breakdown of humanoid robotics, neural control systems, and industrial automation capabilities.",
    tag: "AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "VERV Brand Campaign",
    category: "Brand • Creative",
    views: "19.5K views",
    multiplier: "3.3x",
    description: "High-fashion aesthetic cinematography, sound design, and viral narrative strategy for modern lifestyle brand.",
    tag: "Brand",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Gemini 3 Coverage",
    category: "AI • Tech Content",
    views: "12.7K views",
    multiplier: "2.1x",
    description: "Deep dive analysis into multimodal reasoning, real-time agentic programming, and benchmark results.",
    tag: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "AI Tools Showcase",
    category: "Dreamina • CapCut",
    views: "10K views",
    multiplier: "1.7x",
    description: "Practical tutorial on combining AI image generators with modern timeline editors for high retention short-form video.",
    tag: "AI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Replit Dev Content",
    category: "Developer • Tools",
    views: "20K views",
    multiplier: "3.3x",
    description: "Cloud deployment workflows, collaborative live coding, and rapid prototype validation for startups.",
    tag: "Dev",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  }
];

export const experienceTimeline = [
  {
    role: "Founder",
    company: "AdPlay Media Indonesia",
    type: "Full-time",
    period: "Feb 2021 — Present",
    highlights: [
      "Modern production house producing TV Commercials and branded videos.",
      "Worked with big brands — over 150+ total client projects and counting.",
      "Specialized in Education and E-Learning Videos.",
      "Professional real estate listings tour, 360 videos, and showcase."
    ]
  },
  {
    role: "Head of Media",
    company: "Akademi Crypto",
    type: "Contract",
    period: "Jan 2024 — Oct 2024",
    highlights: [
      "Directed high-performing educational content and visual branding strategy.",
      "Scaled viewer engagement across YouTube and social media channels."
    ]
  },
  {
    role: "Marketing Director",
    company: "Brix Performance",
    type: "Full-time",
    period: "Dec 2020 — Jul 2022",
    highlights: [
      "Built the company from scratch: logo, packaging design, social media, website, product photos, campaign videos, and guidelines for future employees.",
      "Drive sales growth from day 1 — BRIX Performance is now a well-known brand in Indonesia's car community, used by several national racing teams at Sentul International Circuit.",
      "BRIX has generated over Rp3 Billion in revenue."
    ]
  },
  {
    role: "Bachelor of Business Administration — BBA",
    company: "Institut Teknologi Bandung (ITB)",
    type: "Business, Management & Marketing",
    period: "2018 — 2021",
    highlights: [
      "Focused on consumer psychology, digital marketing, and venture scaling."
    ]
  }
];

export const digitalProducts = [
  {
    id: "template-portfolio",
    title: "Template Portfolio Kerja",
    category: "Portfolio",
    price: "Rp 59.000",
    description: "Template website portfolio modern dengan layout clean, responsif, dan siap dideploy.",
    badge: "Best Seller"
  },
  {
    id: "winners-pitchdeck",
    title: "Winners Pitchdeck",
    category: "Pitchdeck",
    price: "Rp 199.000",
    description: "Slide deck berstandar investor dengan narasi storytelling yang telah teruji.",
    badge: "Founder Pick"
  },
  {
    id: "iphone-creators-luts",
    title: "iPhone Creators LUTs",
    category: "LUTs",
    price: "Rp 79.000",
    description: "Color grading LUTs profesional untuk video cinematic menggunakan iPhone.",
    badge: "Popular"
  },
  {
    id: "sony-creators-luts",
    title: "Sony Creators LUTs",
    category: "LUTs",
    price: "Rp 79.000",
    description: "LUTs S-Log3 dan S-Cinetone khusus kamera Sony untuk hasil warna natural dan mewah.",
    badge: "Cinematic"
  },
  {
    id: "perfect-invoice",
    title: "The Perfect Invoice",
    category: "Template",
    price: "Rp 49.000",
    description: "Template invoice profesional otomatis untuk freelancer dan agensi kreatif.",
    badge: "Essential"
  },
  {
    id: "lut-cinespeed",
    title: "LUT CineSpeed by Garry",
    category: "LUTs",
    price: "Rp 99.000",
    description: "Pack LUT instan grading cepat 1-klik untuk content creator harian.",
    badge: "Pro Pack"
  }
];

export const codeSnippets = {
  "prompt.ts": `// AI-Website Prompt Templates
import { prompt } from '@garry/ai-kit';

const site = prompt
  .style('minimal-dark')
  .sections(['hero', 'features', 'cta'])
  .ai('claude-3.7')       // 🤖 Smart reasoning
  .deploy('vercel')       // 🚀 Instant live preview

export default site.build();`,

  "layout.tsx": `import React from 'react';
import { Hero, Portfolio, Products, Footer } from '@/components';

export default function Layout() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#121212]">
      <Hero />
      <Portfolio />
      <Products />
      <Footer />
    </main>
  );
}`,

  "deploy.ts": `// Auto-Sync Figma -> Antigravity -> GitHub
export async function syncFigmaToGitHub(fileKey: string) {
  const design = await fetchFigmaNodes(fileKey);
  const reactCode = generateComponents(design);
  await gitPush({ branch: 'main', message: 'Sync from Figma' });
  return { status: 'Deployed Live 🚀' };
}`
};

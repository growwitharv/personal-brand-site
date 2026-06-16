import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { blogPosts, siteConfig } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const blogContent: Record<string, string[]> = {
  "ai-gtm-playbook": [
    "The brands winning in 2026 aren't just using AI tools — they're rebuilding their go-to-market around AI-native workflows.",
    "Start with your highest-friction touchpoint. For most B2B companies, that's lead qualification and follow-up. Deploy an AI agent that scores inbound leads, drafts personalized responses, and routes hot prospects to your sales team within minutes.",
    "Next, integrate AI into your content engine. Not to replace your voice — to amplify it. Use AI for research, first drafts, and variant testing. Your team edits, refines, and publishes. Speed increases 3–5× without sacrificing quality.",
    "Finally, build feedback loops. Every campaign, every sales call, every piece of content should feed data back into your system. AI gets smarter. Your GTM gets tighter. Growth compounds.",
  ],
  "performance-marketing-framework": [
    "Most performance marketing fails because teams optimize for the wrong metric — usually CPA instead of LTV-adjusted ROAS.",
    "My framework has three layers: creative testing, budget allocation, and attribution.",
    "Creative testing runs in weekly sprints. We launch 5–10 variants per ad set, kill losers fast, and scale winners. Budget follows performance — never the other way around.",
    "Attribution is where most teams get lazy. I use a blended model: platform data for optimization, server-side tracking for truth, and cohort analysis for strategic decisions.",
  ],
  "sales-systems-that-convert": [
    "Sales isn't about charisma. It's about systems.",
    "Every high-converting sales process has four components: lead scoring, structured discovery, objection handling frameworks, and a clear close sequence.",
    "Lead scoring ensures your team spends time on prospects who can actually buy. Structured discovery uncovers pain, budget, and timeline in the first call — not the third.",
    "Build these systems once. Train your team. Measure conversion at each stage. Optimize the bottleneck. Repeat.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] ?? [
    "This is a placeholder article. Replace this content with your own writing in src/app/blog/[slug]/page.tsx or connect a CMS like Sanity or Contentful.",
  ];

  return (
    <article className="section-padding">
      <div className="container-narrow max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-ink-500 transition-colors hover:text-gold"
        >
          ← Back to blog
        </Link>

        <header className="mt-8">
          <p className="label">{post.category}</p>
          <h1 className="heading-lg mt-4 text-white">{post.title}</h1>
          <p className="mt-4 body-md">{post.excerpt}</p>
          <p className="mt-6 text-sm text-ink-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {post.readTime} · {siteConfig.name}
          </p>
        </header>

        <div className="prose-custom mt-12 space-y-6">
          {content.map((paragraph, i) => (
            <p key={i} className="body-lg text-ink-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ink-800 bg-ink-900/50 p-8 text-center">
          <h2 className="text-xl font-medium text-white">
            Want help implementing this?
          </h2>
          <p className="mt-3 body-md">
            Book a consultation and we&apos;ll apply these frameworks to your
            business.
          </p>
          <div className="mt-6">
            <Button href="/book-consultation">Book Consultation</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

import pool from "../config/db.js";

const initialArticles = [
  {
    title: "Understanding Corporate Governance in India",
    slug: "understanding-corporate-governance",
    excerpt: "An overview of corporate governance principles, regulatory compliance, and responsibilities under Indian corporate law.",
    category: "Corporate Law",
    read_time: "5 min read",
    cover_image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    content: "Corporate governance plays a crucial role in ensuring transparency, accountability, and ethical decision-making within organizations.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Legal Considerations in Property Transactions",
    slug: "property-transactions",
    excerpt: "Important legal aspects to consider before buying, selling, or transferring immovable property.",
    category: "Property Law",
    read_time: "6 min read",
    cover_image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    content: "Property transactions require careful legal verification, documentation and due diligence.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "The Importance of Arbitration in Commercial Disputes",
    slug: "commercial-arbitration",
    excerpt: "Understanding how arbitration provides efficient and confidential dispute resolution for businesses.",
    category: "Arbitration",
    read_time: "7 min read",
    cover_image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    content: "Commercial arbitration has become one of the preferred methods for resolving business disputes.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Fundamental Rights Under The Constitution",
    slug: "fundamental-rights",
    excerpt: "A practical guide to understanding fundamental rights and constitutional protections available to citizens.",
    category: "Constitutional Law",
    read_time: "8 min read",
    cover_image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    content: "The Constitution guarantees several fundamental rights to every citizen.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const seed = async () => {
  try {
    console.log("Starting database seed...");

    // Create inquiries table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(200),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create articles table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        category VARCHAR(100),
        read_time VARCHAR(50),
        cover_image VARCHAR(255),
        author VARCHAR(100) DEFAULT 'Vidhi Chambers',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Tables ensured to exist.");

    // Seed articles
    for (const article of initialArticles) {
      await pool.query(
        `INSERT INTO articles (title, slug, excerpt, content, category, read_time, cover_image)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (slug) DO NOTHING`,
        [
          article.title,
          article.slug,
          article.excerpt,
          article.content,
          article.category,
          article.read_time,
          article.cover_image
        ]
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Database seeding failed:", error);
  } finally {
    await pool.end();
    process.exit();
  }
};

seed();

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './hero.module.css'; 

export default function Hero() {
  return (
    <section id="overview" className={styles.heroSection}>
      {/* Left Side: Main Headline & Buttons */}
      <div className={styles.heroLeft}>
        <div className={styles.heroBadge}>
          <Sparkles size={14} />
          <span>KEYWORD SEARCH + EMBEDDING SIMILARITY</span>
        </div>

        <h1 className={styles.heroTitle}>
          A calm place for <span className={styles.heroHighlight}>technical Q&A</span>
        </h1>

        <p className={styles.heroDescription}>
          Post with enough context for peers to help in one pass. Search the archive <br/> by phrase or by meaning, 
          keep your threads in one place, and ground <br/> questions in course documents with retrieval-augmented generation (RAG) <br/> so answers cite the right syllabus, readings, and handouts.
        </p>

        <div className={styles.heroButtons}>
          <a href="/signup" className={styles.primaryBtn}>
            Get started <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn}>
            See how it works
          </a>
        </div>
      </div>

      {/* Right Side */}
    </section>
  );
}
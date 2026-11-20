import React from 'react';
import { MessageSquareCode } from 'lucide-react'
import styles from './navbar.module.css'; 

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      {/* 1. Left: Brand Logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logoBadge}>
            <MessageSquareCode size={20}/>
        </div>
        <div
        className={styles.brandTextGroup}>
        <span className={styles.brandName}>Evangadi Forum</span>
        <span
        className={styles.brandTagline}>learn together. ask with context.</span>
        </div>
      </div>

      {/* 2. Center: Navigation Links */}
      <nav className={styles.navLinks}>
        <a href="#overview" className={styles.navLink}>Overview</a>
        <a href="#rag" className={styles.navLink}>Course RAG</a>
        <a href="#how-it-works" className={styles.navLink}>How it works</a>
      </nav>

      {/* 3. Right: Auth Buttons */}
      <div className={styles.authButtons}>
        <a href="/login" className={styles.signInBtn}>Sign in</a>
        <a href="/signup" className={styles.createAccountBtn}>Create account</a>
      </div>
    </header>
  );
}
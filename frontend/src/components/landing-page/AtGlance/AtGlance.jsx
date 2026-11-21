import { CheckCircle2 } from "lucide-react";
import styles from "./AtAGlance.module.css";

const GLANCE_ITEMS = [
  {
    id: "markdown-threads",
    text: "Markdown threads and replies",
  },
  {
    id: "semantic-search",
    text: "Semantic search on question embeddings",
  },
  {
    id: "ai-draft-tips",
    text: "Optional AI draft tips when you ask or answer",
  },
  {
    id: "course-rag",
    label: "Course RAG:",
    text: "upload or sync course materials, retrieve the best chunks for each question, and answer with citations, not generic web text.",
  },
];

export default function AtAGlance() {
  return (
    <aside className={styles.card} aria-label="At a glance">
      <h2 className={styles.heading}>AT A GLANCE</h2>

      <ul className={styles.list}>
        {GLANCE_ITEMS.map(({ id, label, text }) => (
          <li key={id} className={styles.item}>
            <CheckCircle2
              size={16}
              strokeWidth={1.9}
              className={styles.checkIcon}
              aria-hidden="true"
            />
            <p className={styles.description}>
              {label && <strong className={styles.itemLabel}>{label} </strong>}
              {text}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
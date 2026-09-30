export default function TaskSummary({ activeCount, completedCount, totalCount }) {
  return (
    <section className="summary" aria-label="Task summary">
      <span>{activeCount} active</span>
      <span>{completedCount} completed</span>
      <span>{totalCount} total</span>
    </section>
  );
}
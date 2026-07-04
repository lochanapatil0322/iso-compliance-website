const checklist = document.querySelector("[data-checklist]");
const progressText = document.querySelector("[data-progress-text]");
const progressBar = document.querySelector("[data-progress-bar]");
const searchInput = document.querySelector("[data-search]");

function updateProgress() {
  if (!checklist || !progressText || !progressBar) return;

  const items = Array.from(checklist.querySelectorAll("input[type='checkbox']"));
  const completed = items.filter((item) => item.checked).length;
  const total = items.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  progressText.textContent = `Progress: ${completed} / ${total} completed`;
  progressBar.style.width = `${percentage}%`;
}

function filterChecklist() {
  if (!checklist || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const rows = Array.from(checklist.querySelectorAll(".check-item"));

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    row.hidden = query.length > 0 && !text.includes(query);
  });
}

if (checklist) {
  checklist.addEventListener("change", updateProgress);
  updateProgress();
}

if (searchInput) {
  searchInput.addEventListener("input", filterChecklist);
}

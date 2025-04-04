function toggleVisibility(id) {
  const current = document.getElementById(id);
  if (!current) return;

  const allSections = document.querySelectorAll('.pubextras-section');

  // Collapse all other sections
  allSections.forEach(section => {
    if (section.id !== id) {
      section.classList.remove('is-visible');
      section.style.maxHeight = '0px';
    }
  });

  const isVisible = current.classList.contains('is-visible');

  if (isVisible) {
    current.style.maxHeight = '0px';
    current.classList.remove('is-visible');
  } else {
    current.classList.add('is-visible');
    current.style.maxHeight = current.scrollHeight + 'px';
  }

  updateToggleButtons();
}

function updateToggleButtons() {
  document.querySelectorAll('[data-toggle-id]').forEach(button => {
    const id = button.getAttribute('data-toggle-id');
    const target = document.getElementById(id);
    if (!target) return;

    const isVisible = target.classList.contains('is-visible');

    // Determine label base
    let labelBase = "Section";
    if (id.includes("abstract")) labelBase = "Abstract";
    else if (id.includes("bibtex")) labelBase = "BibTeX";

    button.textContent = (isVisible ? "Hide " : "Show ") + labelBase;
  });
}

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.pubextras-section').forEach(el => {
    el.style.maxHeight = el.classList.contains('is-visible') ? el.scrollHeight + 'px' : '0px';
  });

  updateToggleButtons();
});

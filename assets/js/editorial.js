(() => {
  const toggle = document.querySelector('.theme-switch');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (_) { /* Device preference still works. */ }
  function setTheme(dark) {
    document.documentElement.toggleAttribute('data-dark', dark);
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector('meta[name="theme-color"]').content = dark ? '#191b1e' : '#ffffff';
  }
  setTheme(saved === 'dark' || ((!saved || saved === 'system') && preference.matches));
  toggle.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') !== 'dark';
    saved = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', saved); } catch (_) { /* Keep the choice for this page. */ }
    setTheme(dark);
  });
  preference.addEventListener('change', event => {
    if (!saved || saved === 'system') setTheme(event.matches);
  });
  document.addEventListener('click', async event => {
    const button = event.target.closest('.cite-btn');
    if (!button) return;
    const source = button.closest('.pub-entry').querySelector('.pub-bibtex');
    const status = button.parentElement.querySelector('.cite-status');
    let copied = false;
    try {
      await navigator.clipboard.writeText(source.textContent.trim());
      copied = true;
    } catch (_) {
      const input = document.createElement('textarea');
      input.value = source.textContent.trim();
      input.style.cssText = 'position:fixed;top:0;left:-9999px';
      document.body.append(input);
      input.select();
      try { copied = document.execCommand('copy'); } catch (_) { /* Show selectable citation below. */ }
      input.remove();
      button.focus({ preventScroll: true });
    }
    clearTimeout(button.resetTimer);
    if (copied) {
      status.textContent = 'Copied';
      button.classList.add('is-copied');
      button.resetTimer = setTimeout(() => { status.textContent = ''; button.classList.remove('is-copied'); }, 2000);
    } else {
      source.hidden = false;
      status.textContent = 'Select and copy below';
      source.focus();
    }
  });
})();

// Copy email address to clipboard with user feedback
const emailBtn = document.getElementById('copy-email-btn');
emailBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const email = 'kunaltayade58@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const original = emailBtn.textContent;
    emailBtn.textContent = '📋 Copied!';
    setTimeout(() => { emailBtn.textContent = original; }, 1500);
  }).catch(console.error);
});
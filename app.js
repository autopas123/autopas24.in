// Gate Controls
const statusEl = document.getElementById('gate-status');
const timerEl = document.getElementById('countdown-timer');
let timer = null;
const setStatus = s => statusEl.textContent = s;
const setCountdown = t => timerEl.textContent = t;

document.getElementById('gate-open-btn').onclick = () => {
  setStatus('Opening');
  startCountdown(10);
};
document.getElementById('gate-close-btn').onclick = () => {
  setStatus('Closing');
  startCountdown(10);
};
document.getElementById('gate-stop-btn').onclick = () => {
  setStatus('Stopped');
  stopCountdown();
};

function startCountdown(sec) {
  stopCountdown();
  setCountdown(sec);
  timer = setInterval(() => {
    sec--;
    setCountdown(sec);
    if (sec <= 0) {
      stopCountdown();
      setStatus('Complete');
    }
  }, 1000);
}
function stopCountdown() {
  clearInterval(timer);
  setCountdown(0);
}

// Authentication
const loginForm = document.getElementById('login-form');
loginForm.onsubmit = e => {
  e.preventDefault();
  // Add login logic here
};

const otpSection = document.getElementById('otp-section');
otpSection.querySelector('button').onclick = () => {
  // Add OTP verify logic here
};

document.getElementById('logout-btn').onclick = () => {
  // Add logout logic here
};

// Password Strength (simple example)
const pwdInput = loginForm.querySelector('input[type="password"]');
pwdInput.oninput = () => {
  const val = pwdInput.value;
  let str = 'Weak';
  if (val.length > 8 && /\d/.test(val) && /[A-Z]/.test(val)) str = 'Strong';
  else if (val.length > 5) str = 'Medium';
  document.getElementById('password-strength').textContent = `Strength: ${str}`;
};

// Localization & Accessibility
const langToggle = document.getElementById('lang-toggle');
langToggle.onclick = () => {
  document.getElementById('lang-loading').style.display = 'block';
  setTimeout(() => {
    document.getElementById('lang-loading').style.display = 'none';
    // Add language switch logic here
  }, 500);
};

document.getElementById('dark-mode-toggle').onclick = () => {
  document.body.classList.toggle('dark');
};

document.getElementById('font-size-increase').onclick = () => {
  document.body.style.fontSize = 'larger';
};
document.getElementById('font-size-decrease').onclick = () => {
  document.body.style.fontSize = 'smaller';
};
document.getElementById('contrast-toggle').onclick = () => {
  document.body.classList.toggle('high-contrast');
};

// UI Enhancements & Feedback
document.getElementById('sample-form').onsubmit = e => {
  e.preventDefault();
  document.getElementById('form-validation-feedback').textContent = 'Submitted!';
};

document.getElementById('animated-feedback-btn').onclick = () => {
  const toast = document.getElementById('toast');
  toast.textContent = 'Clicked!';
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 1000);
};

// User Profile
document.getElementById('profile-update-form').onsubmit = e => {
  e.preventDefault();
  // Add profile update logic here
};

// Notifications
document.getElementById('push-permission-prompt').onclick = () => {
  if ('Notification' in window) Notification.requestPermission();
};
document.getElementById('feedback-form').onsubmit = e => {
  e.preventDefault();
  // Add feedback logic here
};
document.getElementById('faq-popup-btn').onclick = () => {
  alert('FAQ popup');
};

// Pro Features
document.getElementById('disable-on-submit-btn').onclick = e => {
  e.target.disabled = true;
  // Add submit logic here
};

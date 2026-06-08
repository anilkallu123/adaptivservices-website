/**
 * Adaptiv AS — Cookie Consent + Analytics Loader
 * Replace POSTHOG_KEY with your project key from app.posthog.com (EU cloud: eu.posthog.com)
 */
const POSTHOG_KEY  = 'phc_nZeQhvSVDzQzmDmL6QauMKCyugAxcTduevy65pQWJBZw';
const POSTHOG_HOST = 'https://eu.i.posthog.com';

const CONSENT_KEY = 'adaptiv_cookie_consent';

/* ── Load PostHog (only after consent) ── */
function loadPostHog() {
  if (!POSTHOG_KEY) return;
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement('script')).type='text/javascript',p.crossOrigin='anonymous',p.async=!0,p.src=s.api_host+'/static/array.js',(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a='posthog',u.people=u.people||[],u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e},u.people.toString=function(){return u.toString(1)+'.people (stub)'},o='capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId'.split(' '),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init(POSTHOG_KEY, { api_host: POSTHOG_HOST, person_profiles: 'identified_only' });
}

/* ── Inject cookie banner ── */
function injectBanner() {
  const lang = localStorage.getItem('adaptiv_lang') || 'en';
  const isNo = lang === 'no';
  const title   = isNo ? 'Informasjonskapsel-innstillinger' : 'Cookie preferences';
  const body    = isNo ? 'Vi bruker analyse-informasjonskapsler for å forstå hvordan besøkende bruker dette nettstedet og forbedre det. Du kan godta eller avslå.' : 'We use analytics cookies to understand how visitors use this site and improve it. You can accept or decline.';
  const decline = isNo ? 'Avslå'  : 'Decline';
  const accept  = isNo ? 'Godta'  : 'Accept';

  const el = document.createElement('div');
  el.id = 'cookie-banner';
  el.innerHTML = `
    <div class="cookie-inner">
      <div class="cookie-text">
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-decline" onclick="setConsent('declined')">${decline}</button>
        <button class="cookie-btn cookie-accept" onclick="setConsent('accepted')">${accept}</button>
      </div>
    </div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('visible'));
}

/* ── Handle consent choice ── */
window.setConsent = function(choice) {
  localStorage.setItem(CONSENT_KEY, choice);
  const banner = document.getElementById('cookie-banner');
  if (banner) { banner.classList.remove('visible'); setTimeout(() => banner.remove(), 400); }
  if (choice === 'accepted') loadPostHog();
};

/* ── On load: check stored consent ── */
document.addEventListener('DOMContentLoaded', function() {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) {
    setTimeout(injectBanner, 1200); // slight delay so page renders first
  } else if (stored === 'accepted') {
    loadPostHog();
  }
});

/* ── Newsletter form handler ── */
window.handleNewsletter = async function(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button');
  const msg  = document.getElementById('newsletter-msg');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    const data = new FormData(form);
    const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      form.style.display = 'none';
      if (msg) { msg.style.display = 'block'; msg.textContent = 'You\'re in — we\'ll be in touch.'; }
    } else { throw new Error(); }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Subscribe';
    if (msg) { msg.style.display = 'block'; msg.textContent = 'Something went wrong — try again.'; msg.style.color = '#ff6b6b'; }
  }
};

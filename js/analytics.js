/*
 * Google Tag Manager with Google Consent Mode v2.
 *
 * Loaded synchronously at the top of <head> so the consent defaults are set
 * before GTM (and the GA4 tag configured inside it) runs. Everything is denied
 * until the visitor accepts in the cookie banner; their choice is kept in
 * localStorage and can be changed from the "Cookies" link in the footer.
 */
(function () {
  const GTM_ID = 'GTM-XXXXXXX';
  const STORAGE_KEY = 'pragmtk-consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  function readChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function saveChoice(choice) {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch (e) {}
  }

  // The site only uses analytics, so advertising signals always stay denied.
  function consentState(choice) {
    return {
      analytics_storage: choice === 'granted' ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    };
  }

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);

  const stored = readChoice();
  if (stored === 'granted' || stored === 'denied') {
    gtag('consent', 'update', consentState(stored));
  }

  // Standard GTM loader.
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const gtm = document.createElement('script');
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  document.head.appendChild(gtm);

  // Remove Google Analytics cookies when consent is withdrawn.
  function clearAnalyticsCookies() {
    const host = location.hostname;
    const domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
    document.cookie.split(';').forEach(function (cookie) {
      const name = cookie.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid' || name === '_gat') {
        domains.forEach(function (domain) {
          document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
        });
      }
    });
  }

  function setChoice(choice) {
    saveChoice(choice);
    gtag('consent', 'update', consentState(choice));
    window.dataLayer.push({ event: 'consent_update', analytics_consent: choice });
    if (choice === 'denied') clearAnalyticsCookies();
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.className = 'consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.hidden = true;
    banner.innerHTML =
      '<p class="consent-text">We use Google Analytics cookies to understand how people use this site. ' +
      'They are only set if you accept. See our <a href="/privacy#cookies">privacy policy</a>.</p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="consent-btn" data-consent="denied">Reject</button>' +
      '<button type="button" class="consent-btn consent-btn-primary" data-consent="granted">Accept</button>' +
      '</div>';

    banner.addEventListener('click', function (e) {
      const choice = e.target.getAttribute && e.target.getAttribute('data-consent');
      if (!choice) return;
      setChoice(choice);
      banner.hidden = true;
    });

    document.body.appendChild(banner);
    return banner;
  }

  function init() {
    const banner = buildBanner();
    if (readChoice() === null) banner.hidden = false;

    document.querySelectorAll('[data-consent-open]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        banner.hidden = false;
        banner.querySelector('.consent-btn-primary').focus();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

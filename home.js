// Add the IDs from AdSense after Google approves the site.
const adsenseConfig = {
  publisherId: "REPLACE_WITH_YOUR_PUBLISHER_ID",
  slotId: "REPLACE_WITH_YOUR_AD_SLOT_ID",
};

const hasValidAdsenseConfig =
  /^pub-\d+$/.test(adsenseConfig.publisherId) &&
  /^\d+$/.test(adsenseConfig.slotId);

if (hasValidAdsenseConfig) {
  document.querySelectorAll(".adsbygoogle").forEach((ad) => {
    ad.dataset.adClient = `ca-${adsenseConfig.publisherId}`;
    ad.dataset.adSlot = adsenseConfig.slotId;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  const adsenseScript = document.createElement("script");
  adsenseScript.async = true;
  adsenseScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${adsenseConfig.publisherId}`;
  adsenseScript.crossOrigin = "anonymous";
  document.head.appendChild(adsenseScript);
}

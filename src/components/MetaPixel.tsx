import React, { useEffect } from "react";

export function MetaPixel() {
  useEffect(() => {
    // Inisialisasi Meta Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    // Inisialisasi dan track PageView
    window.fbq("init", "1459739484809478");
    window.fbq("track", "PageView", {
      content_name: "LBM-Dripsender",
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1459739484809478&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>
    </>
  );
}

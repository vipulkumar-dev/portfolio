// GoogleAnalytics.tsx

import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-32FBS7Y85P`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-32FBS7Y85P');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

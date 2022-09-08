import React from "react";
import Script from "next/script";

const Crips: React.FC = () => {
  return (
    <Script
      id="crisp-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="32efcf16-b047-4c18-9950-9ccc0e91e03e";
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
      }}
    />
  );
};

export default Crips;

{
  /* <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="32efcf16-b047-4c18-9950-9ccc0e91e03e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> */
}

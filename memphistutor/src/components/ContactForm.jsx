import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";

    document.body.appendChild(script);

    const listener = () => {
      if (window.hbspt) {
        // @TS-ignore

        window.hbspt.forms.create({
          portalId: "23220584",
          formId: "4116efab-f18a-4dad-b5cb-e43020656043",
          target: "#hubspotForm",
        });
      }
    };

    script.addEventListener("load", listener);
    return () => {
      script.removeEventListener('load',listener)
   };
  }, []);

  return <div classname=""id="hubspotForm"></div>;
};
export default ContactForm;

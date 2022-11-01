import React, { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore

      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "23220584",
          formId: "4116efab-f18a-4dad-b5cb-e43020656043",
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div  style={{"margin":"80px", "padding":"80px" }}  > 
      <div  id="hubspotForm"></div>
    </div>
  );
};
export default Contact;

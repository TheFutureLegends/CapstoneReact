import React, { useEffect } from "react";

import { chatbot_key } from "key";

const Chatbot = () => {
  function addKommunicateListener(m) {
    var kommunicateSettings = {
      appId: chatbot_key,
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };

    // window.kommunicate = m;
    // m._globals = kommunicateSettings;

    window.kommunicate._globals = kommunicateSettings;
  }

  function createNewScriptElement() {
    var s = document.createElement("script");

    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

    return s;
  }

  function createNewHeadElement(script) {
    var h = document.getElementsByTagName("head")[0];

    h.appendChild(script);

    return h;
  }

  useEffect(() => {
    createNewHeadElement(createNewScriptElement());
    window.addEventListener(
      "kommunicate",
      addKommunicateListener(window.kommunicate)
    );
    return () => {
      createNewHeadElement(createNewScriptElement());

      window.removeEventListener(
        "kommunicate",
        addKommunicateListener(window.kommunicate)
      );
    };
  }, []);

  return <></>;
};

export default Chatbot;

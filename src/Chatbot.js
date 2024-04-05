import React, { useEffect } from 'react'
 import "./App.css"
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '6f14a0dd-8596-4fde-9dc4-1a177054f266',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '6f14a0dd-8596-4fde-9dc4-1a177054f266',
      stylesheet: "https://webchat-styler-css.botpress.app/prod/f11b3c2f-56c6-44bc-8ecd-fac245540ad6/v55458/style.css",
      enableConversationDeletion: true
        // "composerPlaceholder": "Chat with bot",
        // "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        // "botId": "6f14a0dd-8596-4fde-9dc4-1a177054f266",
        // "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        // "messagingUrl": "https://messaging.botpress.cloud",
        // "clientId": "6f14a0dd-8596-4fde-9dc4-1a177054f266",
        // "webhookId": "184e3447-d3df-4a4a-92bd-4f2c7c488abb",
        // "lazySocket": true,
        // "themeName": "prism",
        // "stylesheet": "https://webchat-styler-css.botpress.app/prod/f11b3c2f-56c6-44bc-8ecd-fac245540ad6/v70290/style.css",
        // "frontendVersion": "v1",
        // "useSessionStorage": true,
        // "showBotInfoPage": true,
        // "enableConversationDeletion": true,
        // "showPoweredBy": true,
        // "theme": "prism",
        // "themeColor": "#2563eb"
      })
    }
  }, [])
//   <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
// <script src="https://mediafiles.botpress.cloud/6f14a0dd-8596-4fde-9dc4-1a177054f266/webchat/config.js" defer></script>
 
  return <div id="webchat" />
}
 
export default Chatbot
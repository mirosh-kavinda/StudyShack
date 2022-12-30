import React  from 'react';
// Create a hook to seperate out logic.
const useHubspotChat = () => {
  const [ hasLoaded, setHasLoaded ] = React.useState(false);
  const [ activeConversation, setActiveConversation ] = React.useState(false);
  const eventRef = React.useRef(null);
  
  React.useEffect(() => {
    console.log('hey')
    
    // Add event listener.
    window.hsConversationsOnReady = [() => {
      setHasLoaded(true);
    }];
   
    // Create script component.
    let script = document.createElement('script');
    //add your portalId below to get the embeded chatBot
    
    script.src=`//js.hs-scripts.com/23220584.js`;
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      window.hsConversationsOnReady = [];
    }
    
  }, []);
  
  // Subscripe to conversation events.
  React.useEffect(() => {
    eventRef.current = (payload) => {
      setActiveConversation(payload.conversation.conversationId);
    }
   
  
  }, [hasLoaded]);
  
  const openHandler = React.useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.open();
    }
  }, [hasLoaded]);
  
  const closeHandler = React.useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.close();
    }
  }, [hasLoaded])
  
  return {
    hasLoaded, 
    activeConversation,
    openHandler,
    closeHandler
  };
}

export default useHubspotChat;

 

const ariaLiveDisplayContainer = document.createElement( 'div' );
ariaLiveDisplayContainer.style.position = 'fixed';
ariaLiveDisplayContainer.style.bottom = '20px';
ariaLiveDisplayContainer.style.left = '50%';
ariaLiveDisplayContainer.style.transform = 'translateX(-50%)';
ariaLiveDisplayContainer.style.fontSize = '1.2rem';
ariaLiveDisplayContainer.style.fontWeight = 'bold';
ariaLiveDisplayContainer.style.textAlign = 'center';
ariaLiveDisplayContainer.style.padding = '10px 20px';
ariaLiveDisplayContainer.style.borderRadius = '8px';
ariaLiveDisplayContainer.style.minWidth = '250px';
ariaLiveDisplayContainer.style.maxWidth = '400px';
ariaLiveDisplayContainer.style.display = 'flex';
ariaLiveDisplayContainer.style.flexDirection = 'column';
ariaLiveDisplayContainer.style.alignItems = 'center';
ariaLiveDisplayContainer.style.gap = '10px';
ariaLiveDisplayContainer.style.display = 'none'; // initial
ariaLiveDisplayContainer.style.zIndex = '9999';
document.body.appendChild( ariaLiveDisplayContainer );

const updateContainerVisibility = () => {
  ariaLiveDisplayContainer.style.display = ariaLiveDisplayContainer.children.length > 0 ? 'flex' : 'none';
};

export const showAriaLive = ( newMessage, isAssertive ) => {
  // Create a new message element
  const messageElement = document.createElement( 'div' );
  messageElement.style.padding = '10px';
  messageElement.style.background = isAssertive ? '#600' : '#000';
  messageElement.style.color = 'white';
  messageElement.style.borderRadius = '5px';
  messageElement.style.opacity = '1';
  messageElement.style.transition = 'opacity 0.8s ease-in-out';
  messageElement.style.display = 'flex';
  messageElement.style.alignItems = 'center';
  messageElement.style.justifyContent = 'space-between';
  messageElement.style.width = '100%';

  const messageText = document.createElement( 'span' );
  messageText.textContent = newMessage;

  messageElement.appendChild( messageText );

  // Insert new messages at the top
  ariaLiveDisplayContainer.prepend( messageElement );
  updateContainerVisibility();

  // Estimate time based on text length (~500ms per word, minimum 2s)
  const estimatedDuration = Math.max(2000, newMessage.split(' ').length * 500);

  setTimeout(() => {
    if ( messageElement.parentElement ) {
      messageElement.style.opacity = '0';
      setTimeout( () => {
        messageElement.remove();
        updateContainerVisibility();
      }, 800 );
    }
  }, estimatedDuration);
};
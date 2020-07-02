WebExtension.addExtensionRegister(() => {
  const target = document.getElementById('page2');
  if (!target) {
    const button = document.getElementById('myButton2B');
    if (button) button.parentNode.removeChild(button);
    return;
  }

  const button = document.getElementById('myButton2A');
  if (!button) {
    target.insertAdjacentHTML('afterend', "<button id='myButton2A' onClick=\"alert('Hello, World!');return false;\">Say Hello on page 2</button>");
    target.parentNode.insertAdjacentHTML('afterend', "<button id='myButton2B' onClick=\"alert('Bye, World!');return false;\">Say Bye on page 2</button>");
  }
});

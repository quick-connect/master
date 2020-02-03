// index.html
WebExtension.addExtensionRegister(() => {
  const target = document.querySelector('input[id=keyword]');
  if (!target) return;
  const button = document.querySelector('button[id=myButton]');
  if (!button) {
    target.insertAdjacentHTML('afterend', "<button id='myButton' onClick='openExternalSite();return false;'>Open Yahoo</button>");
  }
});

function openExternalSite() {
  const button = document.querySelector('button[id=myButton]');
  WebExtension.openFrame('https://www.yahoo.com/', button, {
    useProxy: true,
    onload: () => {
      const keyword = document.querySelector('input[id=keyword]').value;
      const frame = WebExtension.getFrameElement();
      frame.contentWindow.document.getElementById('header-search-input').value = keyword;
    }
  });
}

// ExtensionRegister function to add elements on Yahoo page
WebExtension.addExtensionRegister(() => {
  const frame = WebExtension.getFrameElement();
  if (!frame) return;
  const bannerButton = frame.contentWindow.document.getElementById('mega-banner-add');
  if (bannerButton && !bannerButton.hasAttribute('isWebExtension')) {
    bannerButton.setAttribute('isWebExtension', 'true');
    bannerButton.insertAdjacentHTML('afterend', "&nbsp;<button onClick='alert(\"Hello!\");return false;'>Say Hello</button>");
    bannerButton.insertAdjacentHTML('afterend', "&nbsp;<button onClick='window.parent.closeYahoo(document.getElementById(\"header-search-input\").value);return false;'>Close</button>");
  }
});

// A function to be called from Yahoo page
function closeYahoo(keyword) {
  WebExtension.sendResponse('yahooPage', keyword);
}

WebExtension.addResponseHandler('yahooPage', response => {
  console.log('res handler response=('+response+')');
  document.querySelector('input[id=keyword]').value = response;
});

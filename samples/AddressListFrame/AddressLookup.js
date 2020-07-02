async function lookup() {
  const zipcode = document.querySelector('input[id=zipcode]').value;
  const restUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='+zipcode;
  const response = await WebExtension.sendHttpRequest('get', restUrl);

  const list = [];
  for (let i=0; i < response.results.length; i++) {
    const result = response.results[i];
    list.push({pref:result.address1, address:result.address2+result.address3});
  }

  if (list.length == 0) {
    return;
  } else if (list.length == 1) {
    WebExtension.sendResponse('addressLookup', list[0]);
    return;
  }

  // Open a frame and show the addresses in the IFrame.
  const url = 'AddressList.html';
  const button = document.getElementById('myLookupButton');
  WebExtension.openFrame(url, button, {height:'', onload:function(){
    WebExtension.sendMessage('addressList', list);
  }});
}

WebExtension.addResponseHandler('addressLookup', response => {
  console.log('res handler response=('+response+')');
  if (response) {
    document.getElementById('pref').value = response.pref;
    document.getElementById('address').value = response.address;
  }
});

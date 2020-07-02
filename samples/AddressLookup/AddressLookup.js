function lookup() {
  const zipcode = document.querySelector('input[id=zipcode]').value;
  const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='+zipcode;

  // Make a HTTP request to call an AddressLookup REST API
  WebExtension.sendHttpRequest('get', url)
    .then(response => setAddress(response.results[0]));
}

function setAddress(address) {
  document.querySelector('input[id=pref]').value = address.address1;
  document.querySelector('input[id=address]').value = address.address2 + address.address3;
}

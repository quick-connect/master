async function lookup() {
  closeAddressTable();

  const zipcode = document.querySelector('input[id=zipcode]').value;
  const restUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='+zipcode;
  const response = await WebExtension.sendHttpRequest('get', restUrl);
  const results = response.results;

  if (results.length == 0) {
    return;
  } else if (results.length == 1) {
    populateAddress(results[0]);
    return;
  }

  const htmlUrl = 'http://localhost:8080/samples/AddressList/AddressList.jsp';
  openAddressTable(await WebExtension.sendHttpRequest('post', htmlUrl, {body: JSON.stringify(results)}));
}

function populateAddress(address) {
  closeAddressTable();
  console.log('res handler address=('+address+')');
  if (address) {
    if (typeof address === 'string') address = JSON.parse(address);
    document.getElementById('pref').value = address.address1;
    document.getElementById('address').value = address.address2+address.address3;
  }
}

function openAddressTable(response) {
  const button = document.getElementById('myLookupButton');
  button.insertAdjacentHTML('afterend', '<div id="addressTable">'+response+'</div>');
}

function closeAddressTable() {
  const addressTable = document.getElementById('addressTable');
  if (addressTable) addressTable.parentNode.removeChild(addressTable);
}

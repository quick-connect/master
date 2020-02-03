WebExtension.addExtensionRegister(() => {
  const target = document.querySelector('input[id=zipcode]');
  if (!target) return;
  const button = document.querySelector('button[id=myButton]');
  if (!button) {
    target.insertAdjacentHTML('afterend', "<button id='myButton' onClick='lookup();return false;'>Lookup</button>");
  }
});

async function lookup() {
  closeAddressTable();

  const zipcode = document.querySelector('input[id=zipcode]').value;
  const restUrl = 'https://api.zipaddress.net/?lang=rome&zipcode='+zipcode;
  const response = await WebExtension.sendHttpRequest('get', restUrl);

  const list = [response.data.pref+'|'+response.data.address]; // data returned from REST API

  // Add dummy addresses to show the results in address list.
  if (zipcode === '100-0006') {
    list.push('CHIBA|Test City');
    list.push('KANAGAWA|Yokohama City');
  }

  if (list.length < 2) {
    populateAddress(list[0]);
    return;
  }

  const htmlUrl = 'http://localhost:8080/samples/AddressListHtml/AddressList.jsp';
  openAddressTable(await WebExtension.sendHttpRequest('post', htmlUrl, {body: list.join(',')}));
}

function populateAddress(response) {
  closeAddressTable();
  console.log('res handler response=('+response+')');
  if (response) {
    const tokens = response.split('|');
    document.getElementById('pref').value = tokens[0];
    document.getElementById('address').value = tokens[1];
  }
}

function openAddressTable(response) {
  const button = document.getElementById('myButton');
  button.insertAdjacentHTML('afterend', '<div id="addressTable">'+response+'</div>');
}

function closeAddressTable() {
  const addressTable = document.getElementById('addressTable');
  if (addressTable) addressTable.parentNode.removeChild(addressTable);
}

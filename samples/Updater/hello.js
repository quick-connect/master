async function sayHello() {
  const xml = await getXmlContent('http://localhost:8080/samples/Updater/XmlResponse.jsp');
  const xmlMessage = xml.childNodes[0].childNodes[3].firstChild.nodeValue;
  const p = document.getElementsByTagName('p')[0];
  p.insertAdjacentHTML('beforebegin', '<div>'+xmlMessage+'</div>');

  const json = await getJsonContent('http://localhost:8080/samples/Updater/JsonResponse.jsp');
  const jsonMessage = json.response.message;
  p.insertAdjacentHTML('beforebegin', '<div>'+jsonMessage+'</div>');
}

function getXmlContent(url) {
  return new Promise(function(resolve) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function() {
      return resolve(xhr.responseXML);
    };
    xhr.send();
  });
}

function getJsonContent(url) {
  return new Promise(function(resolve) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('get', url, true);
    xhr.onload = function() {
      return resolve(xhr.response);
    };
    xhr.send();
  });
}

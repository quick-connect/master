function postData() {
  const url = 'http://localhost:8080/samples/POST/writePostData.jsp';
  WebExtension.sendHttpRequest('post', url, {
    body: {status: 'completed'},
  }).then(
    response => resolve(response),
    response => reject(response)
  );
}

function resolve() {
  window.location.reload();
}

function reject(response) {
  alert('Failed to post data. response=('+response+')');
}

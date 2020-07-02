function next(step) {
  const pageNoTag = document.getElementById('pageNo');
  const pageNo = parseInt(pageNoTag.innerHTML) + (step || 1);
  pageNoTag.innerHTML = pageNo;
  render(pageNo);
}

function prev() {
  next(-1);
}

function render(pageNo) {
  const content = document.getElementById('content');
  content.innerHTML = "<h2 id='page"+pageNo+"'>Page "+pageNo+"</h2>";
}

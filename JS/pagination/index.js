const baseURL = "https://jsonplaceholder.typicode.com/posts";

const itemsPerPage = 10;

let currentIndex = 0;

let pageNum = 0;

fetch(baseURL)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    renderPagination(res);
  });

function renderPagination(data) {
  const totalItemCount = data.length;
  pageNum = Math.ceil(totalItemCount / itemsPerPage);

  const pageButtonContainerEl = document.querySelector(".pagination__pages");

  for (let i = 0; i < pageNum; i++) {
    let button = document.createElement("button");
    button.addEventListener("click", () => {
      renderPage(i);
    });
    button.innerHTML = i + 1;
    pageButtonContainerEl.appendChild(button);
  }
  renderPage(currentIndex);

  function renderPage(pageIndex) {
    currentIndex = pageIndex;
    const tBody = document.querySelector(".container tbody");
    console.log(tBody);

    let tRows = "";
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end; i++) {
      const item = data[i];
      let tRow = `<tr>
      <td>${item.userId}</td>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.body}</td>
    
    </tr>`;
      tRows += tRow;
    }
    tBody.innerHTML = tRows;
  }

  document
    .querySelector(".pagination__prev-btn")
    .addEventListener("click", () => {
      console.log("clicked");
      if (currentIndex >= 1) {
        renderPage(currentIndex - 1);
      }
    });

  document
    .querySelector(".pagination__next-btn")
    .addEventListener("click", () => {
      if (currentIndex < pageNum) {
        renderPage(currentIndex + 1);
      }
    });
}

let activePage;
const pages = {
  lobby: getById("lobbypage"),
};

function closeAllPage() {
  for (const key in pages) {
    pages[key].classList.add("hidden");
  }
}

function changePage(pageKey) {
  closeAllPage();

  if (pages[pageKey]) {
    pages[pageKey].classList.remove("hidden");
  }
}

changePage("lobby");

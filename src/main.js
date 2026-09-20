form.addEventListener("submit", event => {
  event.preventDefault();
  const query = form.elements["search-text"].value.trim();
  if (query === "") {
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: "Something went wrong. Please try again later.",
      });
    })
    .finally(() => {
      hideLoader();
    });
});
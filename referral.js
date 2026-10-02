(function () {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");

  if (ref && ref.trim() !== "") {
    localStorage.setItem(
      "kinoAffiliateRef",
      ref.trim()
    );
  }
})();

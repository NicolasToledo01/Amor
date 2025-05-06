// ⚠️ Modifique apenas as variáveis!

var user = "Bela";

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  const iname = typeof user !== "undefined" ? user : "...";

  document.querySelectorAll("*").forEach((el) => {
    if (el.innerHTML.includes("${iname}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{iname\}/g, iname);
    }
  });
});
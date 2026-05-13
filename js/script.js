function showMenu(id){
  document.querySelectorAll(".menu")
    .forEach(m => m.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

function searchTable(inputId, frameId){
  let input = document.getElementById(inputId).value.toLowerCase();
  let iframe = document.getElementById(frameId);

  try {
    let innerDoc = iframe.contentWindow.document;
    let rows = innerDoc.querySelectorAll("table tr");

    rows.forEach((row, i) => {
      if(i === 0) return;
      row.style.display = row.innerText.toLowerCase().includes(input)
        ? ""
        : "none";
    });

  } catch (e) {
    console.log("Iframe dibatasi browser");
  }
}

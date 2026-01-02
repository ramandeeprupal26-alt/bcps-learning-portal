// SEARCH
document.getElementById("searchBox").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  document.querySelectorAll(".topic").forEach(topic=>{
    topic.style.display = topic.innerText.toLowerCase().includes(value)
      ? "block" : "none";
  });
});

// PROGRESS
function updateProgress(){
  let checks = document.querySelectorAll(".watchCheck");
  let done = [...checks].filter(c=>c.checked).length;
  let percent = Math.round((done / checks.length) * 100);

  document.getElementById("progressText").innerText =
    "Progress: " + percent + "%";

  let bar = document.getElementById("progressFill");
  bar.style.width = percent + "%";

  bar.style.background =
    percent <= 30 ? "red" :
    percent <= 70 ? "orange" : "green";
}

document.querySelectorAll(".watchCheck")
  .forEach(c=>c.addEventListener("change", updateProgress));

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{
  backToTop.style.display =
    window.scrollY > 300 ? "block" : "none";
});

backToTop.onclick = ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
};

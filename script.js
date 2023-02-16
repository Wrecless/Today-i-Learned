//colors for categories
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//create DOM elements
factsList.innerHTML = "";

//load data from Supabase
loadFacts()
async function loadFacts() {
  const res = await fetch("https://mhfmnvvracejequwhael.supabase.co/rest/v1/facts", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZm1udnZyYWNlamVxdXdoYWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzUxMjIsImV4cCI6MTk5MjA1MTEyMn0.6POVTH54BhJ8-NIca5Ml4U_dKO171uQF_Xua9wAWAA0",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZm1udnZyYWNlamVxdXdoYWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzUxMjIsImV4cCI6MTk5MjA1MTEyMn0.6POVTH54BhJ8-NIca5Ml4U_dKO171uQF_Xua9wAWAA0",
    }
  });
  const data = await res.json();
  //console.log(data);
  //const filteredData = data.filter((fact)=>fact.category === "society");

  createFactsList(data);
}

createFactsList(initialFacts);

function createFactsList(dataArray)
{
  const htmlArr = dataArray.map(
      (fact) => `
        <li class="fact">${fact.text} 
          <p>
              <a 
                class="source" 
                href="${fact.source}">(source)
              </a>
          </p>
          <span class="tag" style="background-color:${
          CATEGORIES.find((cat) => cat.name === fact.category).color}"
          >${fact.category}</span>
        </li>`);

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

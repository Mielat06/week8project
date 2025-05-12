console.log("My project");

async function getProducts() {
  console.log("I am getProducts, and I am about to fetch some data");
  const response = await fetch(
    "https://week8project-server.onrender.com/products"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(
    "I am getProducts, and I'm about to give the data to renderDataOntoPage()"
  );
  renderDataOntoPage(data);
  function renderDataOntoPage(apiResults) {}
  console.log(
    "I am renderDataOntoPage, and I am about to loop through the array"
  );
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (let index = 0; index < apiResults.length; index++) {
    const element = apiResults[index];
    console.log(element);

    const newName = document.createElement("h2");
    const newCatagory = document.createElement("p");

    newName.textContent = element.name;
    newCatagory.textContent = element.Catagory;

    resultsDiv.appendChild(newName);
    resultsDiv.appendChild(newCatagory);
    resultsDiv.append(newName, newCatagory);

    const postsBtn = document.getElementById("get-products-button");
    postsBtn.addEventListener("click", function () {
      console.log("I am about to call getProducts()");
      getProducts();
    });
  }
}

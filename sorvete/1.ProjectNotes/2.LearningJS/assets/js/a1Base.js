document.getElementById("Layout").innerHTML = `
<div>
  <select name="paths" id="idLinkSection">
      <option data-url="#" value="op0">-Sections</option>
      <option data-url="a1PrintTypes.html" value="op1">Print types</option>
      <option data-url="a2OperatorsAndConditions.html" value="op1">Operators and conditions</option>
      <option data-url="a3ArraysAndObjects.html" value="op1">Arrays and objects</option>
      <option data-url="a4LogicAndOrganization.html" value="op1">Conditions, functions, classes, and repetitive structures</option>
      <option data-url="a5Events.html" value="op1">Events</option>
      <option data-url="a6SetTime.html" value="op1">SetTime</option>
      <option data-url="a7Dates.html" value="op1">Dates</option>
      <option data-url="a8JSON.html" value="op1">JSON</option>

  </select>
</div>
<div>
  <select name="paths" id="idLinkLanguage">
      <option data-url="#" value="op0">-Languages</option>
      <option data-url="../1.HTMLandCSSnotes/a1ResumeAll.html" value="op1">HTML/CSS</option>
      <option data-url="../2.LearningJS/a1PrintTypes.html" value="op1">JS</option>
  </select>
</div>
`;


//
var selectElement = document.getElementById("idLinkSection");

selectElement.addEventListener("change", function() {
  var selectedOption = this.options[this.selectedIndex];
  var url = selectedOption.getAttribute("data-url");
  
  if (url) {
    window.location.href = url; // Use window.location.href para abrir na mesma guia
  }
  
  // Redefine o valor do select para a primeira opção
  selectElement.value = "op0";
});


//
var selectElement2 = document.getElementById("idLinkLanguage");

selectElement2.addEventListener("change", function() {
  var selectedOption2 = this.options[this.selectedIndex];
  var url2 = selectedOption2.getAttribute("data-url");
  
  if (url2) {
    window.open(url2, '_blank'); // Adiciona '_blank' para abrir em uma nova guia
  }
  
  // Redefine o valor do select para a primeira opção
  selectElement2.value = "op0";
});


//

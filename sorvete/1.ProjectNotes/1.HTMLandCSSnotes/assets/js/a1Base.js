Layout = document.getElementById("Layout");
Layout.innerHTML = `
<div>
<select name="paths" id="idLinkSection">
    <option data-url="#" value="op0">-Sections</option>
    <option data-url="a1ResumeAll.html" value="op1">Resume all</option>
    <option data-url="a2SemanticaHTML.html" value="op1">Semantic HTML</option>
    <option data-url="a3CustomizingBackground.html" value="op1">Background</option>
    <option data-url="a4DoingAMenu.html" value="op1">Doing a menu</option>
    <option data-url="a5DoingATable.html" value="op1">Table</option>
    <option data-url="a6DoingAFormulary.html" value="op1">Formulary</option>
    <option data-url="a7PseudoClasses;GoDeeper.html" value="op1">Pseudo classes</option>
    <option data-url="a8BoxModel.html" value="op1">Boxmodel</option>
    <option data-url="a9ColorsAndSizes.html" value="op1">Colors and sizes</option>
    <option data-url="a10TextAndPositions.html" value="op1">Text and positions</option>
    <option data-url="a11Breakpoints.html" value="op1">Breakpoints</option>
    <option data-url="a12FlexAndGrid.html" value="op1">Flex and grid</option>
    <option data-url="a13AudioAndVideo.html" value="op1">Audio and video</option>
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

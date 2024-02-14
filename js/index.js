// triangle calculate
function calculateTriangleArea(){
    // base input
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
//    console.log(typeof triangleBaseText)
   const base = parseFloat(triangleBaseText)
   console.log(base)

    // hight input
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const height =parseFloat(triangleHeightText);
    console.log(height)

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area)

    // calculate result set 

    const areaResult = document.getElementById('area-result');
    areaResult.innerText = area;

}
// rectangle are calculate  by short system

function calculateRectangleArea(){
    const base = getInputValueById('rectangle-base');
    const height = getInputValueById('rectangle-height');
    const rectangleArea = base * height;
    const areRectangle = document.getElementById('area-rectangle');
    areRectangle.innerText = rectangleArea;
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
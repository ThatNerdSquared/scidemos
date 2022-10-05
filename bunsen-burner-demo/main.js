const showToolTip = (sender) => {
    const toolTipID = sender.title + "-def"
    const tooltip = document.getElementById(toolTipID)
    const data = tooltip.getAttribute("infocopy")
    console.log(data)
}


// function myFunc (el) {

//   var tooltip = document.getElementById('myTooltip');
//   tooltip.style.display = 'block';
//   tooltip.innerHTML = el.title;
// }

// function myFuncHide(el) {
//   var tooltip = document.getElementById('myTooltip');
//   tooltip.style.display = 'none';
//   tooltip.innerHTML = '';
// }

// document.addEventListener('mousemove', function(e){
//     /*console.log(e.pageX);
//     console.log(e.pageY);*/
//     document.getElementById('myTooltip').style.left = (e.pageX+5)+"px";
//       document.getElementById('myTooltip').style.top = (e.pageY+5)+"px";
 
// });
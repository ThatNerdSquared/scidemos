const data = {
    // "chimney-def": "Called the chimney, the vertical tube of the Bunsen burner directs methane gas upwards into a jet, providing fuel for the fire. Do not touch it while the flame is burning because it is hot, and don’t put anything above it that is flammable or will be negatively affected by fire.",
    // "gas-tube-def": "The gas tube of a Bunsen Burner carries pressurised gas, normally methane, to the burner. This tube is normally attached to the gas valve, which releases a steady, controlled flow of gaseous gas into the burner. The tube is connected to the burner at the bottom, and ensures that the gas and oxygen from the oxygen valve are evenly mixed before it is burned. In addition, this tube is often made of rubber, which helps prevent gas leakages.",
    // "nozzle-def": "The nozzle of the burner is where the flame and remaining uncombusted gas emerge. This component is often made with metal, which is resistant to burning. Bunsen burners have a nozzle that is often quite wide, which helps maintain a controlled gas pressure.",
    // "oxygen-valve-def": "The oxygen valve of a Bunsen burner allows for oxygen to enter the burner and contribute to the oxidation of the gas. This valve contains a screw mechanism, which allows for controlled oxygen release into the burner. The oxygen valve is one of two ways to control the flame’s size, the other way being the gas valve. In addition, the oxygen valve is one of the key components for creating a successful flame, as it controls the amount of oxygen that enters the burner, thereby influencing the size of the flame.",
    "flint-def": "The flint is a tool that has a piece of flint attached to a small cup with a textured piece of steel in it. When the flint is struck against the steel, sparks are created."
};

const showToolTip = (sender) => {
    const toolTipID = sender.getAttribute("class") + "-def";
    console.log(toolTipID);
    // const tooltip = document.getElementById(toolTipID);
    // const data = tooltip.getAttribute("infocopy");
    const item = data[toolTipID]
    console.log(item);
};

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

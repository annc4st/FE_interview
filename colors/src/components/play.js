import colors from './colors_db.js';

let randomColor;

randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);

// const colorCategories = new Set(colors.map(color => color.category));
// console.log(colorCategories)

// const selectedCateg = "Brown";
// let arr = colors.filter(color => color.category === selectedCateg)
// console.log("arr", arr);

// const selectedColors = colors.filter(color => color.category === selectedCateg);
// console.log("selected line 11: ", selectedColors)

// console.log(colors.shades);
// let arrHex = colors.shades.map( col => col.hex)

// console.log(arrHex)

// for (let i = 0; i < colors.length; i++) {
//     // console.log(colors[i].shades);
//     const color = colors[i];
//     for (let j = 0; j < color.shades.length; j++) {
//         const shade = color.shades[j];
//     console.log("Name:", shade.name);
//     console.log("Hex:", shade.hex);
//     }
// }

// const allColorShades = colors.map(({shades}, i) => (
//     {shades.map((shade, j) => 
//     <div key={j} className="single-list-elem">
//         <div className="color-swatch" style={{ backgroundColor: shade.hex }}></div>
//         <div className="color-info">{shade.hex}</div>

//     </div>
//  ) }
// ))

// for (let i = 0; i < colors.length; i++) {
//     // console.log(colors[i].shades);
//     const color = colors[i];
//     for (let j = 0; j < color.shades.length; j++) {
//         const shade = color.shades[j];
//         allColorShades.push({ name: shade.name, hex: shade.hex });
//     }
// }



// console.log(allColorShades)
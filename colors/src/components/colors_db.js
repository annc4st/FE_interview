 const colors = [
  {
    category: "Black",
    shades: [
      { name: "Pure Black", hex: "#000000", rgb: "rgb(0, 0, 0)" },
      { name: "Charcoal", hex: "#36454F", rgb: "rgb(54, 69, 79)" },
      { name: "Dark Green", hex: "#023020", rgb: "rgb(2, 48, 32)" },
      { name: "Dark Purple", hex: "#301934", rgb: "rgb(48, 25, 52)" },
      { name: "Jet Black", hex: "#343434", rgb: "rgb(52, 52, 52)" },
      { name: "Licorice", hex: "#1B1212", rgb: "rgb(27, 18, 18)" },
      { name: "Matte Black", hex: "#28282B", rgb: "rgb(40, 40, 43)" },
      { name: "Midnight Blue", hex: "#191970", rgb: "rgb(25, 25, 112)" },
      { name: "Onyx", hex: "#353935", rgb: "rgb(53, 57, 53)" },
    ],
  },
  {
    category: "Blue",
    shades: [
      { name: "Aqua", hex: "#00FFFF", rgb: "rgb(0, 255, 255)" },
      { name: "Azure", hex: "#F0FFFF", rgb: "rgb(240, 255, 255)" },
      { name: "Baby Blue", hex: "#89CFF0", rgb: "rgb(137, 207, 240)" },
      { name: "Pure Blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)" },
      { name: "Blue Gray", hex: "#7393B3", rgb: "rgb(115, 147, 179)" },
      { name: "Blue Green", hex: "#088F8F", rgb: "rgb(8, 143, 143)" },
      { name: "Bright Blue", hex: "#0096FF", rgb: "rgb(0, 150, 255)" },
      { name: "Cadet Blue", hex: "#5F9EA0", rgb: "rgb(95, 158, 160)" },
      { name: "Cobalt Blue", hex: "#0047AB", rgb: "rgb(0, 71, 171)" },
      { name: "Cornflower Blue", hex: "#6495ED", rgb: "rgb(100, 149, 237)" },
      { name: "Cyan", hex: "#00FFFF", rgb: "rgb(0, 255, 255)" },
      { name: "Dark Blue", hex: "#00008B", rgb: "rgb(0, 0, 139)" },
      { name: "Denim", hex: "#6F8FAF", rgb: "rgb(111, 143, 175)" },
      { name: "Egyptian Blue", hex: "#1434A4", rgb: "rgb(20, 52, 164)" },
      { name: "Electric Blue", hex: "#7DF9FF", rgb: "rgb(125, 249, 255)" },
      { name: "Glaucous", hex: "#6082B6", rgb: "rgb(96, 130, 182)" },
      { name: "Jade", hex: "#00A36C", rgb: "rgb(0, 163, 108)" },
      { name: "Indigo", hex: "#3F00FF", rgb: "rgb(63, 0, 255)" },
      { name: "Iris", hex: "#5D3FD3", rgb: "rgb(93, 63, 211)" },
      { name: "Light Blue", hex: "#ADD8E6", rgb: "rgb(173, 216, 230)" },
      { name: "Midnight Blue", hex: "#191970", rgb: "rgb(25, 25, 112)" },
      { name: "Navy Blue", hex: "#000080", rgb: "rgb(0, 0, 128)" },
      { name: "Neon Blue", hex: "#1F51FF", rgb: "rgb(31, 81, 255)" },
      { name: "Pastel Blue", hex: "#A7C7E7", rgb: "rgb(167, 199, 231)" },
      { name: "Periwinkle", hex: "#CCCCFF", rgb: "rgb(204, 204, 255)" },
      { name: "Powder Blue", hex: "#B6D0E2", rgb: "rgb(182, 208, 226)" },
      { name: "Robin Egg Blue", hex: "#96DED1", rgb: "rgb(150, 222, 209)" },
      { name: "Royal Blue", hex: "#4169E1", rgb: "rgb(65, 105, 225)" },
      { name: "Sapphire Blue", hex: "#0F52BA", rgb: "rgb(15, 82, 186)" },
      { name: "Seafoam Green", hex: "#9FE2BF", rgb: "rgb(159, 226, 191)" },
      { name: "Sky Blue", hex: "#87CEEB", rgb: "rgb(135, 206, 235)" },
      { name: "Steel Blue", hex: "#4682B4", rgb: "rgb(70, 130, 180)" },
      { name: "Teal", hex: "#008080", rgb: "rgb(0, 128, 128)" },
      { name: "Turquoise", hex: "#40E0D0", rgb: "rgb(64, 224, 208)" },
      { name: "Ultramarine", hex: "#0437F2", rgb: "rgb(4, 55, 242)" },
      { name: "Verdigris", hex: "#40B5AD", rgb: "rgb(64, 181, 173)" },
      { name: "Zaffre", hex: "#0818A8", rgb: "rgb(8, 24, 168)" },
    ],
  },
  {
    category: "Brown",
    shades: [
      { name: "Almond", hex: "#EADDCA", rgb: "rgb(234, 221, 202)" },
      { name: "Brass", hex: "#E1C16E", rgb: "rgb(225, 193, 110)" },
      { name: "Bronze", hex: "#CD7F32", rgb: "rgb(205, 127, 50)" },
      { name: "Pure Brown", hex: "#A52A2A", rgb: "rgb(165, 42, 42)" },
      { name: "Buff", hex: "#DAA06D", rgb: "rgb(218, 160, 109)" },
      { name: "Burgundy", hex: "#800020", rgb: "rgb(128, 0, 32)" },
      { name: "Burnt Sienna", hex: "#E97451", rgb: "rgb(233, 116, 81)" },
      { name: "Burnt Umber", hex: "#6E260E", rgb: "rgb(110, 38, 14)" },
      { name: "Camel", hex: "#C19A6B", rgb: "rgb(193, 154, 107)" },
      { name: "Chestnut", hex: "#954535", rgb: "rgb(149, 69, 53)" },
      { name: "Chocolate", hex: "#7B3F00", rgb: "rgb(123, 63, 0)" },
      { name: "Cinnamon", hex: "#D27D2D", rgb: "rgb(210, 125, 45)" },
      { name: "Coffee", hex: "#6F4E37", rgb: "rgb(111, 78, 55)" },
      { name: "Cognac", hex: "#834333", rgb: "rgb(131, 67, 51)" },
      { name: "Copper", hex: "#B87333", rgb: "rgb(184, 115, 51)" },
      { name: "Cordovan", hex: "#814141", rgb: "rgb(129, 65, 65)" },
      { name: "Dark Brown", hex: "#5C4033", rgb: "rgb(92, 64, 51)" },
      { name: "Dark Red", hex: "#8B0000", rgb: "rgb(139, 0, 0)" },
      { name: "Dark Tan", hex: "#988558", rgb: "rgb(152, 133, 88)" },
      { name: "Ecru", hex: "#C2B280", rgb: "rgb(194, 178, 128)" },
      { name: "Fallow", hex: "#C19A6B", rgb: "rgb(193, 154, 107)" },
      { name: "Fawn", hex: "#E5AA70", rgb: "rgb(229, 170, 112)" },
      { name: "Garnet", hex: "#9A2A2A", rgb: "rgb(154, 42, 42)" },
      { name: "Golden Brown", hex: "#966919", rgb: "rgb(150, 105, 25)" },
      { name: "Khaki", hex: "#F0E68C", rgb: "rgb(240, 230, 140)" },
      { name: "Light Brown", hex: "#C4A484", rgb: "rgb(196, 164, 132)" },
      { name: "Mahogany", hex: "#C04000", rgb: "rgb(192, 64, 0)" },
      { name: "Maroon", hex: "#800000", rgb: "rgb(128, 0, 0)" },
      { name: "Mocha", hex: "#967969", rgb: "rgb(150, 121, 105)" },
      { name: "Nude", hex: "#F2D2BD", rgb: "rgb(242, 210, 189)" },
      { name: "Ochre", hex: "#CC7722", rgb: "rgb(204, 119, 34)" },
      { name: "Olive Green", hex: "#808000", rgb: "rgb(128, 128, 0)" },
      { name: "Oxblood", hex: "#4A0404", rgb: "rgb(74, 4, 4)" },
      { name: "Puce", hex: "#A95C68", rgb: "rgb(169, 92, 104)" },
      { name: "Red Brown", hex: "#A52A2A", rgb: "rgb(165, 42, 42)" },
      { name: "Red Ochre", hex: "#913831", rgb: "rgb(145, 56, 49)" },
      { name: "Russet", hex: "#80461B", rgb: "rgb(128, 70, 27)" },
      { name: "Saddle Brown", hex: "#8B4513", rgb: "rgb(139, 69, 19)" },
      { name: "Sand", hex: "#C2B280", rgb: "rgb(194, 178, 128)" },
      { name: "Sienna", hex: "#A0522D", rgb: "rgb(160, 82, 45)" },
      { name: "Tan", hex: "#D2B48C", rgb: "rgb(210, 180, 140)" },
      { name: "Taupe", hex: "#483C32", rgb: "rgb(72, 60, 50)" },
      { name: "Tuscan Red", hex: "#7C3030", rgb: "rgb(124, 48, 48)" },
      { name: "Wheat", hex: "#F5DEB3", rgb: "rgb(245, 222, 179)" },
      { name: "Wine", hex: "#722F37", rgb: "rgb(114, 47, 55)" },
    ],
  },
  {
    category: "Gray",
    shades: [
      { name: "Ash Gray", hex: "#B2BEB5", rgb: "rgb(178, 190, 181)" },
      { name: "Blue Gray", hex: "#7393B3", rgb: "rgb(115, 147, 179)" },
      { name: "Charcoal", hex: "#36454F", rgb: "rgb(54, 69, 79)" },
      { name: "Dark Gray", hex: "#A9A9A9", rgb: "rgb(169, 169, 169)" },
      { name: "Glaucous", hex: "#6082B6", rgb: "rgb(96, 130, 182)" },
      { name: "Pure Gray", hex: "#808080", rgb: "rgb(128, 128, 128)" },
      { name: "Gunmetal Gray", hex: "#818589", rgb: "rgb(129, 133, 137)" },
      { name: "Light Gray", hex: "#D3D3D3", rgb: "rgb(211, 211, 211)" },
      { name: "Pewter", hex: "#899499", rgb: "rgb(137, 148, 153)" },
      { name: "Platinum", hex: "#E5E4E2", rgb: "rgb(229, 228, 226)" },
      { name: "Sage Green", hex: "#8A9A5B", rgb: "rgb(138, 154, 91)" },
      { name: "Silver", hex: "#C0C0C0", rgb: "rgb(192, 192, 192)" },
      { name: "Slate Gray", hex: "#708090", rgb: "rgb(112, 128, 144)" },
      { name: "Smoke", hex: "#848884", rgb: "rgb(132, 136, 132)" },
      { name: "Steel Gray", hex: "#71797E", rgb: "rgb(113, 121, 126)" },
    ],
  },

  {
    category: "Green",
    shades: [
      { name: "Aqua", hex: "#00FFFF", rgb: "rgb(0, 255, 255)" },
      { name: "Aquamarine", hex: "#7FFFD4", rgb: "rgb(127, 255, 212)" },
      { name: "Army Green", hex: "#454B1B", rgb: "rgb(69, 75, 27)" },
      { name: "Blue Green", hex: "#088F8F", rgb: "rgb(8, 143, 143)" },
      { name: "Bright Green", hex: "#AAFF00", rgb: "rgb(170, 255, 0)" },
      { name: "Cadet Blue", hex: "#5F9EA0", rgb: "rgb(95, 158, 160)" },
      { name: "Cadmium Green", hex: "#097969", rgb: "rgb(9, 121, 105)" },
      { name: "Celadon", hex: "#AFE1AF", rgb: "rgb(175, 225, 175)" },
      { name: "Chartreuse", hex: "#DFFF00", rgb: "rgb(223, 255, 0)" },
      { name: "Citrine", hex: "#E4D00A", rgb: "rgb(228, 208, 10)" },
      { name: "Cyan", hex: "#00FFFF", rgb: "rgb(0, 255, 255)" },
      { name: "Dark Green", hex: "#023020", rgb: "rgb(2, 48, 32)" },
      { name: "Electric Blue", hex: "#7DF9FF", rgb: "rgb(125, 249, 255)" },
      { name: "Emerald Green", hex: "#50C878", rgb: "rgb(80, 200, 120)" },
      { name: "Eucalyptus", hex: "#5F8575", rgb: "rgb(95, 133, 117)" },
      { name: "Fern Green", hex: "#4F7942", rgb: "rgb(79, 121, 66)" },
      { name: "Forest Green", hex: "#228B22", rgb: "rgb(34, 139, 34)" },
      { name: "Grass Green", hex: "#7CFC00", rgb: "rgb(124, 252, 0)" },
      { name: "Pure Green", hex: "#008000", rgb: "rgb(0, 128, 0)" },
      { name: "Hunter Green", hex: "#355E3B", rgb: "rgb(53, 94, 59)" },
      { name: "Jade", hex: "#00A36C", rgb: "rgb(0, 163, 108)" },
      { name: "Jungle Green", hex: "#2AAA8A", rgb: "rgb(42, 170, 138)" },
      { name: "Kelly Green", hex: "#4CBB17", rgb: "rgb(76, 187, 23)" },
      { name: "Light Green", hex: "#90EE90", rgb: "rgb(144, 238, 144)" },
      { name: "Lime Green", hex: "#32CD32", rgb: "rgb(50, 205, 50)" },
      { name: "Lincoln Green", hex: "#478778", rgb: "rgb(71, 135, 120)" },
      { name: "Malachite", hex: "#0BDA51", rgb: "rgb(11, 218, 81)" },
      { name: "Mint Green", hex: "#98FB98", rgb: "rgb(152, 251, 152)" },
      { name: "Moss Green", hex: "#8A9A5B", rgb: "rgb(138, 154, 91)" },
      { name: "Neon Green", hex: "#0FFF50", rgb: "rgb(15, 255, 80)" },
      { name: "Nyanza", hex: "#ECFFDC", rgb: "rgb(236, 255, 220)" },
      { name: "Olive Green", hex: "#808000", rgb: "rgb(128, 128, 0)" },
      { name: "Pastel Green", hex: "#C1E1C1", rgb: "rgb(193, 225, 193)" },
      { name: "Pear", hex: "#C9CC3F", rgb: "rgb(201, 204, 63)" },
      { name: "Peridot", hex: "#B4C424", rgb: "rgb(180, 196, 36)" },
      { name: "Pistachio", hex: "#93C572", rgb: "rgb(147, 197, 114)" },
      { name: "Robin Egg Blue", hex: "#96DED1", rgb: "rgb(150, 222, 209)" },
      { name: "Sage Green", hex: "#8A9A5B", rgb: "rgb(138, 154, 91)" },
      { name: "Sea Green", hex: "#2E8B57", rgb: "rgb(46, 139, 87)" },
      { name: "Seafoam Green", hex: "#9FE2BF", rgb: "rgb(159, 226, 191)" },
      { name: "Shamrock Green", hex: "#009E60", rgb: "rgb(0, 158, 96)" },
      { name: "Spring Green", hex: "#00FF7F", rgb: "rgb(0, 255, 127)" },
      { name: "Teal", hex: "#008080", rgb: "rgb(0, 128, 128)" },
      { name: "Turquoise", hex: "#40E0D0", rgb: "rgb(64, 224, 208)" },
      { name: "Vegas Gold", hex: "#C4B454", rgb: "rgb(196, 180, 84)" },
      { name: "Verdigris", hex: "#40B5AD", rgb: "rgb(64, 181, 173)" },
      { name: "Viridian", hex: "##40826D", rgb: "rgb(64, 130, 109)" },
    ],
  },
  {
    category: "Orange",
    shades: [
      { name: "Amber", hex: "#FFBF00", rgb: "rgb(255, 191, 0)" },
      { name: "Apricot", hex: "#FBCEB1", rgb: "rgb(251, 206, 177)" },
      { name: "Bisque", hex: "#F2D2BD", rgb: "rgb(242, 210, 189)" },
      { name: "Bright Orange", hex: "#FFAC1C", rgb: "rgb(255, 172, 28)" },
      { name: "Bronze", hex: "#CD7F32", rgb: "rgb(205, 127, 50)" },
      { name: "Buff", hex: "#DAA06D", rgb: "rgb(218, 160, 109)" },
      { name: "Burnt Orange", hex: "#CC5500", rgb: "rgb(204, 85, 0)" },
      { name: "Burnt Sienna", hex: "#E97451", rgb: "rgb(233, 116, 81)" },
      { name: "Butterscotch", hex: "#E3963E", rgb: "rgb(227, 150, 62)" },
      { name: "Cadmium Orange", hex: "#F28C28", rgb: "rgb(242, 140, 40)" },
      { name: "Cinnamon", hex: "#D27D2D", rgb: "rgb(210, 125, 45)" },
      { name: "Copper", hex: "#B87333", rgb: "rgb(184, 115, 51)" },
      { name: "Coral", hex: "#FF7F50", rgb: "rgb(255, 127, 80)" },
      { name: "Coral Pink", hex: "#F88379", rgb: "rgb(248, 131, 121)" },
      { name: "Dark Orange", hex: "#8B4000", rgb: "rgb(139, 64, 0)" },
      { name: "Desert", hex: "#FAD5A5", rgb: "rgb(250, 213, 165)" },
      { name: "Gamboge", hex: "#E49B0F", rgb: "rgb(228, 155, 15)" },
      { name: "Golden Yellow", hex: "#FFC000", rgb: "rgb(255, 192, 0)" },
      { name: "Goldenrod", hex: "#DAA520", rgb: "rgb(218, 165, 32)" },
      { name: "Light Orange", hex: "#FFD580", rgb: "rgb(255, 213, 128)" },
      { name: "Mahogany", hex: "#C04000", rgb: "rgb(192, 64, 0)" },
      { name: "Mango", hex: "#F4BB44", rgb: "rgb(244, 187, 68)" },
      { name: "Navajo White", hex: "#FFDEAD", rgb: "rgb(255, 222, 173)" },
      { name: "Neon Orange", hex: "#FF5F1F", rgb: "rgb(255, 95, 31)" },
      { name: "Ochre", hex: "#CC7722", rgb: "rgb(204, 119, 34)" },
      { name: "Pure Orange", hex: "#FFA500", rgb: "rgb(255, 165, 0)" },
      { name: "Pastel Orange", hex: "#FAC898", rgb: "rgb(250, 200, 152)" },
      { name: "Peach", hex: "#FFE5B4", rgb: "rgb(255, 229, 180)" },
      { name: "Persimmon", hex: "#EC5800", rgb: "rgb(236, 88, 0)" },
      { name: "Pink Orange", hex: "#F89880", rgb: "rgb(248, 152, 128)" },
      { name: "Poppy", hex: "#E35335", rgb: "rgb(227, 83, 53)" },
      { name: "Pumpkin Orange", hex: "#FF7518", rgb: "rgb(255, 117, 24)" },
      { name: "Red Orange", hex: "#FF4433", rgb: "rgb(255, 68, 51)" },
      { name: "Safety Orange", hex: "#FF5F15", rgb: "rgb(255, 95, 21)" },
      { name: "Salmon", hex: "#FA8072", rgb: "rgb(250, 128, 114)" },
      { name: "Seashell", hex: "#FFF5EE", rgb: "rgb(255, 245, 238)" },
      { name: "Sienna", hex: "#A0522D", rgb: "rgb(160, 82, 45)" },
      { name: "Sunset Orange", hex: "#FA5F55", rgb: "rgb(250, 95, 85)" },
      { name: "Tangerine", hex: "#F08000", rgb: "rgb(240, 128, 0)" },
      { name: "Terra Cotta", hex: "#E3735E", rgb: "rgb(227, 115, 94)" },
      { name: "Yellow Orange", hex: "#FFAA33", rgb: "rgb(255, 170, 51)" },
    ],
  },
  {
    category: "Pink",
    shades: [
      { name: "Amaranth", hex: "#9F2B68", rgb: "rgb(159, 43, 104)" },
      { name: "Bisque", hex: "#F2D2BD", rgb: "rgb(242, 210, 189)" },
      { name: "Cerise", hex: "#DE3163", rgb: "rgb(222, 49, 99)" },
      { name: "Claret", hex: "#811331", rgb: "rgb(129, 19, 49)" },
      { name: "Coral", hex: "#FF7F50", rgb: "rgb(255, 127, 80)" },
      { name: "Coral Pink", hex: "#F88379", rgb: "rgb(248, 131, 121)" },
      { name: "Crimson", hex: "#DC143C", rgb: "rgb(220, 20, 60)" },
      { name: "Dark Pink", hex: "#AA336A", rgb: "rgb(170, 51, 106)" },
      { name: "Dusty Rose", hex: "#C9A9A6", rgb: "rgb(201, 169, 166)" },
      { name: "Fuchsia", hex: "#FF00FF", rgb: "rgb(255, 0, 255)" },
      { name: "Hot Pink", hex: "#FF69B4", rgb: "rgb(255, 105, 180)" },
      { name: "Light Pink", hex: "#FFB6C1", rgb: "rgb(255, 182, 193)" },
      { name: "Magenta", hex: "#FF00FF", rgb: "rgb(255, 0, 255)" },
      { name: "Millennial Pink", hex: "#F3CFC6", rgb: "rgb(243, 207, 198)" },
      { name: "Mulberry", hex: "#770737", rgb: "rgb(119, 7, 55)" },
      { name: "Neon Pink", hex: "#FF10F0", rgb: "rgb(255, 16, 240)" },
      { name: "Orchid", hex: "#DA70D6", rgb: "rgb(218, 112, 214)" },
      { name: "Pastel Pink", hex: "#F8C8DC", rgb: "rgb(248, 200, 220)" },
      { name: "Pastel Red", hex: "#FAA0A0", rgb: "rgb(250, 160, 160)" },
      { name: "Pure Pink", hex: "#FFC0CB", rgb: "rgb(255, 192, 203)" },
      { name: "Pink Orange", hex: "#F89880", rgb: "rgb(248, 152, 128)" },
      { name: "Plum", hex: "#673147", rgb: "rgb(103, 49, 71)" },
      { name: "Puce", hex: "#A95C68", rgb: "rgb(169, 92, 104)" },
      { name: "Purple", hex: "#800080", rgb: "rgb(128, 0, 128)" },
      { name: "Raspberry", hex: "#E30B5C", rgb: "rgb(227, 11, 92)" },
      { name: "Red Purple", hex: "#953553", rgb: "rgb(149, 53, 83)" },
      { name: "Rose", hex: "#F33A6A", rgb: "rgb(243, 58, 106)" },
      { name: "Rose Gold", hex: "#E0BFB8", rgb: "rgb(224, 191, 184)" },
      { name: "Rose Red", hex: "#C21E56", rgb: "rgb(194, 30, 86)" },
      { name: "Ruby Red", hex: "#E0115F", rgb: "rgb(224, 17, 95)" },
      { name: "Salmon", hex: "#FA8072", rgb: "rgb(250, 128, 114)" },
      { name: "Seashell", hex: "#FFF5EE", rgb: "rgb(255, 245, 238)" },
      { name: "Thistle", hex: "#D8BFD8", rgb: "rgb(216, 191, 216)" },
      { name: "Watermelon Pink", hex: "#E37383", rgb: "rgb(227, 115, 131)" },
    ],
  },
  {
    category: "Purple",
    shades: [
      { name: "Amaranth", hex: "#9F2B68", rgb: "rgb(159, 43, 104)" },
      { name: "Bright Purple", hex: "#BF40BF", rgb: "rgb(191, 64, 191)" },
      { name: "Burgundy", hex: "#800020", rgb: "rgb(128, 0, 32)" },
      { name: "Byzantium", hex: "#702963", rgb: "rgb(112, 41, 99)" },
      { name: "Dark Pink", hex: "#AA336A", rgb: "rgb(170, 51, 106)" },
      { name: "Dark Purple", hex: "#301934", rgb: "rgb(48, 25, 52)" },
      { name: "Eggplant", hex: "#483248", rgb: "rgb(72, 50, 72)" },
      { name: "Iris", hex: "#5D3FD3", rgb: "rgb(93, 63, 211)" },
      { name: "Lavender", hex: "#E6E6FA", rgb: "rgb(230, 230, 250)" },
      { name: "Light Purple", hex: "#CBC3E3", rgb: "rgb(203, 195, 227)" },
      { name: "Light Violet", hex: "#CF9FFF", rgb: "rgb(207, 159, 255)" },
      { name: "Lilac", hex: "#AA98A9", rgb: "rgb(170, 152, 169)" },
      { name: "Mauve", hex: "#E0B0FF", rgb: "rgb(224, 176, 255)" },
      { name: "Mauve Taupe", hex: "#915F6D", rgb: "rgb(145, 95, 109)" },
      { name: "Mulberry", hex: "#770737", rgb: "rgb(119, 7, 55)" },
      { name: "Orchid", hex: "#DA70D6", rgb: "rgb(218, 112, 214)" },
      { name: "Pastel Purple", hex: "#C3B1E1", rgb: "rgb(195, 177, 225)" },
      { name: "Periwinkle", hex: "#CCCCFF", rgb: "rgb(204, 204, 255)" },
      { name: "Plum", hex: "#673147", rgb: "rgb(103, 49, 71)" },
      { name: "Puce", hex: "#A95C68", rgb: "rgb(169, 92, 104)" },
      { name: "Pure Purple", hex: "#800080", rgb: "rgb(128, 0, 128)" },
      { name: "Quartz", hex: "#51414F", rgb: "rgb(81, 65, 79)" },
      { name: "Red Purple", hex: "#953553", rgb: "rgb(149, 53, 83)" },
      { name: "Thistle", hex: "#D8BFD8", rgb: "rgb(216, 191, 216)" },
      { name: "Tyrian Purple", hex: "#630330", rgb: "rgb(99, 3, 48)" },
      { name: "Violet", hex: "#7F00FF", rgb: "rgb(127, 0, 255)" },
      { name: "Wine", hex: "#722F37", rgb: "rgb(114, 47, 55)" },
      { name: "Wisteria", hex: "#BDB5D5", rgb: "rgb(189, 181, 213)" },
    ],
  },
  {
    category: "Red",
    shades: [
      { name: "Blood Red", hex: "#880808", rgb: "rgb(136, 8, 8)" },
      { name: "Brick Red", hex: "#AA4A44", rgb: "rgb(170, 74, 68)" },
      { name: "Bright Red", hex: "#EE4B2B", rgb: "rgb(238, 75, 43)" },
      { name: "Brown", hex: "#A52A2A", rgb: "rgb(165, 42, 42)" },
      { name: "Burgundy", hex: "#800020", rgb: "rgb(128, 0, 32)" },
      { name: "Burnt Umber", hex: "#6E260E", rgb: "rgb(110, 38, 14)" },
      { name: "Burnt Orange", hex: "#CC5500", rgb: "rgb(204, 85, 0)" },
      { name: "Burnt Sienna", hex: "#E97451", rgb: "rgb(233, 116, 81)" },
      { name: "Byzantium", hex: "#702963", rgb: "rgb(112, 41, 99)" },
      { name: "Cadmium Red", hex: "#D22B2B", rgb: "rgb(210, 43, 43)" },
      { name: "Cardinal Red", hex: "#C41E3A", rgb: "rgb(196, 30, 58)" },
      { name: "Carmine", hex: "#D70040", rgb: "rgb(215, 0, 64)" },
      { name: "Cerise", hex: "#DE3163", rgb: "rgb(222, 49, 99)" },
      { name: "Cherry", hex: "#D2042D", rgb: "rgb(210, 4, 45)" },
      { name: "Chestnut", hex: "#954535", rgb: "rgb(149, 69, 53)" },
      { name: "Claret", hex: "#811331", rgb: "rgb(129, 19, 49)" },
      { name: "Coral Pink", hex: "#F88379", rgb: "rgb(248, 131, 121)" },
      { name: "Cordovan", hex: "#814141", rgb: "rgb(129, 65, 65)" },
      { name: "Crimson", hex: "#DC143C", rgb: "rgb(220, 20, 60)" },
      { name: "Dark Red", hex: "#8B0000", rgb: "rgb(139, 0, 0)" },
      { name: "Falu Red", hex: "#7B1818", rgb: "rgb(123, 24, 24)" },
      { name: "Garnet", hex: "#9A2A2A", rgb: "rgb(154, 42, 42)" },
      { name: "Mahogany", hex: "#C04000", rgb: "rgb(192, 64, 0)" },
      { name: "Maroon", hex: "#800000", rgb: "rgb(128, 0, 0)" },
      { name: "Marsala", hex: "#986868", rgb: "rgb(152, 104, 104)" },
      { name: "Mulberry", hex: "#770737", rgb: "rgb(119, 7, 55)" },
      { name: "Neon Red", hex: "#FF3131", rgb: "rgb(255, 49, 49)" },
      { name: "Oxblood", hex: "#4A0404", rgb: "rgb(74, 4, 4)" },
      { name: "Pastel Red", hex: "#FAA0A0", rgb: "rgb(250, 160, 160)" },
      { name: "Persimmon", hex: "#EC5800", rgb: "rgb(236, 88, 0)" },
      { name: "Poppy", hex: "#E35335", rgb: "rgb(227, 83, 53)" },
      { name: "Puce", hex: "#A95C68", rgb: "rgb(169, 92, 104)" },
      { name: "Raspberry", hex: "#E30B5C", rgb: "rgb(227, 11, 92)" },
      { name: "Pure Red", hex: "#FF0000", rgb: "rgb(255, 0, 0)" },
      { name: "Red Brown", hex: "#A52A2A", rgb: "rgb(165, 42, 42)" },
      { name: "Red Ochre", hex: "#913831", rgb: "rgb(145, 56, 49)" },
      { name: "Red Orange", hex: "#FF4433", rgb: "rgb(255, 68, 51)" },
      { name: "Red Purple", hex: "#953553", rgb: "rgb(149, 53, 83)" },
      { name: "Rose Red", hex: "#C21E56", rgb: "rgb(194, 30, 86)" },
      { name: "Ruby Red", hex: "#E0115F", rgb: "rgb(224, 17, 95)" },
      { name: "Russet", hex: "#80461B", rgb: "rgb(128, 70, 27)" },
      { name: "Salmon", hex: "#FA8072", rgb: "rgb(250, 128, 114)" },
      { name: "Scarlet", hex: "#FF2400", rgb: "rgb(255, 36, 0)" },
      { name: "Sunset Orange", hex: "#FA5F55", rgb: "rgb(250, 95, 85)" },
      { name: "Terra Cotta", hex: "#E3735E", rgb: "rgb(227, 115, 94)" },
      { name: "Tuscan Red", hex: "#7C3030", rgb: "rgb(124, 48, 48)" },
      { name: "Tyrian Purple", hex: "#630330", rgb: "rgb(99, 3, 48)" },
      { name: "Venetian Red", hex: "#A42A04", rgb: "rgb(164, 42, 4)" },
      { name: "Vermillion", hex: "#E34234", rgb: "rgb(227, 66, 52)" },
      { name: "Wine", hex: "#722F37", rgb: "rgb(114, 47, 55)" }
    ],
  },
  {
    "category": "White",
    "shades": [
      { "name": "Alabaster", "hex": "#EDEADE", "rgb": "rgb(237, 234, 222)" },
      { "name": "Beige", "hex": "#F5F5DC", "rgb": "rgb(245, 245, 220)" },
      { "name": "Bone White", "hex": "#F9F6EE", "rgb": "rgb(249, 246, 238)" },
      { "name": "Cornsilk", "hex": "#FFF8DC", "rgb": "rgb(255, 248, 220)" },
      { "name": "Cream", "hex": "#FFFDD0", "rgb": "rgb(255, 253, 208)" },
      { "name": "Eggshell", "hex": "#F0EAD6", "rgb": "rgb(240, 234, 214)" },
      { "name": "Ivory", "hex": "#FFFFF0", "rgb": "rgb(255, 255, 240)" },
      { "name": "Linen", "hex": "#E9DCC9", "rgb": "rgb(233, 220, 201)" },
      { "name": "Navajo White", "hex": "#FFDEAD", "rgb": "rgb(255, 222, 173)" },
      { "name": "Off White", "hex": "#FAF9F6", "rgb": "rgb(250, 249, 246)" },
      { "name": "Parchment", "hex": "#FCF5E5", "rgb": "rgb(252, 245, 229)" },
      { "name": "Peach", "hex": "#FFE5B4", "rgb": "rgb(255, 229, 180)" },
      { "name": "Pearl", "hex": "#E2DFD2", "rgb": "rgb(226, 223, 210)" },
      { "name": "Seashell", "hex": "#FFF5EE", "rgb": "rgb(255, 245, 238)" },
      { "name": "Vanilla", "hex": "#F3E5AB", "rgb": "rgb(243, 229, 171)" },
      { "name": "Pure White", "hex": "#FFFFFF", "rgb": "rgb(255, 255, 255)" }
    ]
  },
  {
    "category": "Yellow",
    "shades": [
      { "name": "Almond", "hex": "#EADDCA", "rgb": "rgb(234, 221, 202)" },
      { "name": "Amber", "hex": "#FFBF00", "rgb": "rgb(255, 191, 0)" },
      { "name": "Apricot", "hex": "#FBCEB1", "rgb": "rgb(251, 206, 177)" },
      { "name": "Beige", "hex": "#F5F5DC", "rgb": "rgb(245, 245, 220)" },
      { "name": "Brass", "hex": "#E1C16E", "rgb": "rgb(225, 193, 110)" },
      { "name": "Bright Yellow", "hex": "#FFEA00", "rgb": "rgb(255, 234, 0)" },
      { "name": "Cadmium Yellow", "hex": "#FDDA0D", "rgb": "rgb(253, 218, 13)" },
      { "name": "Canary Yellow", "hex": "#FFFF8F", "rgb": "rgb(255, 255, 143)" },
      { "name": "Chartreuse", "hex": "#DFFF00", "rgb": "rgb(223, 255, 0)" },
      { "name": "Citrine", "hex": "#E4D00A", "rgb": "rgb(228, 208, 10)" },
      { "name": "Cornsilk", "hex": "#FFF8DC", "rgb": "rgb(255, 248, 220)" },
      { "name": "Cream", "hex": "#FFFDD0", "rgb": "rgb(255, 253, 208)" },
      { "name": "Dark Yellow", "hex": "#8B8000", "rgb": "rgb(139, 128, 0)" },
      { "name": "Desert", "hex": "#FAD5A5", "rgb": "rgb(250, 213, 165)" },
      { "name": "Ecru", "hex": "#C2B280", "rgb": "rgb(194, 178, 128)" },
      { "name": "Flax", "hex": "#EEDC82", "rgb": "rgb(238, 220, 130)" },
      { "name": "Gamboge", "hex": "#E49B0F", "rgb": "rgb(228, 155, 15)" },
      { "name": "Gold", "hex": "#FFD700", "rgb": "rgb(255, 215, 0)" },
      { "name": "Golden Yellow", "hex": "#FFC000", "rgb": "rgb(255, 192, 0)" },
      { "name": "Goldenrod", "hex": "#DAA520", "rgb": "rgb(218, 165, 32)" },
      { "name": "Icterine", "hex": "#FCF55F", "rgb": "rgb(252, 245, 95)" },
      { "name": "Ivory", "hex": "#FFFFF0", "rgb": "rgb(255, 255, 240)" },
      { "name": "Jasmine", "hex": "#F8DE7E", "rgb": "rgb(248, 222, 126)" },
      { "name": "Khaki", "hex": "#F0E68C", "rgb": "rgb(240, 230, 140)" },
      { "name": "Lemon Yellow", "hex": "#FAFA33", "rgb": "rgb(250, 250, 51)" },
      { "name": "Maize", "hex": "#FBEC5D", "rgb": "rgb(251, 236, 93)" },
      { "name": "Mango", "hex": "#F4BB44", "rgb": "rgb(244, 187, 68)" },
      { "name": "Mustard Yellow", "hex": "#FFDB58", "rgb": "rgb(255, 219, 88)" },
      { "name": "Naples Yellow", "hex": "#FADA5E", "rgb": "rgb(250, 218, 94)" },
      { "name": "Navajo White", "hex": "#FFDEAD", "rgb": "rgb(255, 222, 173)" },
      { "name": "Nyanza", "hex": "#ECFFDC", "rgb": "rgb(236, 255, 220)" },
      { "name": "Pastel Yellow", "hex": "#FFFAA0", "rgb": "rgb(255, 250, 160)" },
      { "name": "Peach", "hex": "#FFE5B4", "rgb": "rgb(255, 229, 180)" },
      { "name": "Pear", "hex": "#C9CC3F", "rgb": "rgb(201, 204, 63)" },
      { "name": "Peridot", "hex": "#B4C424", "rgb": "rgb(180, 196, 36)" },
      { "name": "Pistachio", "hex": "#93C572", "rgb": "rgb(147, 197, 114)" },
      { "name": "Saffron", "hex": "#F4C430", "rgb": "rgb(244, 196, 48)" },
      { "name": "Vanilla", "hex": "#F3E5AB", "rgb": "rgb(243, 229, 171)" },
      { "name": "Vegas Gold", "hex": "#C4B454", "rgb": "rgb(196, 180, 84)" },
      { "name": "Wheat", "hex": "#F5DEB3", "rgb": "rgb(245, 222, 179)" },
      { "name": "Pure Yellow", "hex": "#FFFF00", "rgb": "rgb(255, 255, 0)" },
      { "name": "Yellow Orange", "hex": "#FFAA33", "rgb": "rgb(255, 170, 51)" }
    ],
  }

];

export default colors;

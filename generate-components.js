const fs = require("fs");
const path = require("path");

const componentTypes = ["3D"];
// const componentTypes = ["Color", "Flat", "High Contrast"];
const assetsPath = "assets";

componentTypes.forEach((componentType) => {
  const typePath = path.join(assetsPath);

  fs.readdirSync(typePath).forEach((asset) => {
    // Change this to the actual extension of your SVG files, e.g., `.svg`
    // const svgPath = path.join(typePath, asset, componentType, ".png");
    let svgPath = path.join(typePath, asset, componentType);

    fs.readdirSync(svgPath, (err, files) => {
      files.forEach((file) => {
        svgPath = path.join(svgPath, file);
      });
    });

    console.log(
      "🚀 ~ file: generate-components.js:14 ~ fs.readdirSync ~ svgPath:",
      svgPath,
    );

    // Read the metadata.json file
    const metadataPath = path.join(typePath, asset, "metadata.json");
    const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));

    const componentName = (componentType + " " + metadata.cldr).replace(
      /[^a-zA-Z0-9]/g,
      "_",
    );

    // const svgData = fs.readFileSync(svgPath, "utf-8");
    // svgData.replace(/width="[0-9]*"/, 'width="100%"').replace(/height="[0-9]*"/, 'height="100%"');

    // <img className="${componentType.toLowerCase()}-icon" src="${svgPath}" alt="${metadata.tts || metadata.cldr || ""}" />
    // 		const componentCode = `import React from "react";

    // const ${componentName} = () => (
    //   ${svgData}
    // );

    // export default ${componentName};`;

    // fs.writeFileSync(`components/${componentType}/${componentName}.js`, componentCode);
  });
  return;
});

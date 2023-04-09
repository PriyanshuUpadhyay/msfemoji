# check_assets.py

"""
Performs several checks on asset folder contents including:
 - metadata content
 - folder content
"""

import argparse
import json
from pathlib import Path
import re
import sys
# from utils import styles

SK_FOLDERS = {'Default',
              'Light',
              'Medium-Light',
              'Medium',
              'Medium-Dark',
              'Dark'}

groups = [
    'Objects',
    'People & Body',
    'Smileys & Emotion',
    'Animals & Nature',
    'Food & Drink',
    'Symbols',
    'Travel & Places',
    'Activities',
    'Flags',
]

styles = ["Color", "Flat", "High Contrast"]
# styles = ["3D"]


def replace_dimensions(match):
    content = match.group(0)
    content = re.sub(r'width="[^"]*"', 'width="100%"', content)
    content = re.sub(r'height="[^"]*"', 'height="100%"', content)
    return content

# svg_data = '''
# <svg width="32px" height="32px">...your_svg_content_here...</svg>
# '''

# updated_svg_data = re.sub(r'(<svg[^>]*>)', replace_dimensions, svg_data)

# print(updated_svg_data)


def main():
    actualFiles = 0
    filesCreated = 0
    # ap = argparse.ArgumentParser()
    # ap.add_argument("assets",
    #                 help="Path to asset root folder",
    #                 type=Path)
    # opts = ap.parse_args()

    path = Path(__file__).parent.parent / 'src' / 'assets'
    # print("🚀 ~ file: png.py:45 ~ path:", path)
    opts = argparse.Namespace(assets=path)
    # print("🚀 ~ file: png.py:47 ~ opts:", opts)

    componentsPath = Path(__file__).parent.parent / 'src' / 'components'

    errors = False

    for jp in opts.assets.rglob("**/metadata.json"):
        folder = jp.parent
        with open(jp, 'r') as jf:
            md = json.load(jf)

        uc = md.get('unicode')
        ucbase = uc.split(" ")[0]
        sks = md.get('unicodeSkintones')

        if sks is not None:
            # check unicode base at start of sk seq
            for sk in sks:
                if not sk.startswith(ucbase):
                    errors = True
                    print(f"{folder.name} metadata: unicodeSkintone {sk} doesn't start with {ucbase}")  # noqa: E501

            # check that all Skintone folders exist and contain styles
            for fldr in SK_FOLDERS:
                if (folder / fldr).exists():
                    for st in styles:
                        updatedCompnetPath = componentsPath / st
                        if st == "High Contrast" and fldr != "Default":
                            continue

                        if not (folder / fldr / st).exists():
                            errors = True
                            print(f"{folder.name}: missing {fldr}/{st} style folder")  # noqa: E501

                        if (folder / fldr / st).exists():
                            actualFiles += 1
                            # react the st folder's file
                            fileInsideStFolder = (
                                folder / fldr / st).glob('*.svg')
                            if fileInsideStFolder:
                                for file in fileInsideStFolder:
                                    # check if the file is in the components folder
                                    filePath = folder / fldr / st / file.name
                                    # print("🚀 ~ file: png.py:89 ~ filePath:", filePath)
                                    componentName = st.upper() + "_" + \
                                        (str(folder.name)).upper(
                                    ) + "_" + fldr.upper()

                                    componentName = re.sub(
                                        r"[^a-zA-Z0-9]+", "_", componentName)

                                    # print("🚀 ~ file: png.py:91 ~ componentName:", componentName)
                                    assetPath = '../../assets' + \
                                        str(filePath).replace(str(path), "")
                                    # print("🚀 ~ file: png.py:93 ~ assetPath:", assetPath)

                                    svgData = open(filePath, "r").read()
                                    # print(
                                    # "🚀 ~ file: svg.py:122 ~ svgData:", svgData.splitlines()[0])
                                    updated_svg_data = re.sub(
                                        r'(<svg[^>]*>)', replace_dimensions, svgData)
                                    # print(
                                    # "🚀 ~ file: svg.py:125 ~ updated_svg_data:", updated_svg_data.splitlines()[0])

                                    reactComponetData = f'''import React from 'react';
export function {componentName}() {{

  return (
      <>
      {updated_svg_data}
      </>
  );
}}
                              '''
                                    # print(
                                    # "🚀 ~ file: png.py:106 ~ reactComponetData:", reactComponetData)
                                    # write the file
                                    with open(updatedCompnetPath / f"{componentName}.jsx", "w") as f:
                                        f.write(reactComponetData)
                                        filesCreated += 1

                else:
                    errors = True
                    print(f"{folder.name}: missing {fldr} skintone folder")
        else:
            # ensure skintone folders DO NOT exist
            for fldr in SK_FOLDERS:
                if (folder / fldr).exists():
                    errors = True
                    print(f"{folder.name}: unexpected {fldr} skintone folder present")  # noqa: E501
            # ensure style folders are present
            for st in styles:
                updatedCompnetPath = componentsPath / st
                if not (folder / st).exists():
                    errors = True
                    print(f"{folder.name}: missing {st} style folder")

                if (folder / st).exists():
                    actualFiles += 1
                    # react the st folder's file
                    fileInsideStFolder = (
                        folder / st).glob('*.svg')
                    if fileInsideStFolder:
                        for file in fileInsideStFolder:
                            # check if the file is in the components folder
                            filePath = folder / st / file.name
                            # print("🚀 ~ file: png.py:89 ~ filePath:", filePath)
                            componentName = st.upper() + "_" + \
                                (str(folder.name)).upper(
                            )
                            componentName = re.sub(
                                r"[^a-zA-Z0-9]+", "_", componentName)
                            # print("🚀 ~ file: png.py:91 ~ componentName:", componentName)
                            assetPath = '../../assets' + \
                                str(filePath).replace(str(path), "")
                            # print("🚀 ~ file: png.py:93 ~ assetPath:", assetPath)
                            svgData = open(filePath, "r").read()
                            # print(
                            # "🚀 ~ file: svg.py:122 ~ svgData:", svgData.splitlines()[0])
                            updated_svg_data = re.sub(
                                r'(<svg[^>]*>)', replace_dimensions, svgData)
                            # print(
                            # "🚀 ~ file: svg.py:125 ~ updated_svg_data:", updated_svg_data.splitlines()[0])

                            reactComponetData = f'''import React from 'react';
export function {componentName}() {{

  return (
      <>
      {updated_svg_data}
      </>
  );
}}
                              '''

                            # print(
                            # "🚀 ~ file: png.py:106 ~ reactComponetData:", reactComponetData)
                            # write the file
                            with open(updatedCompnetPath / f"{componentName}.jsx", "w") as f:
                                f.write(reactComponetData)
                                filesCreated += 1

    print(f"🚀 ~ file: png.py:123 ~ actualFiles:", actualFiles)
    print(f"🚀 ~ file: png.py:124 ~ filesCreated:", filesCreated)
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())

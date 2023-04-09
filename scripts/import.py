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

styles = ["3D", "Color", "Flat", "High Contrast"]


def main():

    path = Path(__file__).parent.parent / "src"
    componentsPath = Path(__file__).parent.parent / "src" / "components"

    indexFile = open(path / "index.js", "a+")

    # rmeove all previous exports
    indexFile.seek(0)
    indexFile.truncate()

    for style in styles:
        # indexFile.write(f"export {{ default as {style} }} from './components/{style}';\r ")
        stylePath = componentsPath / style
        styleFiles = stylePath.glob("*.jsx")
        for styleFile in styleFiles:
            fileName = styleFile.stem
            indexFile.write(
                f"export {{ default as {fileName} }} from './components/{style}/{fileName}';\r"
            )


if __name__ == "__main__":
    sys.exit(main())

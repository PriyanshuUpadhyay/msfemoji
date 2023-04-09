# check_assets.py

"""
Performs several checks on asset folder contents including:
 - metadata content
 - folder content
"""

import argparse
import json
import os
from pathlib import Path
import re
from shutil import copy, copyfileobj
import sys

# from utils import styles

SK_FOLDERS = {"Default", "Light", "Medium-Light",
              "Medium", "Medium-Dark", "Dark"}
styles = ["3D"]


def main():
    path = Path(__file__).parent.parent / "src" / "assets"
    # print("🚀 ~ file: png.py:45 ~ path:", path)
    distPath = Path(__file__).parent.parent / "dist" / "assets"

    opts = argparse.Namespace(assets=path)
    # print("🚀 ~ file: png.py:47 ~ opts:", opts)

    errors = False

    for jp in opts.assets.rglob("**/metadata.json"):
        folder = jp.parent
        with open(jp, "r") as jf:
            md = json.load(jf)

        uc = md.get("unicode")
        ucbase = uc.split(" ")[0]
        sks = md.get("unicodeSkintones")

        if sks is not None:
            # check unicode base at start of sk seq
            for sk in sks:
                if not sk.startswith(ucbase):
                    errors = True
                    print(
                        f"{folder.name} metadata: unicodeSkintone {sk} doesn't start with {ucbase}"
                    )  # noqa: E501

            # check that all Skintone folders exist and contain styles
            for fldr in SK_FOLDERS:
                if (folder / fldr).exists():
                    for st in styles:
                        if st == "High Contrast" and fldr != "Default":
                            continue
                        if not (folder / fldr / st).exists():
                            errors = True
                            print(
                                f"{folder.name}: missing {fldr}/{st} style folder"
                            )  # noqa: E501

                        if (folder / fldr / st).exists():
                            # copy the file to dist
                            fileInsideStFolder = (
                                folder / fldr / st).glob("*.png")
                            if fileInsideStFolder:
                                for file in fileInsideStFolder:
                                    if not os.path.exists(distPath / folder.name / fldr / st):
                                        os.makedirs(
                                            distPath / folder.name / fldr / st, exist_ok=True)

                                    src = path / folder.name / fldr / st / file.name
                                    dst = distPath / folder.name / fldr / st / file.name

                                    copy(src, dst)

                else:
                    errors = True
                    print(f"{folder.name}: missing {fldr} skintone folder")
        else:
            # ensure skintone folders DO NOT exist
            for fldr in SK_FOLDERS:
                if (folder / fldr).exists():
                    errors = True
                    print(
                        f"{folder.name}: unexpected {fldr} skintone folder present"
                    )  # noqa: E501
            # ensure style folders are present
            for st in styles:
                if not (folder / st).exists():
                    errors = True
                    print(f"{folder.name}: missing {st} style folder")

                if (folder / st).exists():
                    # copy the file to dist
                    fileInsideStFolder = (folder / st).glob("*.png")
                    if fileInsideStFolder:
                        for file in fileInsideStFolder:
                            if not os.path.exists(distPath / folder.name / st):
                                os.makedirs(distPath / folder.name /
                                            st, exist_ok=True)
                            # copy

                            # copy(path / folder / st / file.name,
                            #      distPath / folder / st / file.name)
                            # return
                            src = path / folder.name / st / file.name
                            dst = distPath / folder.name / st / file.name

                            copy(src, dst)

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

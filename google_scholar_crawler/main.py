"""Fetch Google Scholar stats and write a shields.io endpoint JSON.

Produces (under ./results):
  - gs_data.json            full author record
  - gs_data_shieldsio.json  {schemaVersion, label, message} for the citations badge
"""

import json
import os
from datetime import datetime

from scholarly import scholarly

SCHOLAR_ID = os.environ.get("GOOGLE_SCHOLAR_ID", "g2M2UwsAAAAJ")


def main() -> None:
    author = scholarly.search_author_id(SCHOLAR_ID)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
    author["updated"] = str(datetime.now())
    author["publications"] = {p["author_pub_id"]: p for p in author["publications"]}

    os.makedirs("results", exist_ok=True)

    with open("results/gs_data.json", "w", encoding="utf-8") as f:
        json.dump(author, f, ensure_ascii=False)

    shieldsio = {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(author.get("citedby", 0)),
        "color": "blue",
    }
    with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as f:
        json.dump(shieldsio, f, ensure_ascii=False)


if __name__ == "__main__":
    main()

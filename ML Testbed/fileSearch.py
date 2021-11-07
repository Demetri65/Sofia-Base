import os
import openai
import chronological
import asyncio
openai.api_key = "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"

def main():
    filesID = ["file-dA1NAQP0COzQVIgVEmjgyEHR","file-nZYR9KwR4WMElBvnPzj9bTiV"]
    query = "Look at that poor body! What it suffered and craved, the poor soul interpreted to itself--it interpreted it as murderous desire, and eagerness for the happiness of the knife."
    poop = asyncio.run(chronological.fetch_max_search_doc(query,filesID,"davinci"))
    print(poop)
if __name__ == "__main__":
    main()
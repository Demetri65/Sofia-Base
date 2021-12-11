from flask import Blueprint
from flask import jsonify
import openai
import chronological
import asyncio
openai.api_key = "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"

def search(query,ID):
    filesID = ["file-dA1NAQP0COzQVIgVEmjgyEHR","file-nZYR9KwR4WMElBvnPzj9bTiV","file-J390ZnGWs4RguflWukW2TIvH",
               "file-bYIk4aembsMqkhXMScelMIEw","file-E58GkSCNlvwDOEd05kJxVdVv","file-GWtm1ttt4wrzRz8JwTkk7cyg",
               "file-rAjGDw0ZcvoAvB4r6XQS0xL4"]
    filesID.remove(ID)
    result = asyncio.run(chronological.fetch_max_search_doc(query,filesID,"davinci",min_score_cutoff=-1000))
    return result

textLink = Blueprint('textLink', __name__)

@textLink.route('/<string:query>/<string:ID>/')
def link(query,ID):
    result = search(query,ID)
    return jsonify(result)
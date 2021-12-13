from flask import Blueprint
from flask import jsonify
import openai
import chronological
import asyncio
openai.api_key = "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"

bookdict = {"file-dA1NAQP0COzQVIgVEmjgyEHR":"The Will to Power, Friedrich Nietzsche",
            "file-nZYR9KwR4WMElBvnPzj9bTiV":"The Critique of Pure Reason, Immanuel Kant",
            "file-J390ZnGWs4RguflWukW2TIvH":"Candide, Voltaire",
            "file-bYIk4aembsMqkhXMScelMIEw":"Meditations, Marcus Aurelius",
            "file-E58GkSCNlvwDOEd05kJxVdVv":"The Communist Manifesto, Karl Marx Friedrich Engels",
            "file-GWtm1ttt4wrzRz8JwTkk7cyg":"The Ethics, Benedict de Spinoza",
            "file-rAjGDw0ZcvoAvB4r6XQS0xL4":"Thus Spake Zarathustra, Friedrich Nietzsche"}

def search(query):
    filesID = ["file-dA1NAQP0COzQVIgVEmjgyEHR","file-nZYR9KwR4WMElBvnPzj9bTiV","file-J390ZnGWs4RguflWukW2TIvH",
               "file-bYIk4aembsMqkhXMScelMIEw","file-E58GkSCNlvwDOEd05kJxVdVv","file-GWtm1ttt4wrzRz8JwTkk7cyg",
               "file-rAjGDw0ZcvoAvB4r6XQS0xL4"]
    result = asyncio.run(chronological.fetch_max_search_doc(query,filesID,"davinci",min_score_cutoff=-1000))
    return bookdict[result]

textLink = Blueprint('textLink', __name__)

@textLink.route('/<string:query>/')
def link(query):
    result = search(query)
    return jsonify(result)

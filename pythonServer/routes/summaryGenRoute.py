from flask import Blueprint
from flask import jsonify
import openai
import chronological
import asyncio
openai.api_key = "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"

def summarize(title,author):
    prompt = "Give me a summary of {}, by {}:".format(title,author)
    result = asyncio.run(chronological.cleaned_completion(prompt,engine="davinci"))
    return result

summaryGen = Blueprint('summaryGen', __name__)

@summaryGen.route('/<string:title>/<string:author>/')
def Gen(title,author):
    result = summarize(title,author)
    return jsonify(result)

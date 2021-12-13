from flask import Blueprint
from flask import jsonify
import openai
import chronological
import asyncio
openai.api_key = "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"

def question(title,author):
    prompt = "Give me discussion questions for {}, by {}:\n 1.".format(title,author)
    result = asyncio.run(chronological.cleaned_completion(prompt,engine="davinci"))
    return result

discussQ = Blueprint('discussQ', __name__)

@discussQ.route('/<string:title>/<string:author>/')
def Gen(title,author):
    result = question(title,author)
    return jsonify(result)

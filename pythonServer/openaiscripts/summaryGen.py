import os
import openai
import chronological
import asyncio
openai.api_key = "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"


def summarize(title,author):
    prompt = "Give me a summary of {}, by {}:".format(title,author)
    result = asyncio.run(chronological.cleaned_completion(prompt,engine="davinci"))
    print(result)
if __name__ == "__main__":
    summarize("Candide","Voltaire")
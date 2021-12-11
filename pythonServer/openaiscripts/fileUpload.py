import os
import openai
openai.organization = "org-cLu9b5FYQhBQWCAdsYPwg2nB"
openai.api_key = "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"

print(openai.File.create(file=open("../Books/JSONL/Thus Spake Zarathustra, Friedrich Nietzsche.jsonl"), purpose="search"))
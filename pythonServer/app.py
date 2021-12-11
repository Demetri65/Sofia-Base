from flask import Flask
from textLinkRoute import textLink

app = Flask(__name__)

app.register_blueprint(textLink,url_prefix='/textlink')

if __name__== "__main__":
    app.run()



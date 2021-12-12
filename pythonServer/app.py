from flask import Flask
from pythonServer.routes.textLinkRoute import textLink
from pythonServer.routes.summaryGenRoute import summaryGen
from pythonServer.routes.discussQGenRoute import discussQ

app = Flask(__name__)

app.register_blueprint(textLink,url_prefix='/textlink')
app.register_blueprint(summaryGen,url_prefix='/summarygen')
app.register_blueprint(discussQ,url_prefix='/discussq')


if __name__== "__main__":
    app.run()



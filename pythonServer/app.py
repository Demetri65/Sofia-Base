from flask import Flask
from routes.textLinkRoute import textLink
from routes.summaryGenRoute import summaryGen
from routes.discussQGenRoute import discussQ

from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(textLink,url_prefix='/ml/textlink')
app.register_blueprint(summaryGen,url_prefix='/ml/summarygen')
app.register_blueprint(discussQ,url_prefix='/ml/discussq')


if __name__== "__main__":
    app.run(host='0.0.0.0', port=8000)



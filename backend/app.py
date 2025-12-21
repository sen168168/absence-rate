from flask import Flask
from flask_cors import CORS
from routes.absence import absence_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(absence_bp)

@app.route("/")
def health_check():
    return {"status": "Backend running"}

if __name__ == "__main__":
    app.run(debug=True)

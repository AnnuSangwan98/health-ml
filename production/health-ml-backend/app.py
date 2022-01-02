from flask import Flask, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin
import logging
from dotenv import load_dotenv
import json
import pandas as pd
from waitress import serve

from models.getHeartModel import getHeartModel
load_dotenv()

import os

app = Flask(__name__, static_folder='./build/static', template_folder='./build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

heartModel = getHeartModel()

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory("./build", path)


@app.route('/api/heart/predict', methods=["GET"])
@cross_origin()
def heartPredict():
    try:
        heartAge = float(request.args.get("heartAge"))
        heartSex = request.args.get("heartSex")
        heartPain = request.args.get("heartPain")
        heartBloodPreassure = float(request.args.get("heartBloodPreassure"))
        heartCholesterol = float(request.args.get("heartCholesterol"))
        heartBloodSugar = float(request.args.get("heartBloodSugar"))
        heartRestingEcg = request.args.get("heartRestingEcg")
        heartMaxHr = float(request.args.get("heartMaxHr"))
        heartAngina = request.args.get("heartAngina")
        heartOldPeak = float(request.args.get("heartOldPeak"))
        heartSlope = request.args.get("heartSlope")

        data = pd.DataFrame([[
            heartAge,
            heartSex,
            heartPain,
            heartBloodPreassure,
            heartCholesterol,
            heartBloodSugar,
            heartRestingEcg,
            heartMaxHr,
            heartAngina,
            heartOldPeak,
            heartSlope
        ]])

        column_names = ["age", "sex", "pain", "blood_preassure", "cholesterol", "blood_sugar", "resting_ecg", "max_hr", 
                "angina", "old_peak", "slope"]
        data.columns = column_names

        # get the only prediction, the second value, because the second value 
        # is the probability of having the disease
        prediction = heartModel.predict_proba(data)[0, 1]
        return json.dumps({'prediction': prediction}), 200, {'ContentType':'application/json'} 

    except Exception as e:
        print(e)
        return json.dumps({'prediction': 0}), 500, {'ContentType':'application/json'} 



if __name__ == "__main__":
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)

    if os.environ.get("NODE_ENV") == "PRODUCTION":
        serve(app, host=os.environ.get("NODE_HOST"), port=os.environ.get("NODE_PORT"),)

    app.run(
        debug=os.environ.get("NODE_DEBUG") == "TRUE",
        host=os.environ.get("NODE_HOST"),
        port=os.environ.get("NODE_PORT")
    )

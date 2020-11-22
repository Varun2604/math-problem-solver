from flask import Flask, request,render_template, json

app = Flask(__name__, 
            static_url_path='', 
            static_folder='../ui/build')

@app.route("/")
def hello():
  return app.send_static_file('index.html')

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5000'
    return response

@app.route("/parse_and_compute", methods=["POST"])
def parse_and_compute():
  # uploaded_file = request.files['file']
  # if uploaded_file.filename != '':
  #     uploaded_file.save(uploaded_file.filename)
  data = {
      "parsed_data" : "1 + 2",
      "computed_result" : "3"
  }
  resp = {
    "message" : "Image Successfully parsed and computed"
  }
  resp["data"] = data
  return json.dumps(resp), 200

@app.route("/parse_feedback", methods=["POST"])
def parse_feedback():
  # uploaded_file = request.files['file']
  # req_data = request.get_json()
  # pasred_value = req_data['pasred_value']
  # feedback = req_data['feedback']
  # if uploaded_file.filename != '':
  #     uploaded_file.save(uploaded_file.filename)
  return json.dumps({
    "message" : "Parse feedback duly noted"
    }), 200

@app.route("/compute_feedback", methods=["POST"])
def compute_feedback():
  # req_data = request.get_json()
  # pasred_value = req_data['pasred_value']
  # compute_value = req_data['compute_value']
  # feedback = req_data['feedback']
    return json.dumps({
    "message" : "Compute feedback duly noted"
    }), 200
    
# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0')
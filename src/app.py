from flask import Flask, request,render_template

app = Flask(__name__, 
            static_url_path='', 
            static_folder='../ui/build')

@app.route("/")
def hello():
  return app.send_static_file('index.html')

@app.route("/parse_and_compute", methods=["POST"])
def pasre_and_compute():
  uploaded_file = request.files['file']
  if uploaded_file.filename != '':
      uploaded_file.save(uploaded_file.filename)
  return uploaded_file.filename

@app.route("/parse_feedback", methods=["POST"])
def parse_feedback():
  uploaded_file = request.files['file']
  req_data = request.get_json()
  pasred_value = req_data['pasred_value']
  feedback = req_data['feedback']
  if uploaded_file.filename != '':
      uploaded_file.save(uploaded_file.filename)
  return 'parsed feedback duly noted'

@app.route("/compute_feedback", methods=["POST"])
def compute_feedback():
  req_data = request.get_json()
  pasred_value = req_data['pasred_value']
  compute_value = req_data['compute_value']
  feedback = req_data['feedback']
  return 'compute feedback duly noted'
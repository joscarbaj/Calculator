from flask import Flask,render_template,flash,url_for,redirect

app = Flask(__name__)

@app.route("/")

def Index():
    return render_template("index.html")


@app.route("/about")
def About():
    return render_template("about.html")
if __name__ == "__main__":
    app.run(debug=True,port=5000, host="0.0.0.0")
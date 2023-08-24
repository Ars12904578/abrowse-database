from flask import *
from flask_cors import *
from run import *
from manage_data import *
import sqlite3
app = Flask(__name__)
CORS(app)
@app.route("/", methods=['GET', 'POST'])
def home():
    name = request.args.get('name')
    email = request.args.get('email')
    password = request.args.get('password')
    deleteid = request.args.get('delete')
    if name and email and password:
        write(name, email, password)
    if deleteid:
        delete(deleteid)
    return render_template("index.html", data1=get_data("id"), data2=get_data("username"), data3=get_data("email"), data4=get_data("password"))

@app.route("/edit", methods=['GET', 'POST'])
def edit():
    name = request.args.get('name')
    id = request.args.get("id")
    email = request.args.get('email')
    password = request.args.get('password')
    if name and email and id and password:
        edit_id(id, name, email, password)
    return render_template("edit.html", data1=get_data("id"), data2=get_data("username"), data3=get_data("email"), data4=get_data("password"))









@app.route("/reset-database")
def deletedatabaseloc():
    removedata()
    return render_template("timer.html")
@app.route("/create-database")
def createdatabaseloc():
    createdata()
    return render_template("timer copy.html")
if __name__ == '__main__':
    app.run(debug=True, port=5000)
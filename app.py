from flask import Flask,render_template,request
from DiseaseClassifier import DecisionTreeClassifier,KNNClassifier
#from datetime import datetime
#from pytz import timezone
#from gspread import service_account_from_dict
#from dotenv import load_dotenv
from threading import Thread
from os import getenv


app=Flask(__name__)

#def configure():
#    load_dotenv()

#configure()

# gsheet_dps_auth={
#   "type": getenv('type'),
#   "project_id": getenv('project_id'),
#   "private_key_id": getenv('private_key_id'),
#   "private_key": getenv('private_key'),
#   "client_email": getenv('client_email'),
#   "client_id": getenv('client_id'),
#   "auth_uri": getenv('auth_uri'),
#   "token_uri": getenv('token_uri'),
#   "auth_provider_x509_cert_url": getenv('auth_provider_x509_cert_url'),
#   "client_x509_cert_url": getenv('client_x509_cert_url')
# }

# def addUserData(user_name):
#     if user_name!='':
#         gc=service_account_from_dict(gsheet_dps_auth)
#         sheet=gc.open('DPS_DataSheet').sheet1
#         india_time = datetime.now(timezone("Asia/Kolkata")).strftime('%Y-%m-%d %H:%M:%S.%f')
#         sheet.append_row([user_name,india_time[:10],india_time[11:]])

@app.route("/",methods=["GET","POST"])
def home_page():
    return render_template("index.html")


@app.route("/selection",methods=["GET","POST"])
def selectionPage():
    if request.method=="POST":
        user_name=request.form['nameInp'].strip()
#         Thread(target=addUserData,args=(user_name,)).start()
    return render_template("selector.html")


@app.route("/result",methods=["GET","POST"])
def resultPage():
    selected_sympt=[0 for x in range(132)]
    if request.method=="POST":
        a=request.form.get("Data1")
        algorithm=request.form.get("algo")
        y=a.split()
        for i in y:
            selected_sympt[int(i)]=1
        if algorithm=="KNearestNeigboursClassifier":
            pr=KNNClassifier().predictDisease(selected_sympt)
        elif algorithm=="DecisionTreeClassifier":
            pr=DecisionTreeClassifier().predictDisease(selected_sympt)
    
    return render_template("result.html",content=f"{pr[0]}")

if __name__=="__main__":
    app.run(debug=True)

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

all_diseases=['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of_urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']

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
    selected_sympt=[0 for x in range(len(all_diseases))]
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

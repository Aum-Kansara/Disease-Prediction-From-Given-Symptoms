const wrapper=document.querySelector(".wrapper");
selectBtn=wrapper.querySelector(".select-btn");
options=wrapper.querySelector(".options");
searchInp=wrapper.querySelector("input");
symptomBox=document.getElementById("addedSymptoms");
hiddenData=document.querySelector(".hiddenData");
requiredText=document.querySelector(".requiredTxt");
// let diseases=['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of_urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'];
let diseases=['Itching', 'Skin rash', 'Nodal skin eruptions', 'Continuous sneezing', 'Shivering', 'Chills', 'Joint pain', 'Stomach pain', 'Acidity',
'Ulcers on tongue', 'Muscle wasting', 'Vomiting', 'Burning micturition', 'Spotting urination', 'Fatigue', 'Weight gain', 'Anxiety',
'Cold hands and feets', 'Mood swings', 'Weight loss', 'Restlessness', 'Lethargy', 'Patches i throat', 'Irregular sugar level', 'Cough',
'High fever', 'Sunken eyes', 'Breathlessness', 'Sweating', 'Dehydration', 'Indigestion', 'Headache', 'Yellowish skin', 'Dark urine',
'Nausea', 'Loss of appetite', 'Pain behind the eyes', 'Back pain', 'Constipation', 'Abdominal pain', 'Diarrhoea', 'Mild fever',
'Yellow urine', 'Yellowing of eyes', 'Acute liver failure', 'Fluid overload', 'Swelling of stomach', 'Swelled lymph nodes', 'Malaise',
'Blurred and distorted vision', 'Phlegm', 'Throat irritation', 'Redness of eyes', 'Sinus pressure', 'Runny nose', 'Congestion',
'Chest pain', 'Weakness in limbs', 'Fast heart rate', 'Pain during bowel movements', 'Pain in anal region', 'Bloody stool',
'Irritation in anus', 'Neck pain', 'Dizziness', 'Cramps', 'Bruising', 'Obesity', 'Swollen legs', 'Swollen blood vessels',
'Puffy face and eyes', 'Enlarged thyroid', 'Brittle nails', 'Swollen extremeties', 'Excessive hunger', 'Extra marital contacts',
'Drying and tingling lips', 'Slurred speech', 'Knee pain', 'Hip joint pain', 'Muscle weakness', 'Stiff neck', 'Swelling joints',
'Movement stiffness', 'Spinning movements', 'Loss of balance', 'Unsteadiness', 'Weakness of one body side', 'Loss of smell', 
'Bladder discomfort', 'Foul smell of urine', 'Continuous feel of urine', 'Passage of gases', 'Internal itching', 'Toxic look (typhos)',
'Depression', 'Irritability', 'Muscle pain', 'Altered sensorium', 'Red spots over body', 'Belly pain', 'Abnormal menstruation',
'Dischromic patches', 'Watering from eyes', 'Increased appetite', 'Polyuria', 'Family history', 'Mucoid sputum', 'Rusty sputum',
'Lack of concentration', 'Visual disturbances', 'Receiving blood transfusion', 'Receiving unsterile injections', 'Coma',
'Stomach bleeding', 'Distention of abdomen', 'History of alcohol consumption', 'Fluid overload', 'Blood in sputum',
'Prominent veins on calf', 'Palpitations', 'Painful walking', 'Pus filled pimples', 'Blackheads', 'Scurring', 'Skin peeling', 
'Silver like dusting', 'Small dents in nails', 'Inflammatory nails', 'Blister', 'Red sore around nose', 'Yellow crust ooze']
let selectedDisease=[];
function addDisease(selectedSymptom){
    options.innerHTML="";
    diseases.forEach(disease =>{
        let isSelected=disease==selectedSymptom?"selected":"";
        let li=`<li onclick="updateName(this)" class="${isSelected}">${disease}</li>`;
        options.insertAdjacentHTML("beforeend",li);
    });
}
function validate(){
    if(selectedDisease.length<2){
        requiredText.innerHTML="Select Alteast Two Symptom";
    }
    else{
        requiredText.innerHTML="";
        document.getElementById("submitBtn").click();
    }
}
function addSelectedSymptom(selectedSymptom){
    var li=document.createElement("li");
    li.setAttribute('id',selectedSymptom);
    selectedDisease.push(diseases.indexOf(selectedSymptom));
    li.appendChild(document.createTextNode(selectedSymptom));
    symptomBox.appendChild(li);
    hiddenData.value=hiddenData.value+" "+diseases.indexOf(selectedSymptom);
}
function removeChild(symptom){  
    var symp1=document.getElementById(symptom);
    symptomBox.removeChild(symp1);
}

function updateName(selectedLi){
    searchInp.value="";
    addSelectedSymptom(selectedLi.innerText);
    options.removeChild(options.childNodes[diseases.indexOf(selectedLi.innerText)]);
    diseases.splice(diseases.indexOf(selectedLi.innerText),1);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText=selectedLi.innerText;

}
addDisease();
selectBtn.addEventListener("click",() => {
    wrapper.classList.toggle("active");
});

searchInp.addEventListener("keyup",()=>{
    let arr=[];
    let searchVal=searchInp.value.toLowerCase();
    arr=diseases.filter(data=>{
        return data.toLowerCase().startsWith(searchVal.toLowerCase());
    }).map(data=>`<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML=arr?arr:`<p>No Symptom Found</p>`;
});
const wrapper=document.querySelector(".wrapper");
selectBtn=wrapper.querySelector(".select-btn");
options=wrapper.querySelector(".options");
searchInp=wrapper.querySelector("input");
symptomBox=document.getElementById("addedSymptoms");
hiddenData=document.querySelector(".hiddenData");
requiredText=document.querySelector(".requiredTxt");
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
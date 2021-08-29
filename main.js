function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);;
}
function gotResult(error,results){
    var dog=0;
    var cat=0;

    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255);
        random_number_g=Math.floor(Math.random()*255);
        random_number_b=Math.floor(Math.random()*255);
    }

    document.getElementById("result_label").innerHTML='Detected voice is of- '+results[0].label;
    document.getElementById("result_count").innerHTML='Detected Dog- '+dog+'Detected Cat- '+cat;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    if(results[0].label=="Barking"){
        img.src='dog.gif';
        dog=dog+1;
    }else if(results[0].label=="Meowing"){
        img.src='meow.gif';
        cat=cat+1;
    }else{
        img.src='ear.gif';
    }
}
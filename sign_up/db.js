$(document).ready(function (){
    $("#lieutenant").hide();
    document.getElementById("toggle").value = "Create Account";
    $("#toggle").click(function (){
        document.getElementById("notification1").innerHTML = "";
        document.getElementById("notification2").innerHTML = "";
        document.getElementById("notification3").innerHTML = "";
        var x = document.getElementById("toggle");
        if (x.value === "Login"){
            x.value = "Create Account";
            document.title = "Login";
            document.getElementById("subm").value = "Login";
        } else if (x.value === "Create Account"){
            x.value = "Login";
            document.title = "Create Account";
            document.getElementById("subm").value = "Create Account";
        }
    })
    $("#logout").click(function (){
        firebase.auth().signOut().then(() => {
            window.location.replace("sign.html");
        }).catch((error) => {
            window.alert("Pardonne moi s'il te plait \nSome error occurred!!");
        });
    })
})

function showpass(){
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("passwd").value = "Hide Password";
    } else {
        x.type = "password";
        document.getElementById("passwd").value = "Show Password";
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyDnTEWjeHFIzX4EKc0ZYo03fs46l3boul4",
    authDomain: "rohood-d6b19.firebaseapp.com",
    projectId: "rohood-d6b19",
    storageBucket: "rohood-d6b19.appspot.com",
    messagingSenderId: "886346573296",
    appId: "1:886346573296:web:e73779af35c67f4272a935",
    measurementId: "G-Z9P47RBW2E"
};
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;
firebase.analytics();

function cruser(){
    var email = $('#eml').val();
    var pass = $('#pass').val();
    if (document.title === "Login"){
        document.getElementById("notification2").innerHTML = "checking .........";
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                document.getElementById("notification2").innerHTML = "DONE !!";
                window.location.replace("../userpage.html")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("notification1").innerHTML = errorCode;
                document.getElementById("notification2").innerHTML = errorMessage;
            });
    }else if (document.title === "Create Account"){
        document.getElementById("notification2").innerHTML = "creating .........";
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                $("#captain").hide();
                $("#lieutenant").show();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("notification1").innerHTML = errorCode;
                document.getElementById("notification2").innerHTML = errorMessage;
            })
    }
}

var users = [];
function storedata(){
    document.getElementById("notification3").innerHTML = ""
    document.getElementById("notification3").innerHTML ="Checking............";
    var user = $("#usernm").val();
    firebase.database().ref("users").on('value', snapshot => {
        snapshot.forEach(child => {
            users.push(child.key);
        });
    })
    if (users.includes(user)){
        document.getElementById("notification3").innerHTML = "This username is already in use<br>Please select a different username";
    }else {
        document.getElementById("notification3").innerHTML = "Storing............";
        firebase.database().ref("users/" + user).set({
            name: $("#name").val(),
            email: $('#eml').val(),
            address: $("#addr").val(),
            phone: $("#phone").val(),
            pin_code: $("#pin").val(),
            gender: rdval()
        },(e) => {
            if (e){
                document.getElementById("notification3").innerHTML = e.errorCode;
            }
            else{
                document.getElementById("notification3").innerHTML = "DONE !!";
                alert("You have succesfully registered<br>Please login to continue");
                window.location.replace('../sign_up/sign.html');
            }
        });
    }
}
function rdval(){
    var x = document.getElementsByName('gender');
    for(var i = 0; i < x.length; i++){
        if (x[i].checked){
            return x[i].value;
        }
    }
}


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBegsijX1KwQv_CYF3DKkBd6tYbFr9KNeo",
    authDomain: "traintime-aeb65.firebaseapp.com",
    databaseURL: "https://traintime-aeb65.firebaseio.com",
    projectId: "traintime-aeb65",
    storageBucket: "",
    messagingSenderId: "666610081723",
    appId: "1:666610081723:web:7f4c4266e2bc0fc2952e9e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//get a reference to the database service
  var database = firebase.database();
  //global variables
  var trainName;
  var trainDestination;
  var trainFrequency;
  var firstTrain;
  var trainNextArrival;
  var trainMinutesAway;

  //populate firebase database with initial data
$("#add-train").on("click", function(event) {
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();
    firstTrain = $("#time-input").val().trim();

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(firstTrain);

    database.ref().push({
        dbtrainName: trainName,
        dbtrainDestination: trainDestination,
        dbtrainFrequency: trainFrequency,
        dbfirsTrain: firstTrain

    });
    alert("Train added...!");

    $("#train-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#time-input").val("");
});


  database.ref().on("child_added", function (snapshot) {
      console.log(snapshot.val());
  var tName = snapshot.val().dbtrainName;
  var tDestination = snapshot.val().dbtrainDestination;
  var tFrequency = snapshot.val().dbtrainFrequency;
  var tFirstTrain = snapshot.val().dbfirsTrain;
  //store everything into a variable

  // Next arrival and minutes away calculations go here
  var tr = $("<tr>");
  //display results inside the table
  tr.append(
      "<td>" +tName+"</td>",
      "<td>" +tDestination+"</td>",
      "<td>" +tFrequency+"</td>",
      "<td>To be calculated</td>",
      "<td>To be calculated</td>",
  )
  $("tbody").append(tr);
  });

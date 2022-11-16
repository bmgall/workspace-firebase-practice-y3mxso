// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBYnlqsOCSxLcYx1oVTdfVXr8r8yskM3aA',
  authDomain: 'fir-practice-9ff27.firebaseapp.com',
  databaseURL: 'https://fir-practice-9ff27.firebaseio.com',
  projectId: 'fir-practice-9ff27',
  storageBucket: 'fir-practice-9ff27.appspot.com',
  messagingSenderId: '813812426276',
  appId: '1:813812426276:web:93e5897af12892ff78dab1',
  measurementId: 'G-VZ83BTR72T',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  
  var inputdata = $('form').serializeArray();
  var data = {};

  inputdata.forEach((entry) => {
    console.log(entry);
    data[entry.name]=entry.value;
  });

  console.log(data);
  firebase.firestore().collection("surveydata").add(data);

  $('form')[0].reset();


});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {

    var numA = 0;
    var numB = 0;
    var numC = 0;
    var numD = 0;
    var numE = 0;

    querySnapshot.forEach((doc) => {
        var s = doc.data().choice;
        console.log("data -- ", s);
        switch(s){
          case "A":
            numA += 1;
            $("#ans1").text(numA); break;
          case "B":
            numB += 1;
            $("#ans2").text(numA); break;
          case "C":
            numC += 1;
            $("#ans3").text(numA); break;
          case "D":
            numD += 1;
            $("#ans4").text(numA); break;
          case "E":
            numE += 1;
            $("#ans5").text(numA); break;
        }
    });

    console.log("n1 = " + numA 
    + ", n2 = " + numB
    + ", n3 = " + numC
    + ", n4 = " + numD
    + ", n5 = " + numE
    )

});
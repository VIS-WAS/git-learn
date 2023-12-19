var courseArray = ["angular", "css", "html", "nodeJs", "javascript"];
var nextCourse = "Typescript";
window.onload = function displayCou() {
  document.getElementById("courseName").innerHTML = nextCourse;
};

function cChoosen(courseN) {
  document.getElementById("instcourse").value = courseN;
}

function validate() {
  const feeback = document.querySelector("#feedback");
  console.log(feeback);
  if (feeback.like[0].checked == false && feeback.like[1].checked == false) {
    alert("you are not selcted any");
  }
}

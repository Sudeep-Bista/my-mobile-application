

function checkResult() {

    let s1 = Number(prompt("Enter subject 1 marks"));
    let s2 = Number(prompt("Enter subject 2 marks"));
    let s3 = Number(prompt("Enter subject 3 marks"));
    let s4 = Number(prompt("Enter subject 4 marks"));
    let s5 = Number(prompt("Enter subject 5 marks"));
    let s6 = Number(prompt("Enter subject 6 marks"));
    let s7 = Number(prompt("Enter subject 7 marks"));
    let s8 = Number(prompt("Enter subject 8 marks"));
  
    let total = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8;
  
    let per = total / 8;
  
    if (per >= 80) {
      console.log("Distinction");
    }
    else if (per >= 60) {
      console.log("First Division");
    }
    else if (per >= 45) {
      console.log("Second Division");
    }
    else if (per >= 32) {
      console.log("Third Division");
    }
    else {
      console.log("Fail");
    }
  
  }
  
  checkResult();

  
let Timer = document.getElementById('Timer');
Timer.style.visibility = "hidden";
let seconds = 0;
let minutes = 0;
let Start_Time;
let End_Time;
let TextArea = document.getElementById('TextArea')
let array = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae earum amet corrupti nisi perspiciatis dolore libero maxime impedit at molestiae quidem modi quisquam aperiam, animi, sunt a fugit dolorum vel! My Name is Vikram Singh and I am From Dwarkadas Jivanlal Sanghvi College Of Engineering Pursuing IT and Will get Graduated in 2024", "Ut possimus cum nemo consequatur voluptatem exercitationem doloremque optio sed repellat? Corrupti aliquam repudiandae provident ipsum mollitia accusamus commodi nihil suscipit ducimus animi facilis maxime distinctio tempore, omnis laudantium impedit saepe dolor illo enim eaque repellat? Praesentium, doloribus perspiciatis, soluta voluptates harum ut distinctio optio hic iure voluptate nesciunt quis culpa laboriosam.", "Mollitia fuga ipsa nisi eaque expedita repudiandae, exercitationem minima deleniti, culpa doloremque magnam consequatur nobis sapiente sint officia ea dolor reiciendis quisquam repellendus voluptates non molestias quo unde. Laboriosam quae modi saepe, unde perspiciatis natus. Perferendis tempore magni doloremque modi culpa? Qui corrupti doloremque vitae quo ipsum itaque fuga tempora inventore consectetur velit modi doloribus beatae odit excepturi labore, veniam provident ipsa officia non sit."];
let Counter = 0;
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let Dynamic_Words = document.getElementById('Dynamic_Words');
let textarea = document.getElementById('textarea');
let random;
textarea.disabled = true;
btn.addEventListener('click', function () {
     if (btn.innerHTML == "START") {
          random = Math.floor(Math.random() * array.length);
          Dynamic_Words.innerText = array[random];
          seconds = 0;
          minutes = 0;
          btn.innerHTML = "DONE";
          textarea.disabled = false;
          Timer.classList.add("animate__backInDown");
          Timer.classList.remove("animate__backOutLeft");
          Timer.style.visibility = "visible";
          Start_Time = new Date();
     }
     else if (btn.innerHTML == "DONE") {
          btn.innerHTML = "START";
          textarea.disabled = true;
          Timer.classList.remove("animate__backInDown");
          setTimeout(() => {
               Timer.classList.add("animate__backOutLeft");
          }, 1000);
          Timer.style.visibility = "visible";
          End_Time = new Date();
          let Total_Time = Math.round(((End_Time - Start_Time) / 1000));
          let Total_Words = textarea.value.split(" ").length;
          let Speed = Math.round(((Total_Words / Total_Time)) * 60);
          // console.log("Total_Words " + Total_Words);
          console.log("Total_Time " + Total_Time);
          // console.log("Speed " + Speed);
          Dynamic_Words.innerHTML = `Your Typing Speed Is ${Speed} Words per Minute` + Correction(textarea.value, array[random]);
          textarea.value = "";
     }
});
function Correction(string1, string2) {
     let words1 = string1.split(" ");
     let words2 = string2.split(" ");
     let Count = 0;
     let Index = 0;
     words1.forEach(function (elements, Index) {
          if (elements == words2[Index]) {
               Count++;
               Index++;
          }
     });
     let Error = words2.length - Count;
     return `You Have Type ${words1.length} Words Out Of ${words2.length} And The Total Number Of Errors Are ${Error}`;
};
btn2.addEventListener('click', function () {
     location.reload();

});
let Watch = document.getElementById('Watch');
Maximum = () => {

     Watch.innerHTML = `${minutes} Minutes : ${seconds} second`;
     seconds++;
     if (seconds == 60) {
          minutes++;
          seconds = 0;
     }
};
setInterval(Maximum, 1000);
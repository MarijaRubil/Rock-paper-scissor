const eduList = document.querySelector(".schoolList");
const expList = document.querySelector(".collList");
const langList = document.querySelector(".jobList");

async function getData() {
    let url = "data.json";
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    data.education.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element.school + " - " + element.time;
        eduList.appendChild(li);
    });


    data.college.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element.place + " - " + element.time;
        expList.appendChild(li);

    });

    data.job.forEach(element => {

        let li = document.createElement("li");
        li.innerHTML = element.place + " - " + element.time;
        langList.appendChild(li);

    });


}
getData();
let myForm=document.querySelector("form");
let Name=document.getElementById("name");
let DocID=document.getElementById("docID");
let dep=document.getElementById("dept");
let Exp=document.getElementById("exp");
let Email=document.getElementById("email");
let Mob=document.getElementById("mbl");
let tbody=document.querySelector("tbody");

let DocData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let data={
        nam:Name.value,
        Id:DocID.value,
        Dept:dep.value,
        Expt:Exp.value,
        Mail:Email.value,
        mob:Mob.value

    }
    DocData.push(data);
    console.log(DocData)

    tbody.innerHTML="";

    DocData.map((ele,i)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("button");
        
        td1.innerText=ele.nam;
        td2.innerText=ele.Id;
        td3.innerText=ele.Dept;
        td4.innerText=ele.Expt;
        td5.innerText=ele.Mail;
        td6.innerText=ele.mob;
        td8.innerText="Delete"

        if(Number(ele.Expt)<=1){
            td7.innerText="Trainee";
        }
        if(Number(ele.Expt)>5){
            td7.innerText="Senior";
        }
        else{
            td7.innerText="Junior";
        }

        td8.addEventListener("click",function(){
            tr.innerHTML="";
            DocData.splice(i,1);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);

    })

})



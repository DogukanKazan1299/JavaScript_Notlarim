//employees.json dosyamızdan verileri ajax ile çekeceğiz ve tablomuza yazdıracağız.
document.getElementById("ajax").addEventListener("click",getAllEmployees);


function getAllEmployees(){
    const xhr = new XMLHttpRequest(); //obje

    xhr.open("GET","employees.json",true);

    xhr.onload=function(){
        let list = document.getElementById("employees");

        if(this.status===200){
            const employees = JSON.parse(this.responseText);//gelen verileri json'a çevir employees'e at;

            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                
                `;
            });
        }
    }


    xhr.send();
}

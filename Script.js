var Employee = function() {
    var id;
    var name;
    var designation;
    var dob;
    var experience;
    var doj;
    function get_id()
    {
        return id;
    }
    function set_id(empid)
    {
        id = empid;
    }
    function get_name()
    {
        return name;
    }
    function set_name(empname)
    {
        name = empname;
    }
    function get_designation()
    {
        return designation;
    }
    function set_designation(typ)
    {
       designation = typ;

    }
    function get_dob()
    {
        return dob;
    }
    function set_dob(dob1)
    {
        dob = dob1;
    }
    function get_experience()
    {
        return experience;
    }
    function set_experience(experiences)
    {
        experience = experiences;
    }
    function get_doj()
    {
        return doj;
    }
    function set_doj(doj1)
    {
        doj = doj1;
    }
    return{
        "setEmpName" : set_name,
        "getEmpName" : get_name,
        "setEmpId" : set_id,
        "getEmpId" : get_id,
        "setEmpDesignation" : set_designation,
        "getEmpDesignation" : get_designation,
        "setEmpDob" : set_dob,
        "getEmpDob" : get_dob,
        "setEmpExp" : set_experience,
        "getEmpExp" : get_experience,
        "setEmpDoj" : set_doj,
        "getEmpDoj" : get_doj

    }

}
var getEmployees = function()
{
    var Employ =[];

    function loadEmployees()
    {
        var table = document.getElementById("employee");

        getJson(function(response)
        {
            var json_array = JSON.parse(response);
            console.log(json_array);
            var emp_user = json_array;

            for(var i=0;i<emp_user.length;i++)
            {
                var emp1 = new Employee();
                var employee = emp_user[i];

                emp1.setEmpName(employee.name);
                emp1.setEmpId(employee.id);
                emp1.setEmpDesignation(employee.designation);
                //console.log(employee.name+" && "+emp1.getEmpType());
                emp1.setEmpDob(employee.dob);
                emp1.setEmpExp(employee.experience);
                emp1.setEmpDoj(employee.doj);
                console.log(employee.doj);

                Employ.push(emp1);
                console.log(emp1.getEmpDoj());

                prepareTable(table,emp1.getEmpId(),emp1.getEmpName(), emp1.getEmpDob(),emp1.getEmpDoj(),emp1.getEmpDesignation(),emp1.getEmpExp());
            }
            console.log("Array of objects ");
            console.log(Employ);

        });
    }
    function prepareTable(table,value1,value2, value3, value4, value5, value6)
    {
        var tr =  document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");

        var input1 = document.createElement("Input");
        input1.setAttribute("value",value1);
        input1.setAttribute("type","text");
        input1.setAttribute("onclick","getDetails(this)");
        td1.appendChild(input1);
        console.log(input1.value);
        var input2 = document.createElement("Input");
        input2.setAttribute("value",value2);
        input2.setAttribute("type","text");
        input2.setAttribute("onclick","getDetails(this)");
        td2.appendChild(input2);
        console.log(input2.value);

        var input3 = document.createElement("Input");
        input3.setAttribute("value",value3);
        input3.setAttribute("type","text");
        input3.setAttribute("onclick","getDetails(this)");
        td3.appendChild(input3);
        console.log(input3.value);

        var input4 = document.createElement("Input");
        input4.setAttribute("value",value4);
        input4.setAttribute("type","text");
        input4.setAttribute("onclick","getDetails(this)");
        td4.appendChild(input4);
        console.log(input4.value);

        var input5 = document.createElement("Input");
        input5.setAttribute("value",value5);
        input5.setAttribute("type","text");
        input5.setAttribute("onclick","getDetails(this)");
        td5.appendChild(input5);
        console.log(input5.value);

        var input6 = document.createElement("Input");
        input6.setAttribute("value",value6);
        input6.setAttribute("type","text");
        input6.setAttribute("onclick","getDetails(this)");
        td6.appendChild(input6);
        console.log(input6.value);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
    }
    function getEmployeeDetails(id)
    {
        //alert(" Hello "+id.value);

        var empDetails = document.getElementById("details");
        var empDetailsnew = document.createElement("div");
        empDetailsnew.id = "details";
        console.log("####"+Employ.length);
        for(var i=0;i<Employ.length;i++)
        {
            var emp = Employ[i];
            //alert("Employ iterating");

            if(emp.getEmpId() == id.value)
            {
                html("Employee Name :",emp.getEmpName(),empDetailsnew);
                html("Employee Id :",emp.getEmpId(),empDetailsnew);
                html("Employee Designation :",emp.getEmpDesignation(),empDetailsnew);
                html("Employee Dob :",emp.getEmpDob(),empDetailsnew);
                html("Employee Experience :",emp.getEmpExp(),empDetailsnew);
                html("Employee Date of Joining :",emp.getEmpDoj(),empDetailsnew);
                break;
            }

        }
        var parentNode = empDetails.parentNode;
        parentNode.replaceChild(empDetailsnew,empDetails);

    }
    function html(Label,value,empDetailsnew)
    {
        var Lab1 = document.createElement("label");
        Lab1.innerHTML = Label;
        var EmpId = document.createElement("label");
        EmpId.innerHTML = value;


        empDetailsnew.appendChild(Lab1);
        empDetailsnew.appendChild(EmpId);

        empDetailsnew.appendChild(document.createElement("br"));

    }
    return{
        "loadEmployees" : loadEmployees,
        "getEmployee" : getEmployeeDetails
    }
}
function getJson(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'Employees.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}



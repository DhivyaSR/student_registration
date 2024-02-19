var student_name = document.getElementById('student_name');
var student_age = document.getElementById('student_age');
var student_gender = document.getElementsByName('student_gender');
var student_course = document.getElementById('student_course');
var student_email = document.getElementById('student_email');

var btn = document.getElementById('btn');
var tbl_body = document.getElementById('tbl_body');


btn.addEventListener("click",function(){
    var tr_element = document.createElement('tr');

    var stud_name_td = document.createElement('td');
    stud_name_td.textContent = student_name.value;

    var stud_age_td = document.createElement('td');
    stud_age_td.textContent = student_age.value;

    var stud_gender_td = document.createElement('td');
    stud_gender_td.textContent = student_gender.value;
    for(i=0;i<student_gender.length;i++){
        if(student_gender[i].checked){
            stud_gender_td.textContent = student_gender[i].value;
        }
    }
    console.log(stud_gender_td);  

    var stud_course_td = document.createElement('td');
    stud_course_td.textContent = student_course.value;

    var stud_email_td = document.createElement('td');
    stud_email_td.textContent = student_email.value;

    
    var delete_row = '<button onclick="deleteRow(event);" style="background-color:red;color:white;">Delete</button>'
    var stud_delete_td = document.createElement('td');
    stud_delete_td.innerHTML = delete_row;

    tr_element.appendChild(stud_name_td);
    tr_element.appendChild(stud_age_td);
    tr_element.appendChild(stud_gender_td);
    tr_element.appendChild(stud_course_td);
    tr_element.appendChild(stud_email_td);
    tr_element.appendChild(stud_delete_td);

    tbl_body.appendChild(tr_element);

    student_name.value = "";
    student_age.value = "";
    student_gender.value = "";
    student_course.value = ""; 
    student_email.value = "";

    
});

function deleteRow(event){
    event.target.closest('tr').remove();
}



  function post(){        
    var nome = prompt("Please enter your nome:", "");
    var cognome = prompt("Please enter your cognome:", "");
    var email = prompt("Please enter your email:", "");
    var phone = prompt("Please enter your phone:", "");

    var postData ={
        "employeeId": 3,
        "firstName": nome,
        "lastName": cognome,
        "email": email,
        "phone": phone
    };
  jQuery.ajax ({
      url:  "http://localhost:8080/api/tutorial/1.0/employees",
      type: "POST",
      data: JSON.stringify(postData),
      dataType: "json",
      contentType: "application/json",
      success: function(data,textStatus,jQxhr){
      }
    });
  }


  function getAll(){
    $(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/tutorial/1.0/employees",
        dataType: 'json',
        success: function(data) {           
            var response="";
            for(var employee in data){
                response += "<tr>"+
                "<td>"+data[employee].firstName+"</td>"+
                "<td>"+data[employee].lastName+"</td>"+
                "<td>"+data[employee].email+"</td>"+
                "<td>"+data[employee].phone+"</td>"+
                "<td><a href='#' onclick='edit("+data[employee].employeeId+")'>Edit</a> | <a href='#' onclick='Remove("+data[employee].employeeId+")'>Remove</a></td>"+
                "</tr>";
            }

            $(response).appendTo($("#employee"));

        }
    });
  });
}

function Remove(id){
  $.ajax({
      url: "http://localhost:8080/api/tutorial/1.0/employees/"+id,
        type: "DELETE",
        contentType: null,
        success: function (data,textstatus,jQxhr){
          alert("Successfully Removed employee!");
      }
    });
}

function edit(id){        
  var nome = prompt("Please enter your nome:", "");
  var cognome = prompt("Please enter your cognome:", "");
  var email = prompt("Please enter your email:", "");
  var phone = prompt("Please enter your phone:", "");

  var postData ={
      "employeeId": id,
      "firstName": nome,
      "lastName": cognome,
      "email": email,
      "phone": phone
  };
jQuery.ajax ({
    url:  "http://localhost:8080/api/tutorial/1.0/employees/"+id,
    type: "PUT",
    data: JSON.stringify(postData),
    dataType: "json",
    contentType: "application/json",
    success: function(data,textStatus,jQxhr){
    }
  });
}



function get(id){
  $(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "http://localhost:8080/api/tutorial/1.0/employees/"+id,
      dataType: 'json',
      success: function(data) {           
          var response="";
          for(var employee in data){
              response += "<tr>"+
              "<td>"+data[employee].firstName+"</td>"+
              "<td>"+data[employee].lastName+"</td>"+
              "<td>"+data[employee].email+"</td>"+
              "<td>"+data[employee].phone+"</td>"+
              "<td><a href='#' onclick='edit("+data[employee].employeeId+")'>Edit</a> | <a href='#' onclick='Remove("+data[employee].employeeId+")'>Remove</a></td>"+
              "</tr>";
          }

          $(response).appendTo($("#employee"));

      }
  });
});
}
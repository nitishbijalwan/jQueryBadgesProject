$(function () {

  // your code will go here

  $.ajax({
    
    url: "https://www.codeschool.com/users/2408022.json",
    dataType: "jsonp",
    success: function (response) {
      var completed=response.courses.completed;
      for (var index = 0; index < completed.length; index++) {
        var course = completed[index];
        console.log(course);
        $("#badges").append("<div class='course'>"+
                              "<h3>"+course.title+"</h3>"+
                              "<img src='"+course.badge+"'/>"+
                              "<a target='_blank' class='btn btn-primary' href='"+course.url+"'>See Course</a>"+
                            "</div>");
      }
    }
  });
});

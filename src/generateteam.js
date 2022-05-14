const generateHtml = data => {

    var html = [];
    for (var i = 0; i < data.length; i++) {
        if(data[i].getRole() == "Manager") {
            var man =  `
<div class="card col-4">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">${data[i].getName()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">Office: ${data[i].getOffice()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
  </ul>
</div>
            
            `;
            html.push(man);
        } else if (data[i].getRole() == "Intern") {
            var int = `
<div class="card col-4">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <p class="card-text">${data[i].getName()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">School: ${data[i].getSchool()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
  </ul>
</div>
            `;
            html.push(int);
        } else if(data[i].getRole() == 'Engineer') {
            var eng = `
<div class="card col-4">
  <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <p class="card-text">${data[i].getName()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${data[i].getGithub()}" target="_blank" rel="noopener noreferrer">${data[i].getGithub()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
  </ul>
</div>
            `;
            html.push(eng);
        }
    }

    return html.join("");
}


module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<link href="./style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
<div class="card">
    <div id= "header"class="card-body">
      My Team
    </div>
  </div>
</div>
<div class="container">
<div class="row"> 
 
        ${generateHtml(team)}
  
</div>
 </div>
</body>
</html>
`
}
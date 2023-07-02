function SubmitForm1()
{
    var FName = document.getElementById("surame").value;
    var LName = document.getElementById("name").value;
    var Journey = document.getElementById("Journey").value;
    var Country = document.getElementById("Country").value;
    
    document.getElementById("Conclusion").innerHTML = "<br>Фамилия: " + FName + 
    "<br><br>Имя: " + LName +"<br><br>Возраст : " + Journey + "<br><br>Место учебы : " + Country;
}
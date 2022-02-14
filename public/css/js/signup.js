$("#signupForm").submit(function(event){
    event.preventDefault();
    const userObj = {
        name:$("#signupName").val(),
        email:$("#signupEmail").val(),
        password:$("#signupPassword").val()
    }

    $.ajax({
        url:"/auth/signup",
        method:"POST",
        data: userObj
    }).done(function(data){
        console.log('data');
        alert('Confirmed')
        location.href = "/login"
    }).fail(function(err){
        console.log(err);
        alert("something weird happened.")
        location.reload();
    })
})
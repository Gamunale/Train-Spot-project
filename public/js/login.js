$("#loginForm").submit(function(event){
    event.preventDefault();
    const userObj = {
        email:$("#loginEmail").val(),
        password:$("#loginPassword").val()
    }
    
    $.ajax({
        url:"/auth/login",
        method:"POST",
        data: userObj
    }).done(function(data){
        console.log(data);
        alert('Logged in');
        location.href = "/"
    }).fail(function(err){
        console.log(err);
        alert("something weird happened.")
        location.reload();
    })
})
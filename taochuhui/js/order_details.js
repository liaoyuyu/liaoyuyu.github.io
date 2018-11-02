$(function(){


    $(".copy").click(function(){
        var input = $("#order_code_input")
        input.select()
        document.execCommand("Copy");
        console.log(document.execCommand("Copy"))
    })

    
})
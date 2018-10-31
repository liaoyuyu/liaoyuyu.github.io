$(function(){
    var data_img = [];//储存上传的图片地址

    var s = 1;//判断选择的建议还是意见
    // 选择建议   还是  意见
    $(".proposal").click(function(){//意见
        $(".opinion .proposal_circle").removeClass("spot")
        $(".proposal .proposal_circle").addClass("spot")
        $(".feedback_con").attr("placeholder","请写下您的建议")
        s = 1
    })
    $(".opinion").click(function(){//意见
        $(".proposal .proposal_circle").removeClass("spot")
        $(".opinion .proposal_circle").addClass("spot")
        $(".feedback_con").attr("placeholder","请写下您的意见")
        s = 2
    })



    // 时时监听输入文字，判断输入了多少个字
    $('#addressSearch').bind('input propertychange', function() { 
        // console.log($("#addressSearch").val().length)  
        var valobj =  $("#addressSearch").val()
        var num =  valobj.length;
        if(num>300){
            $(".much_p").text("300")
            return;
        }
        $(".much_p").text(num)
        // 让按钮改变样式
        if(num <= 0){
            $(".submission").css("background","#c6c6c6")
        }else{
            $(".submission").css("background","#84a539")
        }
    });





    // 上传图片
    uploadobj = function(){
        var f = document.getElementById('file').files[0];
        // console.log(f)

        var reader = new FileReader();  
        //将文件以Data URL形式读入页面  
        reader.readAsDataURL(f);  
        reader.onload=function(e){

            // 只能放4个，如果上传了3张图片，那么隐藏上传
            if($(".upload_li").length > 3){
                $(".upload_li_last").addClass("none")
            }
            // console.log($(".upload_li").length)
            // 在前面追加  元素
            var obj = $("<li class='upload_li'>"
                +"<img class='upload_img' src='"+e.target.result+"' alt=''></img>"
                +" <div class='close_down' onclick='close_down(this)'>"
                +" <img class='close_down_img' src='../img/icon/close_down1.png' alt=''>"
                +"</div>"
                +"</li>"
            )
            $(".upload_li_last").before(obj)
            data_img.push(e.target.result)
            $("#file").val("")
        }  
    }  



    // 删除图片
    close_down = function(e){
        // console.log(e.parentNode)
        var upload_li = document.getElementsByClassName("upload_li")
        for(var i = 0;i<upload_li.length;i++){
            upload_li[i].index = i;
        }
        var n = e.parentNode.index

        // 清楚 data_img 中相对应的数据
        delete data_img[n]

        var parent = e.parentNode;
        parent.parentNode.removeChild(parent)
        if($(".upload_li").length >= 3){
            $(".upload_li_last").removeClass("none")
        }
    }


    // 提交
    $(".submission").click(function(){
        // 判断 是否填写文本域和判断选择的选项
        // console.log($("#addressSearch").val() == "")
        if($("#addressSearch").val() == ""){
            if(s == 1){
                alert("请填写建议！")
                return;
            }
            if(s == 2){
                alert("请填写意见！")
                return;
            }
        }
        // console.log(data_img)
        // 如果删除了图片，会出现 undefined，要清空 undefined
        var b = []
        for(var i = 0;i<data_img.length;i++){
            if(data_img[i] != undefined){
                b.push(data_img[i])
            }
        }
        data_img = b
        

        // 在请求上传   //请求保存成功后，应该清空,不然一直点



    })


})
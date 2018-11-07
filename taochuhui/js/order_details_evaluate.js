$(function(){
    var describe = null;//描述评分
    var logistics = null;//物流评分
    var attitude = null;//态度评分
    var n = 0;//判断是否匿名

    // 描述相符  评分
    $(".describe_evaluate").click(function(){
        for(var i = 0;i<5;i++){
            $(".describe_evaluate").eq(i).attr("src","../img/icon/score_select.png")
            if(i>=$(this).index()){
                $(".describe_evaluate").eq(i).attr("src","../img/icon/score_unselected.png")
            }
        }
        describe = $(this).index();

        // 改变评分级别
        if($(this).index()<=3){
            $(".describe").text("差")
        }else if($(this).index()<=4){
            $(".describe").text("中")
        }else if($(this).index()<=5){
            $(".describe").text("好")
        }

    })


    // 物流服务  评分
    $(".logistics_evaluate").click(function(){
        for(var i = 0;i<5;i++){
            $(".logistics_evaluate").eq(i).attr("src","../img/icon/score_select.png")
            if(i>=$(this).index()){
                $(".logistics_evaluate").eq(i).attr("src","../img/icon/score_unselected.png")
            }
        }
        logistics = $(this).index();
    })


    // 服务态度  评分
    $(".attitude_evaluate").click(function(){
        for(var i = 0;i<5;i++){
            $(".attitude_evaluate").eq(i).attr("src","../img/icon/score_select.png")
            if(i>=$(this).index()){
                $(".attitude_evaluate").eq(i).attr("src","../img/icon/score_unselected.png")
            }
        }
        attitude = $(this).index();
    })

    // 点击匿名
    $(".anonymous_left").click(function(){
        if(!n){
            $(".anonymous_select").attr("src","../img/icon/anonymous_select.png")
            n = 1;
        }else{
            $(".anonymous_select").attr("src","../img/icon/anonymous.png")
            n = 0;
        }
    })

    
    // 上传多张图片
    var m = 0;
    var img = [];
    // var fd = new FormData(); 
    uploadobj = function(){
        for(var i=0;i<document.getElementById('file').files.length;i++){
            m++;
            // console.log(m)
             // 判断上传了多少个
             if(m>=9){
                $(".upload").addClass("none")
                break;
            }

             // fd.append(i,document.getElementById('file').files[i]);
             img.push(document.getElementById('file').files[i])
            
        
            var reader = new FileReader(); 
            reader.readAsDataURL(document.getElementById('file').files[i]); 
            reader.onload=function(e){
            // 在前面追加  元素
            var obj = $( "<div class='upload_img'>"
                +"<img src='"+e.target.result+"' alt=''>"
                +"</div>"
            )
            $(".upload").before(obj)
            }
        }
        console.log(img)
        $("#file").val("")
    }  



    // 点击发布
    $(".Release").click(function(){
        var con = $(".evaluate_p").val()
        // console.log($(".evaluate_p").val())
        if(con == ""){
            $(".evaluate_p").focus()
            return;
        }
        // var describe = null;//描述评分
        // var logistics = null;//物流评分
        // var attitude = null;//态度评分
        if(describe==null||logistics==null||attitude==null){
            alert("请评分！")
            return;
        }

        // 请求接口
        alert("评价成功！")

    })



})
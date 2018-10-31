// 安全防御.js


// 抢先删除 弹出广告  //不知道有用没
var del_times = 0, deTimer = null;
function adGo() {
    var iframe = document.getElementsByTagName('iframe')[0];
    if(iframe){
        console.log(iframe)
        var bodyNode = {tagName:''}, iframeParent, targetNode = iframe.parentNode;
        while (bodyNode.tagName != 'BODY'){
            bodyNode = targetNode;
            if(bodyNode.tagName != 'BODY'){
                iframeParent = targetNode;
                targetNode = targetNode.parentNode;
            }
        }
        if(iframeParent) //如果iframe有父类
            bodyNode.removeChild(iframeParent);
        else
            bodyNode.removeChild(iframe);
    }
    del_times++;
    if (del_times > 10) window.clearInterval(deTimer)
}

//抢先 删除 嵌入广告
(function(){adGo();}())

deTimer = self.setInterval(adGo, 200);




// 防止iframe 嵌入
if (self != top) {
    // 我们的正常页面
    var url = location.href;
    // 父级页面重定向
    top.location = url;
}



// XSS 脚本 


// 转义 用户的输入内容
function html_encode(str) 
{ 
var s = ""; 
if (str.length == 0) return ""; 
s = str.replace(/&/g, "&gt;"); 
s = s.replace(/</g, "&lt;"); 
s = s.replace(/>/g, "&gt;"); 
s = s.replace(/ /g, "&nbsp;"); 
s = s.replace(/\'/g, "&#39;"); 
s = s.replace(/\"/g, "&quot;"); 
s = s.replace(/\n/g, "<br>"); 
return s; 
}

// function html_decode(str) 
// { 
// var s = ""; 
// if (str.length == 0) return ""; 
// s = str.replace(/&gt;/g, "&"); 
// s = s.replace(/&lt;/g, "<"); 
// s = s.replace(/&gt;/g, ">"); 
// s = s.replace(/&nbsp;/g, " "); 
// s = s.replace(/&#39;/g, "\'"); 
// s = s.replace(/&quot;/g, "\""); 
// s = s.replace(/<br>/g, "\n"); 
// return s; 
// }


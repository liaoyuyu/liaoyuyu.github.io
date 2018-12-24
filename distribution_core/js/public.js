// 手机号中间设置星号
function set_center_asterisk(obj){
    var tel = obj;
    var reg = /^(\d{3})\d{5}(\d{3})$/;
    tel = tel.replace(reg, "$1*****$2");
    return tel
}
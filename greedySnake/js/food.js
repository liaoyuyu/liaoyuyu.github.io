// 食物 js

export default class Food {
    // constructor 是 类的 初始化调用方法
    constructor(map) {
        // 地图
        this.map = map;

        // 坐标
        this.x = 0;
        this.y = 0;

        // 横竖 个数
        this.wNum = this.map.clientWidth / 20;
        this.hNum = this.map.clientHeight / 20;

        // 随机生成
        this.randCreate();
    }

    // 随机生成
    randCreate() {
        // 先删除
        let food = document.querySelector(".food");
        if (food) food.remove();

        // 随机数,获取位置
        let x = Math.floor(Math.random() * this.wNum) * 20;
        let y = Math.floor(Math.random() * this.hNum) * 20;

        // 创建
        food = document.createElement("div");
        food.className = "food";
        // 位置
        food.style.left = x + "px";
        food.style.top = y + "px";
        // 添加
        this.map.append(food)

        this.x = x;
        this.y = y;
    }
}
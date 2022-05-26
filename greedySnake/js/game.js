import Food from "./food.js"
import Snake from "./snake.js"

// 游戏规则 js
export default class Game {
    constructor(ele, fraction) {
        this.map = document.querySelector(ele);

        // 初始化食物和蛇
        this.food = new Food(this.map);
        this.snake = new Snake(this.map);
        this.change();

        // 分数
        this.fraction = document.querySelector(fraction);

        // 游戏级别
        this.level = 3;
        // 吃到的食物次数
        this.num = 0;

        this.isFail = false;//是否失败

        // 定时器
        this.timer = null;
    }

    // 开始计时
    startGame() {
        // 判断是否是 死亡后，再次点击 开始
        if (this.isFail) {
            this.refresh();
        }
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            // 蛇移动
            this.snake.move();
            // 是否死亡
            if (this.snake.isDeath()) {
                this.stop();
                this.isFail = true;
                alert("游戏结束！");
            }
            // 是否 吃到食物
            if (this.snake.isEatFood(this.food)) {
                // 生成蛇身
                this.snake.creatSnake();
                // 随机食物位置
                this.food.randCreate();
                // 计算分数
                this.setFraction();
            }
        }, 500 - this.level * 50)
    }

    // 暂停游戏
    stop() {
        clearInterval(this.timer);
    }
    // 重新开始
    refresh() {
        this.stop();
        this.snake.init();
        this.food.randCreate();
        // 游戏级别
        this.level = 3;
        // 吃到的食物次数
        this.num = 0;
        this.fraction.innerHTML = 0;
    }

    // 计算分数
    setFraction() {
        this.num++;
        // 加分数
        let fraction = this.num * 100;
        this.fraction.innerHTML = fraction;

        // 判断级别
        if (this.num % 10 == 0) {
            this.level++;
            // 级别最大 8
            if (this.level >= 8) this.level = 8;
            this.stop();
            this.startGame();
        }
    }

    // 方向修改
    change() {
        document.addEventListener("keydown", (e) => {
            e = e || window.event;
            let code = e.keyCode || e.which;
            switch (code) {
                case 37: this.snake.direction = "left"; break;
                case 38: this.snake.direction = "top"; break;
                case 39: this.snake.direction = "right"; break;
                case 40: this.snake.direction = "bottom"; break;
            }
        })
    }


}
// 蛇 相关js
export default class Snake {
    constructor(map) {
        this.map = map;

        // 蛇 对象
        this.snake = [];  // [head,body,body]

        // 方向
        this.direction = "right";


        this.init();
    }

    // 蛇头位置
    headPos() {
        // 判断是否有蛇头
        let head = this.snake[0];
        if (!head) return { left: 0, top: 0 };

        // 有蛇头,根据方向设置蛇头位置
        // 当前蛇头位置
        let pos = { left: head.offsetLeft, top: head.offsetTop }
        // 根据方向，设置蛇头位置
        switch (this.direction) {
            case "left": pos.left -= 20; break;
            case "right": pos.left += 20; break;
            case "top": pos.top -= 20; break;
            case "bottom": pos.top += 20; break;
        }

        // 边框距离
        let w = this.map.clientWidth;
        let h = this.map.clientHeight;
        // 判断，如果穿过边框，就从对面边框生成
        if (pos.left < 0) {
            pos.left = w - 20;
        }
        if (pos.right >= w) {
            pos.left = 0;
        }
        if (pos.top < 0) {
            pos.top = h - 20;
        }
        if (pos.top >= h) {
            pos.top = 0;
        }
        return pos;
    }

    // 生成 蛇头和身体
    creatSnake() {
        // 坐标
        let pos = this.headPos();

        // 头
        let head = this.snake[0];

        // 如果有头，就把第一个的 类 改成 body 类
        if (head) {
            // 有头
            head.className = "body";
        }

        // 里面没头了，创建头
        head = document.createElement("div");
        head.className = "head";
        head.style.left = pos.left + "px";
        head.style.top = pos.top + "px";

        // 数组追加
        this.snake.unshift(head);
        // html 添加
        this.map.append(head);
    }

    // 初始化蛇
    init() {
        if (this.snake.length) {
            this.snake.forEach(v => {
                v.remove();
            });
            this.snake = [];
            this.direction = "right";
        }
        for (let i = 0; i < 3; i++) {
            this.creatSnake();
        }
    }


    // 移动
    move() {
        // 移除 数组 最后个
        let body = this.snake.pop();
        body.remove();

        // 生成一次
        this.creatSnake();
    }


    // 判断是否死亡
    isDeath() {
        let head = this.snake[0];
        // 判断是否 撞到 自己
        for (let i = 1; i < this.snake.length; i++) {
            if (this.snake[i].offsetLeft == head.offsetLeft && this.snake[i].offsetTop == head.offsetTop) {
                return true;
            }
        }
        return false;
    }

    // 是否 吃到食物
    isEatFood(food) {
        let head = this.snake[0];
        if (head.offsetLeft == food.x && head.offsetTop == food.y) {
            return true;
        } else {
            return false;
        }
    }
}
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BirdControl from "./birdControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    // 速度
    @property
    speed: number = 4;

    // 宽度
    @property
    width: number = 288;

    // 小鸟
    @property(BirdControl)
    bird: BirdControl = null;

    // onLoad () {}

    start () {
        // 点击监听
        for (let bg of this.node.children) {
            bg.on(cc.Node.EventType.MOUSE_DOWN, () => {
                this.bird.fly();
            })
        }

    }

    update (dt) {
        // 2个子节点移动
        for (let bg of this.node.children) {
            bg.x -= this.speed * dt;
            // 背景超出屏幕
            if (bg.x < -this.width) {
                bg.x += this.width * 2;
            }
        }
    }
}

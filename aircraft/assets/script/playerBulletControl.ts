// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EnemyControl from "./enemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerBullectControl extends cc.Component {

    @property
    bulletSpeed: number = 800;

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.y += dt * this.bulletSpeed;
        // 销毁子弹
        if (this.node.y > cc.winSize.height) {
            this.node.destroy();
        }
    }

    // 子弹碰撞
    onCollisionEnter(other) {
        // 如果碰到敌人, 敌人死亡, 然后销毁自己
        if (other.tag == 1){
            // 销毁敌人
            other.getComponent(EnemyControl).die();
            // 销毁自己
            this.node.destroy();
        }
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {

    isDie: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        // 敌人移动
        if (this.isDie == false) {
            this.node.setPosition(this.node.position.x, this.node.position.y - 300*dt);
        }
        // 超出屏幕, 则销毁
        if (this.node.position.y < 0) {
            cc.log("Enemy 销毁");
            this.node.destroy();
        }
    }

    // 敌人死亡
    die() {
        // 替换图片, 替换成目录下resources/enemy_die.png
        this.isDie = true;
        cc.loader.loadRes("enemy0_die", cc.SpriteFrame, (err, spriteFrame) => {
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // 等待一秒钟
            setTimeout(() => {
            this.node.destroy();
            }, 300);
        });
       
    }
}

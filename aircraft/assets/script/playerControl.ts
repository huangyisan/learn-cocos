// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EnemyManager from "./enemyManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayControl extends cc.Component {

    @property(cc.Prefab)
    bullet:cc.Prefab = null;

    start () {
        // start监听事件即可
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event:cc.Event.EventTouch)=>{
            let touch = event.getLocation();
            touch.x = touch.x < 0 ? 0:touch.x;
            touch.x = touch.x > cc.winSize.width ? cc.winSize.width:touch.x;
            touch.y = touch.y < 0 ? 0:touch.y;
            touch.y = touch.y > cc.winSize.height ? cc.winSize.height:touch.y;
            this.node.setPosition(touch.x, touch.y)
        })
        // 攻击 计时器
        this.schedule(this.createBullet,0.5)

        // 监听子弹碰撞, 这里我的理解是, 子弹作为prefab挂载在player下, 所以在player下监听.
        cc.director.getCollisionManager().enabled = true;
    }

    createBullet() {
        // 创建子弹, 因为子弹会多次用到, 所以使用预设体的方式(prefab)
        let bullet = cc.instantiate(this.bullet);
        // 设置父节点
        bullet.setParent(cc.director.getScene())
        // 设置子弹位置,和飞机x位置一致, y比飞机高一点
        bullet.setPosition(this.node.x, this.node.y + 50)
    }

    stopSchedule() {
        cc.log("stop schedule")
        this.unschedule(this.createBullet);
    }

    update (dt) {

    }

    // 碰撞到敌机
    onCollisionEnter(other) {
        if(other.tag == 1) {
            this.die();
        }
    }

    die() {
        this.stopSchedule();
        cc.loader.loadRes("hero1_die", cc.SpriteFrame, (err, spriteFrame) => {
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            
        });
        setTimeout(() => {
            cc.log("this node in setTimeout: ", this.node);
            this.node.destroy();
        }, 1000);
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {


    onLoad () {
        // onLoad 开启物理
        cc.director.getPhysicsManager().enabled = true;
        // 界面如果指定了default clip 则不需要以下代码.
        // let anim = this.getComponent(cc.Animation);
        // anim.play("bird");
    }

    start () {
    
    }

    // 小鸟飞
    fly () {
        // 获取刚体组件 并给一个y的速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 500);

    }
    // update (dt) {}
    // 监听
    onBeginContact (contact, selfCollider, otherCollider) {
        if (otherCollider.tag == 1) {
            cc.log("加分")
        } else {
            cc.log("撞到管道或者地面了")
        }
   }
}

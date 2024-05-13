// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {

    // 敌机预设体
    @property(cc.Prefab)
    enemyPrefab: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 每隔两秒创建敌机
        
        this.schedule(this.createEnemy, 2);

        // 监听敌机碰
        cc.director.getCollisionManager().enabled = true;
    }
    
    // stopSchedule() {
    //     cc.log("stop schedule")
    //     this.unschedule(this.shoot);
    // }

    createEnemy(){
        let enemy = cc.instantiate(this.enemyPrefab);
        enemy.setParent(cc.director.getScene());
        enemy.setPosition(Math.random() * cc.winSize.width, this.node.y);
    }
    // update (dt) {}
}

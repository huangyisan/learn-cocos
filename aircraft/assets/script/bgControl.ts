const {ccclass, property} = cc._decorator;

const shiftY = -50;

@ccclass
export default class BgControl extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        // 移动背景
        for(let bgNode of this.node.children) {
            // 每秒移动50  dt为两帧之间的间隔\
            bgNode.setPosition(bgNode.position.x, bgNode.position.y- 50*dt);
            // 当第一个背景移动出屏幕的时候. 则放到第二个背景之上
            if (bgNode.y < (shiftY-852)) {
                bgNode.setPosition(bgNode.position.x, bgNode.position.y + 852 * 2);
            }
        }
    }
}

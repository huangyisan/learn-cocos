const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeControl extends cc.Component {

    @property
    speed: number = 50;
    // onLoad () {}

    start () {

    }

    update (dt) {
        for(let pipe of this.node.children) {
            pipe.x -= this.speed * dt;
            if(pipe.x < -50) {
                pipe.x += 288 *2;
                pipe.y = Math.random() * 150 + 450;
            }
        }
    }
}
 
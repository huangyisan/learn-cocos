// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyAnimationControl extends cc.Component {

    // 每秒播放速度
    @property()
    speed: number = 0.1

    // 播放帧数组
    @property([cc.SpriteFrame])
    sprites: cc.SpriteFrame[] = []

    // 是否播放动画
    @property
    isPlay: boolean = false
    // 当前播放第几帧
    index: number = 0;
    // 计时器, 
    timer: number = 0;


    start () {

    }

    play() {
        this.isPlay = true;
    }
    stop() {
        this.isPlay = false;
    }

    update (dt) {
        if (this.isPlay) {
            // 播放动画
            // 计时器增加, 计时器用来加dt, dt是每秒的毫秒数, 当经过的毫秒数大于speed的时候,就切换动画
            this.timer += dt;
            if (this.timer >= this.speed) {
                // 计时器清零
                this.timer = 0;
                this.index ++;
                // 如果要越界,则重新开始 为0
                if (this.index >= this.sprites.length){
                    this.index = 0;
                }
                // 更换帧图片
                this.getComponent(cc.Sprite).spriteFrame = this.sprites[this.index]
            }
        }
    }
}

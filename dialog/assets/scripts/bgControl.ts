// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import PaojieControl from "./paojieControl";
import MsgControl from "./msgControl";


const {ccclass, property} = cc._decorator;

class Message{
    name: string; //说话人名字
    content: string; //说话人内容
    face: string; //说话人表情
    mouth: string; //说话人嘴巴

    constructor(name: string, content: string, face: string, mouth: string)
    { 
        this.name = name;
        this.content = content;
        this.face = face;
        this.mouth = mouth;
    }
}

@ccclass
export default class BgControl extends cc.Component {


    // 人物和消息的控制器
    @property(PaojieControl)
    paojieControl: PaojieControl = null;
    @property(MsgControl)
    msgControl: MsgControl = null;

    // 消息数组
    msgs: Message[] = null;
    // 当前第几条消息
    index: number = 0;

    // onLoad () {}

    start () {
        // 初始化数组
        this.msgs = [
            new Message("御坂美琴", "今天天气真好", "paojieface_01", "paojiemouth_01"),
            new Message("御坂美琴", "天气不好", "paojieface_02", "paojiemouth_01"),
        ]
        // 鼠标点击对话
        this.node.on(cc.Node.EventType.MOUSE_DOWN, () => {
            // 防止索引越界
            if (this.index < this.msgs.length) {
                // 如果对话面板没显示, 则显示对话面板
                if (!this.msgControl.node.active) {
                    this.msgControl.node.active = true;
                }
                // 读消息
                let message = this.msgs[this.index];
                this.index += 1;
                // 显示消息
                this.paojieControl.setImage(message.face, message.mouth)
                this.msgControl.setMessage(message.name, message.content)
            }
            
        })
    }

    // update (dt) {}
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

class Persion {
    name: string;
    age: number;
    skill: string[];
}

@ccclass
export default class StorageControl extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 存储数据
        cc.sys.localStorage.setItem('name', '蝙蝠侠');

        //获取数据
        let name = cc.sys.localStorage.getItem('name');
        cc.log(name)

        // 移除数据
        cc.sys.localStorage.removeItem('name');

        // 清除数据, 删除所有的数据!
        cc.sys.localStorage.clear();

        // 转换成json字符串
        let persion = new Persion();
        persion.name = '蝙蝠侠';
        persion.age = 18;
        persion.skill = ['飞越天际', '飞跃太阳系', '飞越银河'];

        let json = JSON.stringify(persion);

        // json字符串转对象
        // json -> 对象
        let persion2:Persion = Object.assign(new Persion(), JSON.parse(json));

        cc.log(json)
        cc.log(persion2.name)

    }

    // update (dt) {}
}

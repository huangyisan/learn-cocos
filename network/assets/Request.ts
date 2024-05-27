// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // onLoad () {}

    start () {
        let url = "https://m.douban.com/rexxar/api/v2/movie/suggestion?start=0&count=10&new_struct=1&with_review=1&for_mobile=1";
        // 发起请求
        let request = cc.loader.getXMLHttpRequest();
        request.open("GET", url, true); // true 表示异步
        request.onreadystatechange = () => {
            // 请求状态改变
            // 请求状态结束, 获取信息, readyState为4 表示请求结束
            if (request.readyState === 4 && request.status === 200) {
                // 获取数据
                // let data = JSON.parse();
                cc.log(request.responseText);
            }else {
                cc.log("=====error======")
            }
        };
        request.send();



    }

    // update (dt) {}
}

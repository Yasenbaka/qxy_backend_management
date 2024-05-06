// 定义失败状态码的偏移量
const STATUS_SEC_FAILURE_OFFSET = 1000;
const STATUS_THIRD_FAILURE_OFFSET = 10;


const failureStatus = (successStatus) => {
    return [
        successStatus[0] + STATUS_THIRD_FAILURE_OFFSET,
        successStatus[1].replace('成功', '失败')
    ];
}

let STATUS_FIR = 90000;
let STATUS_SEC = 0;

class CodeStatus{
    class BasicCommunication{
        class FaBBasicCommunication{
            constructor() {
                STATUS_FIR = 10000;
                STATUS_SEC = 0;
            }
            ALL_VIEW_ASSETS_SUCCESS = [0 + STATUS_FIR + STATUS_SEC, '获取全部界面资源成功'];
            ALL_VIEW_ASSETS_FAILURE = failureStatus(this.ALL_VIEW_ASSETS_SUCCESS());
}
}
}
const a = new CodeStatus().BasicCommunication.FaBBasicCommunication;
console.log(a.ALL_VIEW_ASSETS_SUCCESS);
// 定义失败状态码的偏移量
const STATUS_SEC_FAILURE_OFFSET = 1000;
const STATUS_THIRD_FAILURE_OFFSET = 10;

// 处理失败的情况
const failureStatus = (successStatus) => {
    if (successStatus[0] !== 0){
        return [
            successStatus[0] + STATUS_THIRD_FAILURE_OFFSET,
            successStatus[1].replace('成功', '失败')
        ];
    } else {
        return successStatus;
    }
}

// code分类表示
const codeClassify = {
    BasicCommunication: {'STATUS_FIR': 10000, 'STATUS_SEC': 0},
    UserArchive: {'STATUS_FIR': 10000, 'STATUS_SEC': 100},
    BasicCommodity: {'STATUS_FIR': 10000, 'STATUS_SEC': 200},
    AdminCommodity: {'STATUS_FIR': 20000, 'STATUS_SEC': 0}
};

// code分类选择失败的数组返回
const codeClassifyCheckFailure = [0, '开发者选择的Code分类有错误？']

class CodeStatus{
    STATUS_FIR = 90000;
    STATUS_SEC = 0;
    constructor({STATUS_FIR, STATUS_SEC}) {
        this.STATUS_FIR = STATUS_FIR;
        this.STATUS_SEC = STATUS_SEC;
    }
    // 判断Code分类是否符合公文规范
    judgeCodeClassify = ({STATUS_FIR, STATUS_SEC}) => this.STATUS_FIR === STATUS_FIR && this.STATUS_SEC === STATUS_SEC;

    // 处理code
    ALL_VIEW_ASSETS_SUCCESS = () => this.judgeCodeClassify(codeClassify.UserArchive)?
        [1 + this.STATUS_FIR + this.STATUS_SEC, '获取全部界面资源成功']:
        codeClassifyCheckFailure;
    ALL_VIEW_ASSETS_FAILURE = () => failureStatus(this.ALL_VIEW_ASSETS_SUCCESS());
}


console.log(new CodeStatus(codeClassify.UserArchive).ALL_VIEW_ASSETS_FAILURE());
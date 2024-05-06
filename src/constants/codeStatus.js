/*
* JavaScript语言调用Code码
* 调用语法：
*   引入文件import {codeClassify, CodeStatus} from "?/constants/codeStatus.js";
*   先获取codeClassify对象内的键值
*   实例化new CodeStatus类
*   实例化时向CodeStatus类构造函数传参先前在codeClassify中获得的键值
*   最后调用实例化对象里的常量函数
* 示例：
*   const codeStatus = new CodeStatus(codeClassify.UserArchive)
*   const userLoginCode = codeStatus.USER_ARCHIVE_LOGIN_SUCCESS()
* 链式调用示例：
*   const userLoginCode = new CodeStatus(codeClassify.UserArchive).USER_ARCHIVE_LOGIN_SUCCESS()
* */

// 定义失败状态码的偏移量
const STATUS_SEC_FAILURE_OFFSET = 1000;
const STATUS_THIRD_FAILURE_OFFSET = 10;

// 处理失败的情况
const failureStatus = (successStatus) =>
    successStatus[0] !== 0 ?
        [successStatus[0] + STATUS_THIRD_FAILURE_OFFSET,successStatus[1].replace('成功', '失败')] :
        successStatus;

// code分类表示
const codeClassify = {
    BasicCommunication: {'STATUS_FIR': 10000, 'STATUS_SEC': 0},
    UserArchive: {'STATUS_FIR': 10000, 'STATUS_SEC': 100},
    BasicCommodity: {'STATUS_FIR': 10000, 'STATUS_SEC': 200},
    AdminCommodity: {'STATUS_FIR': 20000, 'STATUS_SEC': 0},
    TokenIssuance: {'STATUS_FIR': 30000, 'STATUS_SEC': 0},
    TokenDetailsStatus: {'STATUS_FIR': 30000, 'STATUS_SEC': 100}
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

    // 统一计算code值
    calculateCode = (add) => add + this.STATUS_FIR + this.STATUS_SEC;

    // 处理code
    ALL_VIEW_ASSETS_SUCCESS = () => this.judgeCodeClassify(codeClassify.BasicCommunication)?
        [this.calculateCode(0), '获取全部界面资源成功']: codeClassifyCheckFailure;
    ALL_VIEW_THEME_ASSETS_SUCCESS = () => this.judgeCodeClassify(codeClassify.BasicCommunication)?
        [this.calculateCode(1), '获取界面主题资源成功']: codeClassifyCheckFailure;
    ALL_VIEW_COLOR_SUCCESS = () => this.judgeCodeClassify(codeClassify.BasicCommunication)?
        [this.calculateCode(2), '获取界面配色参数成功']: codeClassifyCheckFailure;
    ALL_VIEW_ASSETS_FAILURE = () => failureStatus(this.ALL_VIEW_ASSETS_SUCCESS());
    ALL_VIEW_THEME_ASSETS_FAILURE = () => failureStatus(this.ALL_VIEW_THEME_ASSETS_SUCCESS);
    ALL_VIEW_COLOR_FAILURE = () => failureStatus(this.ALL_VIEW_COLOR_SUCCESS);
    MISSING_KEY = () => this.judgeCodeClassify(codeClassify.BasicCommunication)?
        [this.calculateCode(3), '缺少必要的键']: codeClassifyCheckFailure;
    MISSING_VALUE = () => this.judgeCodeClassify(codeClassify.BasicCommunication)?
        [this.calculateCode(4), '缺少必要的值或值的类型不正确']: codeClassifyCheckFailure;


    USER_ARCHIVE_SUCCESS = () => this.judgeCodeClassify(codeClassify.UserArchive)?
        [this.calculateCode(0), '用户信息功能成功']: codeClassifyCheckFailure;
    USER_ARCHIVE_REGISTER_SUCCESS = () => this.judgeCodeClassify(codeClassify.UserArchive)?
        [this.calculateCode(1), '用户信息注册成功']: codeClassifyCheckFailure;
    USER_ARCHIVE_LOGIN_SUCCESS = () => this.judgeCodeClassify(codeClassify.UserArchive)?
        [this.calculateCode(2), '用户信息登录成功']: codeClassifyCheckFailure;
    USER_ARCHIVE_REVISE_SUCCESS = () => this.judgeCodeClassify(codeClassify.UserArchive)?
        [this.calculateCode(3), '用户信息修改成功']: codeClassifyCheckFailure;
    USER_ARCHIVE_FAILURE = () => failureStatus(this.USER_ARCHIVE_SUCCESS);
    USER_ARCHIVE_REGISTER_FAILURE = () => failureStatus(this.USER_ARCHIVE_REGISTER_SUCCESS);
    USER_ARCHIVE_LOGIN_FAILURE = () => failureStatus(this.USER_ARCHIVE_LOGIN_SUCCESS);
    USER_ARCHIVE_REVISE_FAILURE = () => failureStatus(this.USER_ARCHIVE_REVISE_SUCCESS);

}

const a = new CodeStatus(codeClassify.BasicCommunication).ALL_VIEW_THEME_ASSETS_FAILURE()
console.log(a);
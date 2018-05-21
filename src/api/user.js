import {wx} from 'common-mpvue'

export default {
  //获取用户状态
  getUserStatus(param) {
    return wx.httpRequest.httpJsonPost('/user/getUser', param)
  }
}

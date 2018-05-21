import {wrap} from 'common-mpvue'
import App from './App'
import * as api from './api'
import * as storageStore from './store'

wrap(App, {
  name: 'education',
  version: 'v0.0.1',
  pkgName: '优选教育',
  domain: 'http://127.0.0.1'
}, {
  api, storageStore
})

export default {
  config: {
    pages: ['^pages/clients/index/main','pages/clients/ind_fabu/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#21afa9',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}

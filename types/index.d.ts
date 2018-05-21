import APP from 'app'

//UMD module
export as namespace WXAPPCommon;

//兼容CommonJs、AMD
export = WXAPPCommon;

declare namespace WXAPPCommon {
  export var $app: APP
}

export const kuiStore = defineStore('kuiStore', {
  state: () => ({
    msgToast: {} as MsgToastInter
  }),
  actions: {
    // 轻提示
    onToast(val: string | MsgToastInter) {
      if (typeof val === 'string') {
        this.msgToast = { show: true, text: val }
      } else {
        this.msgToast = { show: true, text: val.text, type: val.type }
      }
    }
  }
})

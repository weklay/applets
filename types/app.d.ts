interface App {
  storageStore: storageStore
}

interface storageStore {
  userStore: userStore
}

interface userStore {
  getters: getters
}

interface getters {
  getUserId: any,
  getMember: any,
  getType: any,
}

export default App

// import { createPinia, defineStore } from "pinia";
// import { GlobalState, ThemeConfigProps } from "./interface";
// import { DEFAULT_PRIMARY } from "@/config/config";
// import piniaPersistConfig from "@/config/piniaPersist";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { loginApi } from "@/api/modules/login";
import { Login } from "@/api/interface";

import { defineStore } from "pinia";

export const UserStore = defineStore("UserStore", {
  state: () => ({
    username: "",
    userId: "",
  }),
  actions: {
    login(params: Login.ReqLoginForm) {
      return new Promise((resolve, reject) => {
        // loginApi(params).then((res) => {
        //   console.log(res);
        // });

        loginApi(params)
          .then((res) => {
            // setToken(res.token)
            // this.token = res.token
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

// export const GlobalStore = defineStore({
//   id: "GlobalState",
//   state: (): GlobalState => ({
//     token: "",
//     userInfo: "",
//     assemblySize: "default", //antd 组件大小
//     themeConfig: {
//       // 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
//       layout: "vertical",
//       primary: DEFAULT_PRIMARY,
//       isDark: false,
//       isGrey: false,
//       isCollapse: false,
//       isWeak: false,
//       breadcrumb: false,
//       breadcrumbIcon: false,
//       tabs: false,
//       tabsIcon: false,
//       footer: false,
//       maximize: false,
//     },
//   }),
//   actions: {
//     setToken(token: string) {
//       this.token = token;
//     },
//     setUserInfo(userInfo: any) {
//       this.userInfo = userInfo;
//     },
//     setAssemblySizeSize(assemblySize: string) {
//       this.assemblySize = assemblySize;
//     },
//     updateLanguage(language: string) {
//       this.language = language;
//     },
//     setThemeConfig(themeConfig: ThemeConfigProps) {
//       this.themeConfig = themeConfig;
//     },
//   },
//   persist: piniaPersistConfig("GlobalState"),
// });

// const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

// export default pinia;

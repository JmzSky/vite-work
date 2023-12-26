//声明window上自定义属性，如事件总线
declare interface Window {
  eventBus: any
}

//声明.vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}

interface ImportMetaEnv {
  /** API 基础路径 */
  VITE_APP_BASE_API: string
  VITE_APP_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

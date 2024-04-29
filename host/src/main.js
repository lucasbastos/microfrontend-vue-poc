import { createApp, defineAsyncComponent } from "vue";
const app = createApp(Layout);
const RemoteButton = defineAsyncComponent(() => import("remote_app/Button"));
app.component("RemoteButton", RemoteButton);
app.mount("#root");

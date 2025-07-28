import { createAppStore } from "@hrbox/shared-templates";
import { rootReducer } from "./rootReducer";

const { store } = createAppStore(rootReducer, "project-management");

export { store };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
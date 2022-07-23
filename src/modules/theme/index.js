import store from "store";
import { setTheme } from "./utils";
import { config } from "/@/cool/config";
import "./static/css/index.scss";

export default {
	install(_, options) {
		const theme = store.get("theme") || options;

		if (theme) {
			if (theme.isGroup !== undefined) {
				config.app.menu.isGroup = theme.isGroup;
			}

			setTheme(theme);
		}
	}
};

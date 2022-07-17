const module = {
	get list() {
		return window.__modules__ || [];
	},

	set(list) {
		window.__modules__ = list;
	},

	get(name) {
		return name ? window.__modules__.find((e) => e.name == name) : window.__modules__;
	}
};

export default module;

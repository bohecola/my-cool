export function revisePath(path) {
	if (!path) {
		return "";
	}

	return path[0] == "/" ? path : `/${path}`;
}
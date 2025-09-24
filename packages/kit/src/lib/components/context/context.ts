import { getContext, setContext } from 'svelte';

const key = Symbol('context');

export function setBasePathContext(basePath: string) {
	setContext(key, basePath);
}

export function getBasePathContext() {
	return getContext(key) as string;
}
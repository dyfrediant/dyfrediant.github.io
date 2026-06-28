
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta name=\"description\" content=\"Frediant — Fullstack Developer & CRO Specialist. Building high-conversion digital products, from architecture to pixel-perfect UI.\" />\n    <meta name=\"theme-color\" content=\"#0d0d12\" />\n    <meta property=\"og:title\" content=\"Frediant — Portfolio\" />\n    <meta property=\"og:description\" content=\"Fullstack Developer & CRO Specialist. Building high-conversion digital products.\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/assets/img/favicon.png\" />\n    " + head + "\n  </head>\n  <body data-sveltekit-prerender=\"true\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error
	},
	version_hash: "wecg0v"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };

export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/css/style.css","assets/css/style.css.map","assets/fontawesome/LICENSE.txt","assets/fontawesome/attribution.js","assets/fontawesome/css/all.css","assets/fontawesome/css/all.min.css","assets/fontawesome/css/brands.css","assets/fontawesome/css/brands.min.css","assets/fontawesome/css/duotone.css","assets/fontawesome/css/duotone.min.css","assets/fontawesome/css/fontawesome.css","assets/fontawesome/css/fontawesome.min.css","assets/fontawesome/css/light.css","assets/fontawesome/css/light.min.css","assets/fontawesome/css/regular.css","assets/fontawesome/css/regular.min.css","assets/fontawesome/css/solid.css","assets/fontawesome/css/solid.min.css","assets/fontawesome/css/svg-with-js.css","assets/fontawesome/css/svg-with-js.min.css","assets/fontawesome/css/thin.css","assets/fontawesome/css/thin.min.css","assets/fontawesome/css/v4-font-face.css","assets/fontawesome/css/v4-font-face.min.css","assets/fontawesome/css/v4-shims.css","assets/fontawesome/css/v4-shims.min.css","assets/fontawesome/css/v5-font-face.css","assets/fontawesome/css/v5-font-face.min.css","assets/fontawesome/webfonts/fa-brands-400.ttf","assets/fontawesome/webfonts/fa-brands-400.woff","assets/fontawesome/webfonts/fa-brands-400.woff2","assets/fontawesome/webfonts/fa-duotone-900.ttf","assets/fontawesome/webfonts/fa-duotone-900.woff","assets/fontawesome/webfonts/fa-duotone-900.woff2","assets/fontawesome/webfonts/fa-light-300.ttf","assets/fontawesome/webfonts/fa-light-300.woff","assets/fontawesome/webfonts/fa-light-300.woff2","assets/fontawesome/webfonts/fa-regular-400.ttf","assets/fontawesome/webfonts/fa-regular-400.woff","assets/fontawesome/webfonts/fa-regular-400.woff2","assets/fontawesome/webfonts/fa-solid-900.ttf","assets/fontawesome/webfonts/fa-solid-900.woff","assets/fontawesome/webfonts/fa-solid-900.woff2","assets/fontawesome/webfonts/fa-thin-100.ttf","assets/fontawesome/webfonts/fa-thin-100.woff","assets/fontawesome/webfonts/fa-thin-100.woff2","assets/fontawesome/webfonts/fa-v4compatibility.ttf","assets/fontawesome/webfonts/fa-v4compatibility.woff2","assets/img/ampg.webp","assets/img/carikuliah.webp","assets/img/enfa.webp","assets/img/favicon.png","assets/img/fpt-2.webp","assets/img/fpt.webp","assets/img/innisfree.webp","assets/img/lofity.webp","assets/img/logo.webp","assets/img/love-bonito.webp","assets/img/noel.webp","assets/img/peruri.webp","assets/img/png/aia.png","assets/img/png/ampg.png","assets/img/png/carikuliah.png","assets/img/png/enfa.png","assets/img/png/fpt-2.png","assets/img/png/fpt.png","assets/img/png/innisfree.png","assets/img/png/lofity.png","assets/img/png/logo.png","assets/img/png/love-bonito.png","assets/img/png/noel.png","assets/img/png/peruri.png","assets/img/png/sscorner.png","assets/img/png/sushiking.png","assets/img/png/tokio-marine.png","assets/img/png/unhcr.png","assets/img/png/wvi.png","assets/img/sscorner.webp","assets/img/sushiking.webp","assets/img/tokio-marine.webp","assets/img/unhcr.webp","assets/img/wvi.webp","assets/style.scss"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".txt":"text/plain",".js":"text/javascript",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".webp":"image/webp",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.k3GLhnba.js",app:"_app/immutable/entry/app.Bb2ZtlJA.js",imports:["_app/immutable/entry/start.k3GLhnba.js","_app/immutable/chunks/CMBEy7pq.js","_app/immutable/chunks/C_7qcSxh.js","_app/immutable/chunks/C0RGmebb.js","_app/immutable/entry/app.Bb2ZtlJA.js","_app/immutable/chunks/C_7qcSxh.js","_app/immutable/chunks/Dz4a8lTU.js","_app/immutable/chunks/BTDoQS94.js","_app/immutable/chunks/C0RGmebb.js","_app/immutable/chunks/CRTQk09p.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

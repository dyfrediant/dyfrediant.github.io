
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/assets/css/style.css" | "/assets/css/style.css.map" | "/assets/fontawesome/LICENSE.txt" | "/assets/fontawesome/attribution.js" | "/assets/fontawesome/css/all.css" | "/assets/fontawesome/css/all.min.css" | "/assets/fontawesome/css/brands.css" | "/assets/fontawesome/css/brands.min.css" | "/assets/fontawesome/css/duotone.css" | "/assets/fontawesome/css/duotone.min.css" | "/assets/fontawesome/css/fontawesome.css" | "/assets/fontawesome/css/fontawesome.min.css" | "/assets/fontawesome/css/light.css" | "/assets/fontawesome/css/light.min.css" | "/assets/fontawesome/css/regular.css" | "/assets/fontawesome/css/regular.min.css" | "/assets/fontawesome/css/solid.css" | "/assets/fontawesome/css/solid.min.css" | "/assets/fontawesome/css/svg-with-js.css" | "/assets/fontawesome/css/svg-with-js.min.css" | "/assets/fontawesome/css/thin.css" | "/assets/fontawesome/css/thin.min.css" | "/assets/fontawesome/css/v4-font-face.css" | "/assets/fontawesome/css/v4-font-face.min.css" | "/assets/fontawesome/css/v4-shims.css" | "/assets/fontawesome/css/v4-shims.min.css" | "/assets/fontawesome/css/v5-font-face.css" | "/assets/fontawesome/css/v5-font-face.min.css" | "/assets/fontawesome/webfonts/fa-brands-400.ttf" | "/assets/fontawesome/webfonts/fa-brands-400.woff" | "/assets/fontawesome/webfonts/fa-brands-400.woff2" | "/assets/fontawesome/webfonts/fa-duotone-900.ttf" | "/assets/fontawesome/webfonts/fa-duotone-900.woff" | "/assets/fontawesome/webfonts/fa-duotone-900.woff2" | "/assets/fontawesome/webfonts/fa-light-300.ttf" | "/assets/fontawesome/webfonts/fa-light-300.woff" | "/assets/fontawesome/webfonts/fa-light-300.woff2" | "/assets/fontawesome/webfonts/fa-regular-400.ttf" | "/assets/fontawesome/webfonts/fa-regular-400.woff" | "/assets/fontawesome/webfonts/fa-regular-400.woff2" | "/assets/fontawesome/webfonts/fa-solid-900.ttf" | "/assets/fontawesome/webfonts/fa-solid-900.woff" | "/assets/fontawesome/webfonts/fa-solid-900.woff2" | "/assets/fontawesome/webfonts/fa-thin-100.ttf" | "/assets/fontawesome/webfonts/fa-thin-100.woff" | "/assets/fontawesome/webfonts/fa-thin-100.woff2" | "/assets/fontawesome/webfonts/fa-v4compatibility.ttf" | "/assets/fontawesome/webfonts/fa-v4compatibility.woff2" | "/assets/img/ampg.webp" | "/assets/img/carikuliah.webp" | "/assets/img/enfa.webp" | "/assets/img/favicon.png" | "/assets/img/fpt-2.webp" | "/assets/img/fpt.webp" | "/assets/img/innisfree.webp" | "/assets/img/lofity.webp" | "/assets/img/logo.webp" | "/assets/img/love-bonito.webp" | "/assets/img/noel.webp" | "/assets/img/peruri.webp" | "/assets/img/png/aia.png" | "/assets/img/png/ampg.png" | "/assets/img/png/carikuliah.png" | "/assets/img/png/enfa.png" | "/assets/img/png/fpt-2.png" | "/assets/img/png/fpt.png" | "/assets/img/png/innisfree.png" | "/assets/img/png/lofity.png" | "/assets/img/png/logo.png" | "/assets/img/png/love-bonito.png" | "/assets/img/png/noel.png" | "/assets/img/png/peruri.png" | "/assets/img/png/sscorner.png" | "/assets/img/png/sushiking.png" | "/assets/img/png/tokio-marine.png" | "/assets/img/png/unhcr.png" | "/assets/img/png/wvi.png" | "/assets/img/sscorner.webp" | "/assets/img/sushiking.webp" | "/assets/img/tokio-marine.webp" | "/assets/img/unhcr.webp" | "/assets/img/wvi.webp" | "/assets/style.scss" | string & {};
	}
}
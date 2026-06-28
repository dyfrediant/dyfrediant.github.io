import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.tMW_A4ZS.js","_app/immutable/chunks/BTDoQS94.js","_app/immutable/chunks/C_7qcSxh.js","_app/immutable/chunks/C0RGmebb.js","_app/immutable/chunks/CRTQk09p.js","_app/immutable/chunks/Dz4a8lTU.js"];
export const stylesheets = [];
export const fonts = [];

import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_B-Gyf5KC.mjs';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ram/Dartmouth%20College%20Dropbox/Ram%20Gorthi/Projects/landing-page/landing/","adapterName":"","routes":[{"file":"file:///Users/ram/Dartmouth%20College%20Dropbox/Ram%20Gorthi/Projects/landing-page/landing/docs/blog/article/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/article","isIndex":true,"type":"page","pattern":"^\\/blog\\/article\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"article","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/article/index.astro","pathname":"/blog/article","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/ram/Dartmouth%20College%20Dropbox/Ram%20Gorthi/Projects/landing-page/landing/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/pages/blog/article/index.astro",{"propagation":"none","containsHead":true}],["/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/blog/article/index@_@astro":"pages/blog/article.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_iw5IIlaW.mjs","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Features2.jsx":"_astro/Features2.BO0HGZei.js","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/ScrollUpButton":"_astro/ScrollUpButton.BD0-oT8M.js","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Features1.jsx":"_astro/Features1.BJhf9ZnC.js","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Hero.jsx":"_astro/Hero.G-ucjSjk.js","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Navbar.jsx":"_astro/Navbar.CLiJRBaL.js","/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/FeaturesDiagonal.jsx":"_astro/FeaturesDiagonal.Dgwvus4N.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/ram/Dartmouth%20College%20Dropbox/Ram%20Gorthi/Projects/landing-page/landing/docs/blog/article/index.html","/file:///Users/ram/Dartmouth%20College%20Dropbox/Ram%20Gorthi/Projects/landing-page/landing/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };

const C="silly-draw-v3";
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(C).then(c=>c.addAll(["manifest.webmanifest","icon-192.png","icon-512.png"])).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
/* same-origin only: try the network (so updates arrive), fall back to the saved copy offline. Gemini calls are never touched. */
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r})
    .catch(()=>caches.match(e.request).then(m=>m||caches.match("./"))));
});

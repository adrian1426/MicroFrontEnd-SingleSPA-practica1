import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@adriandomain/mf-header",
  app: () => System.import<LifeCycles>("@adriandomain/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@adriandomain/mf-main",
  app: () => System.import<LifeCycles>("@adriandomain/mf-main"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

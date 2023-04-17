import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@adriandomain/mf-header",
  app: () => System.import<LifeCycles>("@adriandomain/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

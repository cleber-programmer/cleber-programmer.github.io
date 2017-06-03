(function (modules, proxy) {
    Object.assign(window, {
        $(nameOrModule, module) {
            module ? (proxy[nameOrModule] = module) : modules.push(nameOrModule);
        },
        onload() {
            modules.forEach(module => module(proxy, {}));
        }
    });
})([], new Proxy({ '@': {} }, {
    get(target, name, receiver) {
        return target['@'][name] || (target['@'][name] = target[name](receiver, {}));
    }
}));
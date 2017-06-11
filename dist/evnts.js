var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (modules, proxy) {
    Object.assign(window, {
        Rex(nameOrModule, module) {
            module ? (proxy[nameOrModule] = module) : modules.push(nameOrModule);
        },
        onload() {
            modules.forEach(module => module(proxy));
        }
    });
})([], new Proxy({ '@': {} }, {
    get(target, name, receiver) {
        return target['@'][name] || (target['@'][name] = target[name](receiver));
    }
}));
Rex('add', (R) => R.curry((a, b) => ~~a + ~~b));
Rex('always', () => (value) => () => value);
Rex('apply', () => (target, ...args) => target.apply(void 0, args));
Rex('clone', () => (target) => JSON.parse(JSON.stringify(target)));
Rex('concat', () => (...args) => [].concat(...args));
Rex('cond', function () {
    return function (...chain) {
        return function (...args) {
            for (let index in chain) {
                if (chain[index][0](...args))
                    return chain[index][1](...args);
            }
        };
    };
});
Rex('contains', (R) => R.curry((value, target = R._) => !/-1/.test(target.indexOf(value))));
Rex('dissoc', (R) => (prop, target) => ((cloned) => {
    delete cloned[prop];
    return cloned;
})(R.clone(target)));
Rex('equals', (R) => R.curry((a, b) => a === b));
Rex('f', () => () => !1);
Rex('guid', () => () => Math.round(Date.now() * Math.random()).toString(36));
Rex('t', () => () => !0);
Rex('crop', function () {
    return function (file) {
        return new Promise(function (resolver) {
            (function (reader) {
                reader.onload = resolver;
                reader.readAsDataURL(file);
            })(new FileReader);
        });
    };
});
Rex(function (R) {
    Object.assign(R.evnts, {
        eventPortifolio(event) {
            return R.io.search('portifolio', {
                query: {
                    bool: {
                        must: [
                            {
                                match: { event }
                            }
                        ]
                    }
                }
            });
        }
    });
});
Rex('evnts', () => ({}));
Rex(function (R) {
    Object.assign(R.evnts, {
        organizerEvents(organizer) {
            return R.io.search('events', {
                query: {
                    bool: {
                        must: [
                            {
                                match: { organizer }
                            }
                        ]
                    }
                }
            });
        }
    });
});
Rex(function (R) {
    Object.assign(R.evnts, {
        ownerHotels(owner) {
            return R.io.search('hotel', {
                query: {
                    bool: {
                        must: [
                            {
                                match: { owner }
                            }
                        ]
                    }
                }
            });
        }
    });
});
Rex(function (R) {
    Object.assign(R.io, {
        appbaseRef: new Appbase({
            'url': 'https://scalr.api.appbase.io',
            'app': 'evnts',
            'credentials': 'NSoBtHpI4:3bd8bf02-6ffe-4cc1-9960-938ffbde6520'
        })
    });
});
Rex(function (R) {
    Object.assign(R.io, {
        delete(type, { id }) {
            R.io.appbaseRef.delete({ type, id })
                .on('data', R.partial(R.radio.emit, `${type}.index:data`))
                .on('error', R.partial(R.radio.emit, `${type}.index:error`));
        }
    });
});
Rex(function (R) {
    Object.assign(R.io, {
        get(type, { id }) {
            return new Promise(function (resolve, reject) {
                R.io.appbaseRef.get({ type, id }).on('data', resolve).on('error', reject);
            });
        }
    });
});
Rex(function (R) {
    Object.assign(R.io, {
        index(type, body) {
            R.io.appbaseRef.index({ type, body: R.dissoc('id', body) })
                .on('data', R.partial(R.radio.emit, `${type}.index:data`))
                .on('error', R.partial(R.radio.emit, `${type}.index:error`));
        }
    });
});
Rex('io', () => ({}));
Rex(function (R) {
    Object.assign(R.io, {
        search(type, { query }) {
            return new Promise(function (resolve, reject) {
                R.io.appbaseRef.search({ type, body: { query } }).on('data', resolve).on('error', reject);
            });
        }
    });
});
Rex(function (R) {
    Object.assign(R.io, {
        update(type, body) {
            R.io.appbaseRef.update({ type, id: body.id, body: R.dissoc('id', body) })
                .on('data', R.partial(R.radio.emit, `${type}.index:data`))
                .on('error', R.partial(R.radio.emit, `${type}.index:error`));
        }
    });
});
Rex('radio.emit.decorator', function ({ hook, partial, 'radio.emit.service': emit }) {
    return function (channel) {
        return function (target, prop, descriptor) {
            hook.after('value', descriptor, partial(emit, channel));
            return descriptor;
        };
    };
});
Rex(function ({ cond, equals, radio, 'radio.emit.decorator': decorator, 'radio.emit.service': service, t }) {
    Object.assign(radio, {
        emit() {
            cond([(...args) => equals(args.length, 1), decorator], [t, service])(...arguments);
        }
    });
});
Rex('radio.emit.service', function ({ 'radio.handlers': handlers }) {
    return function (channel, ...args) {
        for (let [context, proxy] of handlers.entries()) {
            for (let target of proxy[channel]) {
                target.apply(context, JSON.parse(JSON.stringify(args)));
            }
        }
        return this;
    };
});
Rex('radio.handlers', () => new Map());
Rex(function (R) {
    Object.assign(R.radio, {
        on(chanell) {
            return function (target, prop, descriptor) {
                function hookCreatedCallback() {
                    (this.__radio__ || (this.__radio__ = R.radio(this))).on(chanell, this[prop]);
                }
                function hookDetachedCallback() {
                    this.__radio__.drop();
                }
                R.hook.after('createdCallback', target, hookCreatedCallback);
                R.hook.after('detachedCallback', target, hookDetachedCallback);
                return descriptor;
            };
        }
    });
});
Rex('radio.proxy', function ({ 'radio.handlers': handlers }) {
    return function (context) {
        handlers.set(context, new Proxy({}, {
            get(target, name) {
                return target[name] || (target[name] = new Set());
            }
        }));
    };
});
Rex('radio', function ({ 'radio.handlers': handlers, 'radio.proxy': proxy }) {
    return function Radio(context) {
        if (!(this instanceof Radio)) {
            return new Radio(context);
        }
        proxy(context);
        function drop() {
            handlers.delete(context);
            return this;
        }
        function get(channel) {
            return handlers.get(context)[channel];
        }
        function off(channel, target) {
            get(channel).delete(target);
            return this;
        }
        function on(channel, target) {
            get(channel).add(target);
            return this;
        }
        return { drop, off, on };
    };
});
Rex('sheet', function ({ 'sheet.style': style }) {
    return function (query, ...rules) {
        style.insertRule(`${query} { ${rules.map(([key, value]) => `${key}:${value};`)} }`, style.cssRules.length);
    };
});
Rex('sheet.style', function () {
    return document.head.appendChild(document.createElement('style'))['sheet'];
});
Rex(function (R) {
    Object.assign(R.storage, {
        drop() {
            window.localStorage.clear();
            return R.storage;
        }
    });
});
Rex(function (R) {
    Object.assign(R.storage, {
        get(key, defaultValue = null) {
            function parse(value) {
                return /^(\{|\[).+(\]|\})$/.test(value) ? JSON.parse(value) : value;
            }
            return parse(window.localStorage.getItem(key)) || defaultValue;
        }
    });
});
Rex(function (R) {
    Object.assign(R.storage, {
        remove(key) {
            window.localStorage.removeItem(key);
            return R.storage;
        }
    });
});
Rex(function (R) {
    Object.assign(R.storage, {
        set(key, value = null) {
            function is(value) {
                return /(object|array)\]$/i.test(Object.prototype.toString.call(value));
            }
            window.localStorage.setItem(key, is(value) ? JSON.stringify(value) : value);
            return R.storage;
        }
    });
});
Rex('storage', () => ({}));
Rex('arity', (R) => R.curry((length, target) => (...args) => ({
    '0': function () { return R.apply(target, ...args); },
    '1': function (a) { return R.apply(target, ...args); },
    '2': function (a, b) { return R.apply(target, ...args); },
    '3': function (a, b, c) { return R.apply(target, ...args); },
    '4': function (a, b, c, d) { return R.apply(target, ...args); }
})[length]));
Rex('atom', () => ({}));
Rex(function (R) {
    Object.assign(R.atom, {
        attached(target, prop, descriptor) {
            function hookCallback() {
                setTimeout(this[prop].bind(this));
            }
            R.hook.after('attachedCallback', target, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.atom, {
        change(...properties) {
            return function (target, prop, descriptor) {
                function hookCallback(name, oldValue, newValue) {
                    R.contains(name, properties) && (this[prop](newValue, oldValue, name));
                }
                R.hook.before('attributeChangedCallback', target, hookCallback);
                return descriptor;
            };
        }
    });
});
Rex(function ({ atom, 'atom.hack': hack }) {
    Object.assign(atom, {
        component(tagName, extending) {
            return function (target) {
                document.registerElement(tagName, {
                    prototype: Object.assign(Object.create(window.HTMLElement.prototype), hack(target)),
                    [extending ? 'extends' : '']: extending
                });
            };
        }
    });
});
Rex(function (R) {
    Object.assign(R.atom, {
        created(target, prop, descriptor) {
            function hookCallback() {
                setTimeout(this[prop].bind(this));
            }
            R.hook.after('createdCallback', target, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.atom, {
        detached(target, prop, descriptor) {
            function hookCallback() {
                this[prop]();
            }
            R.hook.after('detachedCallback', target, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.atom, {
        event(event, query = '*', bubbling) {
            return function (target, prop, descriptor) {
                function action(e) {
                    e.target.matches(query) && this[prop](e);
                }
                function hookCreatedCallback() {
                    this.addEventListener(event, action.bind(this), bubbling);
                }
                function hookDetachedCallback() {
                    this.removeEventListener(event, action.bind(this), bubbling);
                }
                R.hook.after('createdCallback', target, hookCreatedCallback);
                R.hook.after('detachedCallback', target, hookDetachedCallback);
                return descriptor;
            };
        }
    });
});
Rex('atom.hack', function (R) {
    return function ({ prototype }) {
        return Object.getOwnPropertyNames(prototype)
            .reduce((target, key) => Object.defineProperty(target, key, Object.assign(Object.getOwnPropertyDescriptor(prototype, key), { enumerable: true })), {});
    };
});
Rex(function (R) {
    Object.assign(R.atom, {
        innerHTML(target, prop, descriptor) {
            function hookCallback(template) {
                this.innerHTML = template;
                return template;
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex('_', (R) => R.guid());
Rex('curry.completed', (R) => (feed) => /-1/.test(feed.indexOf(R._)));
Rex('curry', ({ 'curry.completed': completed, 'curry.mapper': mapper, 'curry.template': template, partial }) => (target) => partial(function curry(feed, ...args) {
    return completed(mapper(feed, args)) ? target(...mapper(feed, args)) : partial(curry, mapper(feed, args));
}, template(target)));
Rex('curry.mapper', (R) => (feed, args, index = 0) => feed.map(item => (index < args.length && item === R._) ? args[index++] : item));
Rex('curry.template', (R) => (target) => Array(target.length).toString().split(',').map(() => R._));
Rex('flip', (R) => (predicate) => (...args) => R.apply(predicate, ...args.reverse()));
Rex(function (R) {
    Object.assign(R.hook, {
        after: function (prop, target, predicate) {
            (function (method) {
                Object.assign(target, {
                    [prop]() {
                        return predicate.call(this, method.apply(this, arguments));
                    }
                });
            })(target[prop] || R.always());
        }
    });
});
Rex(function (R) {
    Object.assign(R.hook, {
        before: function (prop, target, predicate) {
            (function (method) {
                Object.assign(target, {
                    [prop]() {
                        predicate.apply(this, arguments);
                        return method.apply(this, arguments);
                    }
                });
            })(target[prop] || R.always());
        }
    });
});
Rex('hook', () => ({}));
Rex('memoize.decorate', function (R) {
    return function (target, key, descriptor) {
        function hookCallback(method, ...args) {
            return this[`@${args}`] || (this[`@${args}`] = R.apply(method, ...args));
        }
        R.hook.before('value', descriptor, R.flip(hookCallback));
        return descriptor;
    };
});
Rex('memoize', function ({ 'memoize.decorate': decorate, 'memoize.wrapper': wrapper }) {
    return function () {
        return {
            '1': wrapper,
            '3': decorate
        }[arguments.length].apply(this, arguments);
    };
});
Rex('memoize.wrapper', function () {
    return function (target) {
        return function () {
            return target[`@${arguments}`] || (target[`@${arguments}`] = target.apply(this, arguments));
        };
    };
});
Rex(function (R) {
    Object.assign(R.organizer, {
        changeEventDetails(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.update('event', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.organizer, {
        deselectAHotel(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.delete('portfolio', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.organizer, {
        inactiveAEvent(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.delete('event', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex('organizer', () => ({}));
Rex(function (R) {
    Object.assign(R.organizer, {
        registerAEvent(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.index('event', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.organizer, {
        selectAHotel(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.index('portfolio', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex('overload', function (R) {
    return function (taraget, key, overrid) {
        (function (method) {
            Object.assign(taraget, {
                [key]() {
                    return R.apply((overrid.length === arguments.length ? overrid : method), arguments);
                }
            });
        })(taraget[key]);
    };
});
Rex(function (R) {
    Object.assign(R.owner, {
        changeBedroomDetails(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.update('bedroom', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        changeHotelDetails(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.update('hotel', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        changeRateDetails(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.update('rate', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        inactiveAHotel(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.delete('hotel', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        inactiveABedroom(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.delete('bedroom', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex('owner', () => ({}));
Rex(function (R) {
    Object.assign(R.owner, {
        rateABedroom(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.index('rate', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        registerABedroom(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.index('bedroom', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        registerAHotel(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.index('hotel', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex(function (R) {
    Object.assign(R.owner, {
        unavaliableRate(target, prop, descriptor) {
            function hookCallback(body) {
                R.io.delete('rate', body);
            }
            R.hook.after('value', descriptor, hookCallback);
            return descriptor;
        }
    });
});
Rex('partial', (R) => (target, ...a) => (...b) => target(...R.concat(a, b)));
Rex(function (R) {
    let Perfil = class Perfil {
        selectThumbnail({ target: { files: [thumbnail] } }) {
            return __awaiter(this, void 0, void 0, function* () {
                R.sheet('.form_thumbnail:after', ['background-image', `url(${(yield R.crop(thumbnail)).target.result})`]);
            });
        }
    };
    __decorate([
        R.atom.event('change', '.form_thumbnail'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Perfil.prototype, "selectThumbnail", null);
    Perfil = __decorate([
        R.atom.component('form-perfil', 'form')
    ], Perfil);
});

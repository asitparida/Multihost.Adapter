if (typeof (String.prototype.replaceAll) === 'undefined') {
    String.prototype.replaceAll = function (find, replaceWith) {
        var regex = new RegExp(find, 'g');
        return this.replace(regex, replaceWith);
    }
}

/*
 * GETTING TOKENS FOR NG2 BOOTSTRAP
 * 
 */

function TemplateCache() {
    this.cache = {};
}
TemplateCache.prototype.get = function (_key) {
    var self = this;
    return self.cache[_key] || '';
}

TemplateCache.prototype.put = function (_key, _value) {
    var self = this;
    self.cache[_key] = _value;
}

var _NG2_BOOTSTRAP_TOKEN = null;
if (ng && ng.core && ng.core.OpaqueToken)
    _NG2_BOOTSTRAP_TOKEN = new ng.core.OpaqueToken('bootstrap_components');

document.addEventListener('DOMContentLoaded', function (e) {
    if (typeof window['APP_PLATFORM_CORDOVA'] !== 'undefined' && window['APP_PLATFORM_CORDOVA']) {
        document.addEventListener('deviceready', function () {
            window['_clientConfigs'] = _clientConfigData;
            addWidgets(window['_clientConfigs']);
        }, false);
    }
    else {
        if (require) {
            var _electron = require('electron');
            if (_electron) {
                _electron.ipcRenderer.removeAllListeners(['app-get-host-config-reply']);
                _electron.ipcRenderer.send('app-get-host-config');
                _electron.ipcRenderer.on('app-get-host-config-reply', function (event, args) {
                    window['_clientConfigs'] = args;
                    addWidgets(window['_clientConfigs']);
                });
            }
        }
    }

    //TODO : REMOVE TEST ONLY OR CONFIGURE IT FOR TEST ONLY INSTEAD OF COMMENTING/UNCOMMENTING
    //document.querySelector('html').classList.add('_CORDOVA');
    //document.querySelector('html').classList.add('_IOS');
});

function addWidgets(args) {
    if (args && args.length > 0) {
        var _hostContainer = angular.element(document.getElementById('hostViewContent'));
        for (var i = 0; i < args.length; i++) {
            var _tmpl = ''
            if (args[i]['boot'] === 'ng1') {
                _tmpl = '<div><md-content class="md-padding" layout="column" app-id="APP_ID"></md-content></div>';
                _tmpl = _tmpl.replaceAll('APP_ID', args[i]['client-id']);
                _hostContainer.append(_tmpl);
            }
            else if (args[i]['boot'] === 'ng2') {
                _tmpl = '<div><md-content class="md-padding" layout="column"><APP_ID id="NG_APP_ID"></APP_ID></md-content></div>';
                _tmpl = _tmpl.replaceAll('NG_APP_ID', _.uniqueId('_ng_app_'));
                _tmpl = _tmpl.replaceAll('APP_ID', args[i]['client-id']);
                _hostContainer.append(_tmpl);
            }
            else if (args[i]['boot'] === 'react') {
                _tmpl = '<div><md-content class="md-padding" layout="column"><APP_ID id="REACT_APP_ID"></APP_ID></md-content></div>';
                _tmpl = _tmpl.replaceAll('REACT_APP_ID', _.uniqueId('_react_app_'));
                _tmpl = _tmpl.replaceAll('APP_ID', args[i]['client-id']);
                _hostContainer.append(_tmpl);
            }
            else if (args[i]['boot'] === 'mithril') {
                _tmpl = '<div><md-content class="md-padding" layout="column"><APP_ID id="MITHRIL_APP_ID"></APP_ID></md-content></div>';
                _tmpl = _tmpl.replaceAll('MITHRIL_APP_ID', _.uniqueId('_mithril_app_'));
                _tmpl = _tmpl.replaceAll('APP_ID', args[i]['client-id']);
                _hostContainer.append(_tmpl);
            }
            var _fileUrl = 'dist/min/' + args[i]['js'];
            var _fileExists = false;
            var _fileExistsSelector = 'script[src="' + _fileUrl + '"]';
            _fileExists = document.querySelectorAll(_fileExistsSelector).length > 0 ? true : false;
            if (!_fileExists) {
                var _script = document.createElement("script");
                _script.src = _fileUrl;
                document.body.appendChild(_script);
                _script.configData = args[i];
                _script.onload = function (data) {
                    addWindowBootstrapForClient(this.configData);
                };
            }
        }
    }
}

function removeDOMElement(_elem) {
    /* TO BE IMPLEMENTED
     * FOR RECACT - ReactDOM.unmountComponentAtNode(domContainerNode) 
     * FOR NG2 - TO BE FIGURED OUT
     * FOR NG1 - NOTHING MORE NEEDED
     */
    _elem.remove();
}

function removeWindowBootstrapForClient(id) {
    var _elem = document.getElementById(id);
    var _mdContentElement = _elem.parentElement;
    if (TweenMax) {
        TweenMax.to(_mdContentElement, 0.33, {
            scaleX: 0, scaleY: 0, height: 0, opacity: 0, transformOrigin: "center", onComplete: function () {
                removeDOMElement(_mdContentElement);
            }
        });
    }
    else
        removeDOMElement(_mdContentElement);
}

function addWindowBootstrapForClient(_clientConfig) {
    if (typeof window.bootStrapClient === 'undefined') {
        window.bootStrapClient = {};
    }
    if (typeof window.bootStrapClient[_clientConfig['client-id']] !== 'function') {
        function bootStrapClientNg1() {
            var _selector = '[app-id="' + _clientConfig['client-id'] + '"]';
            var _elements = document.querySelectorAll(_selector);
            for (var i = 0; i < _elements.length; i++) {
                if (angular) {
                    var _ngLoaded = _elements[i]['_ngLoaded'] || false;
                    if (!_ngLoaded) {
                        var _uid = _.uniqueId(_clientConfig['client-id']);
                        _elements[i].setAttribute('id', _uid);
                        angular.module('appConfig', []).value('appView', _uid);
                        var _ele = angular.element(_elements[i]);
                        var _tmpl = '<ng-include src="' + _clientConfig['view'] + '"></ng-include>'
                        _ele.append(_tmpl);
                        angular.bootstrap(_elements[i], [_clientConfig['ng-module'], 'appConfig']);
                        _elements[i]['_ngLoaded'] = true;
                    }
                }
            }
        }
        function bootStrapClientNg2() {
            var _componentSelectors = [];

            var _selector = _clientConfig['client-id'];
            var _elements = document.querySelectorAll(_selector);
            for (var i = 0; i < _elements.length; i++) {
                var _id = _elements[i].getAttribute('id')
                _componentSelectors.push({ 'selector': '#' + _id });
            }

            ng.platformBrowserDynamic
              .platformBrowserDynamic([
                { provide: _NG2_BOOTSTRAP_TOKEN, useValue: _componentSelectors }
              ])
              .bootstrapModule(window[_clientConfig['ng-module']].AppModule);
        }
        function bootStrapClientReact() {
            var _componentSelectors = [];
            var _selector = _clientConfig['client-id'];
            var _elements = document.querySelectorAll(_selector);
            console.log(_elements);
            for (var i = 0; i < _elements.length; i++) {
                var _id = _elements[i].getAttribute('id')
                _componentSelectors.push({ 'selector': _id });
            }
            if (ReactDOM) {
                _componentSelectors.forEach(function (_component) {
                    ReactDOM.render(React.createElement(window[_clientConfig['ng-module']], { appView: _component.selector }), document.getElementById(_component.selector));
                })
            }
        }

        function bootStrapClientMithril() {
            var _componentSelectors = [];
            var _selector = _clientConfig['client-id'];
            var _elements = document.querySelectorAll(_selector);
            console.log(_elements);
            for (var i = 0; i < _elements.length; i++) {
                var _id = _elements[i].getAttribute('id')
                _componentSelectors.push({ 'selector': _id });
            }
            if (typeof window.m !== 'undefined' && window.m) {
                _componentSelectors.forEach(function (_component) {                    
                    var _mounted = window.m.mount(document.getElementById(_component.selector), window[_clientConfig['ng-module']]);
                    _mounted.appViewId = _component.selector;
                })
            }
        }
        if (_clientConfig['boot'] === 'ng1')
            window.bootStrapClient[_clientConfig['client-id']] = bootStrapClientNg1;
        else if (_clientConfig['boot'] === 'ng2')
            window.bootStrapClient[_clientConfig['client-id']] = bootStrapClientNg2;
        else if (_clientConfig['boot'] === 'react')
            window.bootStrapClient[_clientConfig['client-id']] = bootStrapClientReact;
        else if (_clientConfig['boot'] === 'mithril')
            window.bootStrapClient[_clientConfig['client-id']] = bootStrapClientMithril;
    }
}
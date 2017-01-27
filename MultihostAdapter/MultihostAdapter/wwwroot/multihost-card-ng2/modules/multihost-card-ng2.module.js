var MultiHostCardNg2;

(function (App) {

    function AppComponent() {
        var self = this;
        self.title = "Hero Detail";
        self.hideProgress = false;
        self.showPanel = false;
        self.timeout = setTimeout;
        self.card = {
            id: 1,
            title: 'New Card #NG2',
            hostApp: 'Angular 2'
        };
        self.timeout(function () {
            self.hideProgress = true;
            self.showPanel = true;
        }, 2500)
    }
    App.AppComponent = AppComponent;
    AppComponent.prototype.getName = function () { return 'Windstorm'; };
    AppComponent.annotations = [
        new ng.core.Component({
            selector: 'my-app',
            template: window.TemplatesMultihostCardNg2["templates/multihost-card-ng2/multihost-card-ng2.view.html"]
        })
    ];

    function AppModule(_resolver, _token) {
        this.resolver = _resolver;
        this.components = _token;
    }

    AppModule.parameters = [ng.core.ComponentFactoryResolver, _NG2_BOOTSTRAP_TOKEN];

    AppModule.prototype.ngDoBootstrap = function (_appref) {
        var self = this;
        self.components.forEach(function (_component) {
            var factory = self.resolver.resolveComponentFactory(App.AppComponent);
            factory.selector = _component.selector;
            _appref.bootstrap(factory);
        });
    }

    AppModule.annotations = [
        new ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule
            ],
            declarations: [App.AppComponent],
            entryComponents: [App.AppComponent]
        })
    ];

    App.AppModule = AppModule;
})(MultiHostCardNg2 || (MultiHostCardNg2 = {}));

window['Multihost.Card.Ng2'] = MultiHostCardNg2;
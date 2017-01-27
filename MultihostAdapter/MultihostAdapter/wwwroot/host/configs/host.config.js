"use strict";

angular.module('Multihost.Host.Templates', [])
 .run(["$templateCache", function ($templateCache) {
     for (var tmpl in window.TemplatesHost) {
         $templateCache.put(tmpl, window.TemplatesHost[tmpl]);
     }
     window.TemplatesHost = null;
 }])

angular.module('Multihost.Host', ['Multihost.Host.Templates', 'Multihost.Host.Controllers', 'Multihost.Host.Services', 'ngMaterial']);

function bootstrapHostAdapter() {
    var _hostContext = document.getElementById('hostContextAdapter');
    if (angular && _hostContext) {
        var _ele = angular.element(_hostContext);
        var _tmpl = '<ng-include src="\'templates/host/host.context.tmpl.html\'"></ng-include>'
        _ele.append(_tmpl);
        angular.bootstrap(_ele, ['Multihost.Host']);
        setTimeout(function () {
            if (typeof window.bootStrapClient !== 'undefined') {
                for (var clientId in window.bootStrapClient) {
                    if (typeof window.bootStrapClient[clientId] === 'function')
                        window.bootStrapClient[clientId]();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    if (typeof window.bootstrapHostAdapter !== 'undefined') {
        window.bootstrapHostAdapter = bootstrapHostAdapter;
    }
});  
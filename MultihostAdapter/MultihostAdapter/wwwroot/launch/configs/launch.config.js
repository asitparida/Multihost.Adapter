"use strict";

angular.module('Multihost.Launch.Templates', [])
 .run(["$templateCache", function ($templateCache) {
     for (var tmpl in window.TemplatesLaunch) {
         $templateCache.put(tmpl, window.TemplatesLaunch[tmpl]);
     }
     //window.TemplatesLaunch = null;
 }])

angular.module('Multihost.Launch', ['Multihost.Launch.Templates', 'Multihost.Launch.Controllers', 'Multihost.Launch.Services']);

function bootstrapLaunchAdapter() {
    var _launchContext = document.getElementById('launchContextAdapter');    
    if (angular && _launchContext) {
        var _ele = angular.element(_launchContext);
        var _tmpl = '<ng-include src="\'templates/launch/launch.view.html\'"></ng-include>'
        _ele.append(_tmpl);        
        angular.bootstrap(_ele, ['Multihost.Launch']);
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    bootstrapLaunchAdapter();
});
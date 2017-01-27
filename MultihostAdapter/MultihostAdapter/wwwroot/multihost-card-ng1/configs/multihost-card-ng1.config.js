"use strict";

angular.module('Multihost.Card.Templates', [])
.run(["$templateCache", function ($templateCache) {
    for (var tmpl in window.TemplatesMultiHostNg1) {
        $templateCache.put(tmpl, window.TemplatesMultiHostNg1[tmpl]);
    }
}])

angular.module('Multihost.Card', [
    'Multihost.Card.Templates',
    'Multihost.Card.Controllers',
    'Multihost.Card.Services',
    'ngMaterial']);
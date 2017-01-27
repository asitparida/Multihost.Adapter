angular.module('MusicUI')
.directive('appAction', ['$parse', '$compile', function ($parse, $compile) {
    return {
        replace:true,
        link: function (scope, element, attr) {
            var _tmpl = '<div class="icon-container w100 CLASS_ACTIVE " ng-click="ACTION_FN"><i class="icon ACTION_ICON" title="ACTION_TITLE" ></i></div>';
            _tmpl = _tmpl.replace('ACTION_TITLE', attr.actitle || '');
            _tmpl = _tmpl.replace('ACTION_FN', attr.fn);
            _tmpl = _tmpl.replace('ACTION_ICON', attr.icon);
            _tmpl = _tmpl.replace('CLASS_ACTIVE', attr.active == "true" ? 'active' : '');
            element.html(_tmpl);
            $compile(element.contents())(scope);
        }
    };
}]);


"use strict";

angular.module('Multihost.Card.Controllers', [])
.controller('Multihost.Card.Controllers.MainController', [
    '$http', 'Multihost.Card.Services.RequestService', '$timeout', 'appView',
    function ($http, RequestService, $timeout, appView) {
    var self = this;
    self.requestService = RequestService;
    self.timeout = $timeout;
    self.eventTypes = '';    
    self.hideProgress = false;
    self.showPanel = false;
    self.cardId = _.uniqueId('card');
    self.card = {};
    self.decline = function () {
        if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function')
            removeWindowBootstrapForClient(appView);
    }
    self.timeout(function () {        
        self.card = {
            id: 1,
            title: 'New Card #NG1',
            hostApp: 'Angular 1.x'            
        };
        self.showPanel = true;
        self.hideProgress = true;
    }, 2500);
}]);
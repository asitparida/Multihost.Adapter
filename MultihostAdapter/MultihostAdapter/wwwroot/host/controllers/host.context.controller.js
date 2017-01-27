"use strict";

angular.module('Multihost.Host.Controllers')
.controller('Multihost.Host.Controllers.ContextContoller', ['$http', 'Multihost.Host.Services.HostService', '$mdBottomSheet', '$timeout', function ($http, HostService, $mdBottomSheet, $timeout) {
    var self = this;
    self.requestItems = [
        {
            id: 1,
            title: 'New Request Assignment 1',
            hostApp: 'GCM',
            projectName: 'MS State Auditors - 999630',
            customerName: 'MS State Auditors',
            demandSourceId: 'ROSSXXXX0000SSS',
            productOffering: '[LocASIA][LanEN] - Rights Management Service Workshop',
            startDate: '06/06/2016',
            endDate: '06/06/2016',
            type: 'MIP',
            timeRemaning: '30:29'
        },
        {
            id: 2,
            title: 'New Request Assignment 2',
            hostApp: 'GCM',
            projectName: 'MS State Auditors - 999630',
            customerName: 'MS State Auditors',
            demandSourceId: 'ROSSXXXX0000SSS',
            productOffering: '[LocASIA][LanEN] - Rights Management Service Workshop',
            startDate: '06/06/2016',
            endDate: '06/06/2016',
            type: 'MIP',
            timeRemaning: '30:29'
        },
        {
            id: 3,
            title: 'New Request Assignment 3',
            hostApp: 'GCM',
            projectName: 'MS State Auditors - 999630',
            customerName: 'MS State Auditors',
            demandSourceId: 'ROSSXXXX0000SSS',
            productOffering: '[LocASIA][LanEN] - Rights Management Service Workshop',
            startDate: '06/06/2016',
            endDate: '06/06/2016',
            type: 'MIP',
            timeRemaning: '30:29'
        }
    ];
    self.changeCardSubscriptions = function () {
    }
    self.changeAppSettings = function () {
    }
    self.logOut = function () {
    }
}]);
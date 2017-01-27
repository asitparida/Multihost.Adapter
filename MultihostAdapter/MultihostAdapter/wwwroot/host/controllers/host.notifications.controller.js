"use strict";

angular.module('Multihost.Host.Controllers')
.controller('Multihost.Host.Controllers.NotificationsController', ['$http', 'Multihost.Host.Services.HostService', '$mdBottomSheet', '$timeout', '$mdSidenav', function ($http, HostService, $mdBottomSheet, $timeout, $mdSidenav) {
    var self = this;
    var _notificationsPane = 'host_notifications_pane';
    self.mdSidenav = $mdSidenav;
    self.notifications = [
        {
            id: _.uniqueId('_note_'),
            text: "We would be adding new fetaures to maximize your productivity. Sync operations would be down from Jan 04, 2017 16:00 to Jan 04, 2017 21:00.",
            host: 'AdminNow'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        },
        {
            id: _.uniqueId('_note_'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            host: 'MI6'
        }
    ];
    _.each(self.notifications, function (_note, _iter) {
        _note.status = _.sample(['unread', 'marked', 'read', 'read']);
        _note.timeElapsed = _.sample(['a minute ago']);
        _note.highlighted = _iter == 0 ? true : false;
        _note.system = _iter == 0 ? true : false;
    });
    self.closeNotifications = function () {
        self.mdSidenav(_notificationsPane).close();
    }
}]);
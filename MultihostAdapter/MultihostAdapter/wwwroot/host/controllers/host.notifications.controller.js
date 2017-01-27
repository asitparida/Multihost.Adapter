"use strict";

angular.module('Multihost.Host.Controllers')
.controller('Multihost.Host.Controllers.NotificationsController', ['$http', 'Multihost.Host.Services.HostService', '$mdBottomSheet', '$timeout', '$mdSidenav', function ($http, HostService, $mdBottomSheet, $timeout, $mdSidenav) {
    var self = this;
    var _notificationsPane = 'host_notifications_pane';
    self.mdSidenav = $mdSidenav;
    self.notifications = [
        {
            id: _.uniqueId('_note_'),
            text: "Release team would be performing deployment on Field Experience Portal. RM operations would be down from Jan 04, 2017 16:00 to Jan 04, 2017 21:00.",
            host: 'EscalateNow'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM',
            action: 'submit'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
        },
        {
            id: _.uniqueId('_note_'),
            text: "You have a new resource request assignment for the project AXXS79-576-FFTTY. You have an option to decline.",
            host: 'GCM'
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
'use strict';

(function () {
    window['Multihost.Card.Mithril'] = {
        controller: function controller() {
            var self = this;
            window.m = m;
            self.hideProgress = m.prop(false);
            self.showPanel = m.prop(false);
            self.who = m.prop('World');
            self.card = {
                id: m.prop(1),
                title: m.prop('New Card #Mithril'),
                hostApp: m.prop('Mithril'),
                $show: m.prop(false)
            };

            self.onToggleDetails = function () {
                self.card.$show(!self.card.$show());
                m.redraw();
            };

            self.onDecline = function () {
                if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function') removeWindowBootstrapForClient(self.appViewId);
            };

            var timeoutAsync = function timeoutAsync() {
                var deferred = m.deferred();
                setTimeout(function () {
                    deferred.resolve();
                }, 2000);
                return deferred.promise;
            };

            timeoutAsync().then(function () {
                self.hideProgress(true);
                self.showPanel(true);
            }).then(function () {
                m.redraw();
            });
        },
        view: function view(ctrl) {
            return {
                tag: 'div',
                children: [{
                    tag: 'div',
                    children: [ctrl.hideProgress() == false ? {
                        tag: 'div',
                        children: [{
                            tag: 'div',
                            attrs: { className: 'overlay' }
                        }, {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                attrs: { className: 'dot1' }
                            }, {
                                tag: 'div',
                                attrs: { className: 'dot2' }
                            }],
                            attrs: { className: 'spinner' }
                        }],
                        attrs: { className: 'quick-access-cards-card-custom-progress' }
                    } : null, ctrl.showPanel() == true ? {
                        tag: 'div',
                        children: [{
                            tag: 'div',
                            children: [{
                                tag: 'span',
                                children: [ctrl.card.title()],
                                attrs: { className: 'md-headline' }
                            }, {
                                tag: 'span',
                                children: [ctrl.card.hostApp()],
                                attrs: { className: 'quick-access-cards-card-hostapp' }
                            }],
                            attrs: { className: 'quick-access-cards-card-title-text' }
                        }],
                        attrs: { className: 'quick-access-cards-card-title' }
                    } : null, ctrl.showPanel() == true ? {
                        tag: 'div',
                        children: [{
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: ['Name'],
                                attrs: { className: 'assignment-card-content-item-header' }
                            }, {
                                tag: 'div',
                                children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
                                attrs: { className: 'assignment-card-content-item-value' }
                            }],
                            attrs: { className: 'assignment-card-content-item' }
                        }, {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: ['Start Date'],
                                attrs: { className: 'assignment-card-content-item-header' }
                            }, {
                                tag: 'div',
                                children: ['XX/XX/XXXX'],
                                attrs: { className: 'assignment-card-content-item-value' }
                            }],
                            attrs: { className: 'assignment-card-content-item w50' }
                        }, {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: ['End Date'],
                                attrs: { className: 'assignment-card-content-item-header' }
                            }, {
                                tag: 'div',
                                children: ['XX/XX/XXXX'],
                                attrs: { className: 'assignment-card-content-item-value' }
                            }],
                            attrs: { className: 'assignment-card-content-item w50' }
                        }, {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: ['Type'],
                                attrs: { className: 'assignment-card-content-item-header' }
                            }, {
                                tag: 'div',
                                children: ['XXX-XX'],
                                attrs: { className: 'assignment-card-content-item-value' }
                            }],
                            attrs: { className: 'assignment-card-content-item w50' }
                        }, {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: ['Time Rem.'],
                                attrs: { className: 'assignment-card-content-item-header' }
                            }, {
                                tag: 'div',
                                children: ['XX:XX'],
                                attrs: { className: 'assignment-card-content-item-value' }
                            }],
                            attrs: { className: 'assignment-card-content-item w50' }
                        }, ctrl.card.$show() == true ? {
                            tag: 'div',
                            children: [{
                                tag: 'div',
                                children: [{
                                    tag: 'div',
                                    children: ['Customer'],
                                    attrs: { className: 'assignment-card-content-item-header' }
                                }, {
                                    tag: 'div',
                                    children: ['XXXXXX XXX XXXXXXXX'],
                                    attrs: { className: 'assignment-card-content-item-value' }
                                }],
                                attrs: { className: 'assignment-card-content-item' }
                            }, {
                                tag: 'div',
                                children: [{
                                    tag: 'div',
                                    children: ['Company'],
                                    attrs: { className: 'assignment-card-content-item-header' }
                                }, {
                                    tag: 'div',
                                    children: ['XXXX XXX XXXXXXXXXX'],
                                    attrs: { className: 'assignment-card-content-item-value' }
                                }],
                                attrs: { className: 'assignment-card-content-item' }
                            }, {
                                tag: 'div',
                                children: [{
                                    tag: 'div',
                                    children: ['Product'],
                                    attrs: { className: 'assignment-card-content-item-header' }
                                }, {
                                    tag: 'div',
                                    children: ['XXXX XXXX XXXX XXXX'],
                                    attrs: { className: 'assignment-card-content-item-value' }
                                }],
                                attrs: { className: 'assignment-card-content-item' }
                            }]
                        } : null, {
                            tag: 'div',
                            children: [{
                                tag: 'button',
                                children: ['Remove Card'],
                                attrs: { className: 'quick-access-cards-card-action pull-left', onclick: ctrl.onDecline.bind(ctrl) }
                            }, {
                                tag: 'div',
                                children: [ctrl.card.$show() != true ? {
                                    tag: 'i',
                                    attrs: { className: 'icon icon-scrollChevronDownLegacy' }
                                } : {
                                    tag: 'i',
                                    attrs: { className: 'icon icon-scrollChevronUpLegacy' }
                                }],
                                attrs: { className: 'icon-container quick-access-cards-card-showmore pull-right', onclick: ctrl.onToggleDetails.bind(ctrl) }
                            }],
                            attrs: { className: 'quick-access-cards-card-content-action-container' }
                        }],
                        attrs: { className: 'quick-access-cards-card-content' }
                    } : null],
                    attrs: { className: 'quick-access-cards-card' }
                }],
                attrs: { className: 'quick-access-cards' }
            };
        }
    };
})();
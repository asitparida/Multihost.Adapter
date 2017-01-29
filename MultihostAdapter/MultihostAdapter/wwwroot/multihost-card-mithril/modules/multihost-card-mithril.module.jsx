(function () {
    window['Multihost.Card.Mithril'] = {
        controller() {
            var self = this;
            window.m = m;
            self.hideProgress = m.prop(false)
            self.showPanel = m.prop(false)
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
            }

            self.onDecline = function () {
                if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function')
                    removeWindowBootstrapForClient(self.appViewId);
            }
            
            var timeoutAsync = function () {
                var deferred = m.deferred();
                setTimeout(function () {
                    deferred.resolve();
                }, 2000);
                return deferred.promise;
            };

            timeoutAsync()
            .then(function () {
                self.hideProgress(true);
                self.showPanel(true);
            }).then(function () {
                m.redraw()
            })
        },
        view(ctrl) {
            return <div className="quick-access-cards">
                    <div className="quick-access-cards-card">
                        { ctrl.hideProgress() == false ?
                            <div className="quick-access-cards-card-custom-progress">
                                <div className="overlay"></div>
                                <div className="spinner">
                                    <div className="dot1"></div>
                                    <div className="dot2"></div>
                                </div>
                            </div>
                        : null }
                        { ctrl.showPanel() == true ?
                            <div className="quick-access-cards-card-title">
                                <div className="quick-access-cards-card-title-text">
                                    <span className="md-headline">{ctrl.card.title()}</span>
                                    <span className="quick-access-cards-card-hostapp">{ctrl.card.hostApp()}</span>
                                </div>
                            </div>
                        : null }
                        { ctrl.showPanel() == true ?
                            <div className="quick-access-cards-card-content">
                                <div className="assignment-card-content-item">
                                    <div className="assignment-card-content-item-header">Name</div>
                                    <div className="assignment-card-content-item-value">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                </div>
                                <div className="assignment-card-content-item w50">
                                    <div className="assignment-card-content-item-header">Start Date</div>
                                    <div className="assignment-card-content-item-value">XX/XX/XXXX</div>
                                </div>
                                <div className="assignment-card-content-item w50">
                                    <div className="assignment-card-content-item-header">End Date</div>
                                    <div className="assignment-card-content-item-value">XX/XX/XXXX</div>
                                </div>
                                <div className="assignment-card-content-item w50">
                                    <div className="assignment-card-content-item-header">Type</div>
                                    <div className="assignment-card-content-item-value">XXX-XX</div>
                                </div>
                                <div className="assignment-card-content-item w50">
                                    <div className="assignment-card-content-item-header">Time Rem.</div>
                                    <div className="assignment-card-content-item-value">XX:XX</div>
                                </div>
                                { ctrl.card.$show() == true ?
                                <div>
                                    <div className="assignment-card-content-item">
                                        <div className="assignment-card-content-item-header">Customer</div>
                                        <div className="assignment-card-content-item-value">XXXXXX XXX XXXXXXXX</div>
                                    </div>
                                    <div className="assignment-card-content-item">
                                        <div className="assignment-card-content-item-header">Company</div>
                                        <div className="assignment-card-content-item-value">XXXX XXX XXXXXXXXXX</div>
                                    </div>
                                    <div className="assignment-card-content-item">
                                        <div className="assignment-card-content-item-header">Product</div>
                                        <div className="assignment-card-content-item-value">XXXX XXXX XXXX XXXX</div>
                                    </div>
                                </div>
                                : null }
                            <div className="quick-access-cards-card-content-action-container">
                                <button className="quick-access-cards-card-action pull-left" onclick={ctrl.onDecline.bind(ctrl)}>Remove Card</button>
                                <div className="icon-container quick-access-cards-card-showmore pull-right" onclick={ctrl.onToggleDetails.bind(ctrl)}>
                                    { ctrl.card.$show() != true ? <i className="icon icon-scrollChevronDownLegacy"></i> : <i className="icon icon-scrollChevronUpLegacy"></i> }
                                </div>
                            </div>
                            </div>
                        : null }
                    </div>
            </div>
        }
    }
})();

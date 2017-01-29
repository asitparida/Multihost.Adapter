(function () {

    window['Multihost.Card.Mithril'] = {
        controller() {
            this.hideProgress = m.prop(false)
            this.showPanel = m.prop(false)
            this.who = m.prop('World');
            this.card = {
                id: 1,
                title: 'New Card #M',
                hostApp: 'Mithril',
                $show: false
            };
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
                                    <span className="md-headline">{ctrl.card.title}</span>
                                    <span className="quick-access-cards-card-hostapp">{ctrl.card.hostApp}</span>
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
                                <button className="quick-access-cards-card-action pull-left" onClick={this.onDecline}>Remove Card</button>
                                <div className="icon-container quick-access-cards-card-showmore pull-right" onClick={this.onToggleDetails}>
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

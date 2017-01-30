(function () {
    if (typeof Vue !== 'undefined' && Vue.component) {
        Vue.component('multihost-card-vue', {
            render (h) {
                return <div class="quick-access-cards">
                        <div class="quick-access-cards-card">
                            { this.hideProgress == false ?
                                <div class="quick-access-cards-card-custom-progress">
                                    <div class="overlay"></div>
                                    <div class="spinner">
                                        <div class="dot1"></div>
                                        <div class="dot2"></div>
                                    </div>
                                </div>
                            : null }
                            { this.showPanel == true ?
                                <div class="quick-access-cards-card-title">
                                    <div class="quick-access-cards-card-title-text">
                                        <span class="md-headline">{this.card.title}</span>
                                        <span class="quick-access-cards-card-hostapp">{this.card.hostApp}</span>
                                    </div>
                                </div>
                            : null }
                            { this.showPanel == true ?
                                <div class="quick-access-cards-card-content">
                                    <div class="assignment-card-content-item">
                                        <div class="assignment-card-content-item-header">Name</div>
                                        <div class="assignment-card-content-item-value">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                    </div>
                                    <div class="assignment-card-content-item w50">
                                        <div class="assignment-card-content-item-header">Start Date</div>
                                        <div class="assignment-card-content-item-value">XX/XX/XXXX</div>
                                    </div>
                                    <div class="assignment-card-content-item w50">
                                        <div class="assignment-card-content-item-header">End Date</div>
                                        <div class="assignment-card-content-item-value">XX/XX/XXXX</div>
                                    </div>
                                    <div class="assignment-card-content-item w50">
                                        <div class="assignment-card-content-item-header">Type</div>
                                        <div class="assignment-card-content-item-value">XXX-XX</div>
                                    </div>
                                    <div class="assignment-card-content-item w50">
                                        <div class="assignment-card-content-item-header">Time Rem.</div>
                                        <div class="assignment-card-content-item-value">XX:XX</div>
                                    </div>
                                    { this.card.$show == true ?
                                    <div>
                                        <div class="assignment-card-content-item">
                                            <div class="assignment-card-content-item-header">Customer</div>
                                            <div class="assignment-card-content-item-value">XXXXXX XXX XXXXXXXX</div>
                                        </div>
                                        <div class="assignment-card-content-item">
                                            <div class="assignment-card-content-item-header">Company</div>
                                            <div class="assignment-card-content-item-value">XXXX XXX XXXXXXXXXX</div>
                                        </div>
                                        <div class="assignment-card-content-item">
                                            <div class="assignment-card-content-item-header">Product</div>
                                            <div class="assignment-card-content-item-value">XXXX XXXX XXXX XXXX</div>
                                        </div>
                                    </div>
                                    : null }
                                    <div class="quick-access-cards-card-content-action-container">
                                        <button class="quick-access-cards-card-action pull-left" on-click={this.onDecline.bind(this)}>Remove Card</button>
                                        <div class="icon-container quick-access-cards-card-showmore pull-right" on-click={this.onToggleDetails.bind(this)}>
                                            { this.card.$show != true ? <i class="icon icon-scrollChevronDownLegacy"></i> : <i class="icon icon-scrollChevronUpLegacy"></i> }
                                        </div>
                                    </div>
                                </div>
                            : null }
                        </div>
                </div>
            },
            data() {
                return {
                    message: 'hello!',
                    hideProgress: false,
                    showPanel: false,
                    card: {
                        id: 1,
                        title: 'New Card #VUE',
                        hostApp: 'VueJS',
                        $show: false
                    }
                }
            },
            created: function () {
                var self = this;
                setTimeout(function () {
                    self.hideProgress = true;
                    self.showPanel = true;
                }, 1500);
            },
            methods: {
                onToggleDetails: function () {
                    this.card.$show = !this.card.$show;
                },
                onDecline: function () {
                    if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function')
                        removeWindowBootstrapForClient(this.$parent.$data.appViewId);
                }
            }
        })
    }
})();

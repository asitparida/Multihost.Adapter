(function () {

    window['Multihost.Card.React'] = React.createClass({
        getInitialState: function() {
            var self = this;
            self.hideProgress = false;
            self.showPanel = false;
            self.timeout = setTimeout;
            self.card = {
                id: 1,
                title: 'New Card #R',
                hostApp: 'React'
            };
            return self;
        },
        onDecline: function myfunction() {            
            if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function')
                removeWindowBootstrapForClient(this.props.appView);
        },
        onToggleDetails: function() {
             this.setState(function(){
                return this.card.$show = !this.card.$show;
            });
        },
        componentDidMount: function () {
            setTimeout(function() { this.setState({hideProgress : true, showPanel : true}); }.bind(this), 3000);
        },
        render: function() {
            return (
                  <div className="quick-access-cards">
                    <div className="quick-access-cards-card">
                        { this.state.hideProgress == false ? 
                            <div className="quick-access-cards-card-custom-progress" >
                                <div className="overlay"></div>
                                <div className="spinner">
                                    <div className="dot1"></div>
                                    <div className="dot2"></div>
                                </div>
                            </div>
                        : null }                        
                        { this.state.showPanel == true ? 
                            <div className="quick-access-cards-card-title">
                                <div className="quick-access-cards-card-title-text">
                                    <span className="md-headline">{this.state.card.title}</span>
                                    <span className="quick-access-cards-card-hostapp">{this.state.card.hostApp}</span>
                                </div>
                            </div>
                        : null } 
                        { this.state.showPanel == true ? 
                            <div className="quick-access-cards-card-content">
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
                                { this.state.card.$show == true ?
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
                        <div className="quick-access-cards-card-content-action-container">
                            <button className="quick-access-cards-card-action pull-left" onClick={this.onDecline}>Remove Card</button>
                            <div className="icon-container quick-access-cards-card-showmore pull-right" onClick={this.onToggleDetails}>
                                { this.state.card.$show != true ? <i className="icon icon-scrollChevronDownLegacy"></i> : <i className="icon icon-scrollChevronUpLegacy"></i> }
                            </div>
                        </div>
                            </div>
                        : null }                                               
                </div>
                  </div>
            );
        }
    })
})();

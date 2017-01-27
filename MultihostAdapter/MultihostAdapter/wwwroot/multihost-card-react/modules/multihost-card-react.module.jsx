(function () {

    window['Multihost.Card.React'] = React.createClass({
        getInitialState: function() {
            var self = this;
            self.hideProgress = false;
            self.showPanel = false;
            self.timeout = setTimeout;
            self.card = {
                id: 1,
                title: 'New Request Assignment 1',
                hostApp: 'GCM-REACT',
                projectName: 'MS State Auditors - 999630',
                customerName: 'MS State Auditors',
                demandSourceId: 'ROSSXXXX0000SSS',
                productOffering: '[LocASIA][LanEN] - Rights Management Service Workshop',
                startDate: '06/06/2016',
                endDate: '06/06/2016',
                type: 'MIP',
                timeRemaning: '30:29'
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
                        <div className="quick-access-cards-card-content-item">
                            <div className="quick-access-cards-card-content-item-header">Project Name</div>
                            <div className="quick-access-cards-card-content-item-value">{this.state.card.projectName}</div>
                        </div>
                        <div className="quick-access-cards-card-content-item w50">
                            <div className="quick-access-cards-card-content-item-header">Start Date</div>
                            <div className="quick-access-cards-card-content-item-value">{this.state.card.startDate}</div>
                        </div>
                        <div className="quick-access-cards-card-content-item w50">
                            <div className="quick-access-cards-card-content-item-header">End Date</div>
                            <div className="quick-access-cards-card-content-item-value">{this.state.card.endDate}</div>
                        </div>
                        <div className="quick-access-cards-card-content-item w50">
                            <div className="quick-access-cards-card-content-item-header">Type</div>
                            <div className="quick-access-cards-card-content-item-value">{this.state.card.type}</div>
                        </div>
                        <div className="quick-access-cards-card-content-item w50">
                            <div className="quick-access-cards-card-content-item-header">Time Rem.</div>
                            <div className="quick-access-cards-card-content-item-value">{this.state.card.timeRemaning}</div>
                        </div>
                                { this.state.card.$show == true ?
                            <div>
                                <div className="quick-access-cards-card-content-item">
                                    <div className="quick-access-cards-card-content-item-header">Customer Name</div>
                                    <div className="quick-access-cards-card-content-item-value">{this.state.card.customerName}</div>
                                </div>
                                <div className="quick-access-cards-card-content-item">
                                    <div className="quick-access-cards-card-content-item-header">Demand Source</div>
                                    <div className="quick-access-cards-card-content-item-value">{this.state.card.demandSourceId}</div>
                                </div>
                                <div className="quick-access-cards-card-content-item">
                                    <div className="quick-access-cards-card-content-item-header">Product / Offering</div>
                                    <div className="quick-access-cards-card-content-item-value">{this.state.card.productOffering}</div>
                                </div>
                            </div>
                                : null }
                        <div className="quick-access-cards-card-content-action-container">
                            <button className="quick-access-cards-card-action pull-left" onClick={this.onDecline}>Decline</button>
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

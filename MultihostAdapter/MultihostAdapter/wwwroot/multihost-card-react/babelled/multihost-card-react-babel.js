'use strict';

(function () {

    window['Multihost.Card.React'] = React.createClass({
        getInitialState: function getInitialState() {
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
            if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function') removeWindowBootstrapForClient(this.props.appView);
        },
        onToggleDetails: function onToggleDetails() {
            this.setState(function () {
                return this.card.$show = !this.card.$show;
            });
        },
        componentDidMount: function componentDidMount() {
            setTimeout(function () {
                this.setState({ hideProgress: true, showPanel: true });
            }.bind(this), 3000);
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: 'quick-access-cards' },
                React.createElement(
                    'div',
                    { className: 'quick-access-cards-card' },
                    this.state.hideProgress == false ? React.createElement(
                        'div',
                        { className: 'quick-access-cards-card-custom-progress' },
                        React.createElement('div', { className: 'overlay' }),
                        React.createElement(
                            'div',
                            { className: 'spinner' },
                            React.createElement('div', { className: 'dot1' }),
                            React.createElement('div', { className: 'dot2' })
                        )
                    ) : null,
                    this.state.showPanel == true ? React.createElement(
                        'div',
                        { className: 'quick-access-cards-card-title' },
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-title-text' },
                            React.createElement(
                                'span',
                                { className: 'md-headline' },
                                this.state.card.title
                            ),
                            React.createElement(
                                'span',
                                { className: 'quick-access-cards-card-hostapp' },
                                this.state.card.hostApp
                            )
                        )
                    ) : null,
                    this.state.showPanel == true ? React.createElement(
                        'div',
                        { className: 'quick-access-cards-card-content' },
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-item' },
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-header' },
                                'Project Name'
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-value' },
                                this.state.card.projectName
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-item w50' },
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-header' },
                                'Start Date'
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-value' },
                                this.state.card.startDate
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-item w50' },
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-header' },
                                'End Date'
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-value' },
                                this.state.card.endDate
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-item w50' },
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-header' },
                                'Type'
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-value' },
                                this.state.card.type
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-item w50' },
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-header' },
                                'Time Rem.'
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item-value' },
                                this.state.card.timeRemaning
                            )
                        ),
                        this.state.card.$show == true ? React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item' },
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-header' },
                                    'Customer Name'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-value' },
                                    this.state.card.customerName
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item' },
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-header' },
                                    'Demand Source'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-value' },
                                    this.state.card.demandSourceId
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'quick-access-cards-card-content-item' },
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-header' },
                                    'Product / Offering'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'quick-access-cards-card-content-item-value' },
                                    this.state.card.productOffering
                                )
                            )
                        ) : null,
                        React.createElement(
                            'div',
                            { className: 'quick-access-cards-card-content-action-container' },
                            React.createElement(
                                'button',
                                { className: 'quick-access-cards-card-action pull-left', onClick: this.onDecline },
                                'Decline'
                            ),
                            React.createElement(
                                'div',
                                { className: 'icon-container quick-access-cards-card-showmore pull-right', onClick: this.onToggleDetails },
                                this.state.card.$show != true ? React.createElement('i', { className: 'icon icon-scrollChevronDownLegacy' }) : React.createElement('i', { className: 'icon icon-scrollChevronUpLegacy' })
                            )
                        )
                    ) : null
                )
            );
        }
    });
})();
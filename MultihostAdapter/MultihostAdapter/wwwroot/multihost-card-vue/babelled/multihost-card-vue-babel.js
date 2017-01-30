'use strict';

(function () {
    if (typeof Vue !== 'undefined' && Vue.component) {
        Vue.component('multihost-card-vue', {
            render: function render(h) {
                return h(
                    'div',
                    { 'class': 'quick-access-cards' },
                    [h(
                        'div',
                        { 'class': 'quick-access-cards-card' },
                        [this.hideProgress == false ? h(
                            'div',
                            { 'class': 'quick-access-cards-card-custom-progress' },
                            [h(
                                'div',
                                { 'class': 'overlay' },
                                []
                            ), h(
                                'div',
                                { 'class': 'spinner' },
                                [h(
                                    'div',
                                    { 'class': 'dot1' },
                                    []
                                ), h(
                                    'div',
                                    { 'class': 'dot2' },
                                    []
                                )]
                            )]
                        ) : null, this.showPanel == true ? h(
                            'div',
                            { 'class': 'quick-access-cards-card-title' },
                            [h(
                                'div',
                                { 'class': 'quick-access-cards-card-title-text' },
                                [h(
                                    'span',
                                    { 'class': 'md-headline' },
                                    [this.card.title]
                                ), h(
                                    'span',
                                    { 'class': 'quick-access-cards-card-hostapp' },
                                    [this.card.hostApp]
                                )]
                            )]
                        ) : null, this.showPanel == true ? h(
                            'div',
                            { 'class': 'quick-access-cards-card-content' },
                            [h(
                                'div',
                                { 'class': 'assignment-card-content-item' },
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-header' },
                                    ['Name']
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-value' },
                                    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit']
                                )]
                            ), h(
                                'div',
                                { 'class': 'assignment-card-content-item w50' },
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-header' },
                                    ['Start Date']
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-value' },
                                    ['XX/XX/XXXX']
                                )]
                            ), h(
                                'div',
                                { 'class': 'assignment-card-content-item w50' },
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-header' },
                                    ['End Date']
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-value' },
                                    ['XX/XX/XXXX']
                                )]
                            ), h(
                                'div',
                                { 'class': 'assignment-card-content-item w50' },
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-header' },
                                    ['Type']
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-value' },
                                    ['XXX-XX']
                                )]
                            ), h(
                                'div',
                                { 'class': 'assignment-card-content-item w50' },
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-header' },
                                    ['Time Rem.']
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item-value' },
                                    ['XX:XX']
                                )]
                            ), this.card.$show == true ? h(
                                'div',
                                null,
                                [h(
                                    'div',
                                    { 'class': 'assignment-card-content-item' },
                                    [h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-header' },
                                        ['Customer']
                                    ), h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-value' },
                                        ['XXXXXX XXX XXXXXXXX']
                                    )]
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item' },
                                    [h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-header' },
                                        ['Company']
                                    ), h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-value' },
                                        ['XXXX XXX XXXXXXXXXX']
                                    )]
                                ), h(
                                    'div',
                                    { 'class': 'assignment-card-content-item' },
                                    [h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-header' },
                                        ['Product']
                                    ), h(
                                        'div',
                                        { 'class': 'assignment-card-content-item-value' },
                                        ['XXXX XXXX XXXX XXXX']
                                    )]
                                )]
                            ) : null, h(
                                'div',
                                { 'class': 'quick-access-cards-card-content-action-container' },
                                [h(
                                    'button',
                                    { 'class': 'quick-access-cards-card-action pull-left', on: {
                                            'click': this.onDecline.bind(this)
                                        }
                                    },
                                    ['Remove Card']
                                ), h(
                                    'div',
                                    { 'class': 'icon-container quick-access-cards-card-showmore pull-right', on: {
                                            'click': this.onToggleDetails.bind(this)
                                        }
                                    },
                                    [this.card.$show != true ? h(
                                        'i',
                                        { 'class': 'icon icon-scrollChevronDownLegacy' },
                                        []
                                    ) : h(
                                        'i',
                                        { 'class': 'icon icon-scrollChevronUpLegacy' },
                                        []
                                    )]
                                )]
                            )]
                        ) : null]
                    )]
                );
            },
            data: function data() {
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
                };
            },

            created: function created() {
                var self = this;
                setTimeout(function () {
                    self.hideProgress = true;
                    self.showPanel = true;
                }, 1500);
            },
            methods: {
                onToggleDetails: function onToggleDetails() {
                    this.card.$show = !this.card.$show;
                },
                onDecline: function onDecline() {
                    if (typeof removeWindowBootstrapForClient !== 'undefined' && typeof removeWindowBootstrapForClient === 'function') removeWindowBootstrapForClient(this.$parent.$data.appViewId);
                }
            }
        });
    }
})();
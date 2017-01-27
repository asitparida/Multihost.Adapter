// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        console.log('DEVICEREADY');
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        try {
            if (typeof cordova !== 'undefined' && typeof device !== 'undefined' && typeof device.platform !== 'undefined') {
                window['APP_PLATFORM_CORDOVA'] = true;
                document.querySelector('html').classList.add('_CORDOVA');
                var devicePlatform = device.platform;
                if (devicePlatform == 'iOS') {                    
                    window['APP_PLATFORM_CORDOVA_IOS'] = true;
                    document.querySelector('html').classList.add('_IOS');
                }
                else if (device.platform == 'Android'){
                    window['APP_PLATFORM_CORDOVA_ANDROID'] = true;
                    document.querySelector('html').classList.add('_ANDROID');
                }
            }
        } catch (e) {
            console.log('COULD NOT FIND DEVICE PLATFORM');
        }        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
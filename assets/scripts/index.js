'use strict';

const authEvents = require('./auth/events.js');
const bucketList = require('./bucketList/events.js');
const nav = require('./ui/navUi.js');
const authUi = require('./ui/authFormUi.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  bucketList.addHandlers();
  nav.navFunction(); 
  authUi.switchForm(); 


    $('#body').show();
    $('#msg').hide();
});

'use strict'

const customMessages = {
    install: 'oh yeah....',
    upgrade: 'awesome.....',
    downgrade: 'thought we were friends..'
}

if(typeof window !== 'undefined') {
   window.customMessages = customMessages 
} else {
   module.exports = customMessages
}
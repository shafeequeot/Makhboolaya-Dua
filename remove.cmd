@ECHO OFF
color 0a

GOTO CommandA
GOTO CommandB

:CommandA:
ECHO ionic cordova plugin remove cordova-plugin-whitelist --save
CALL ionic cordova plugin remove cordova-plugin-whitelist --save

:CommandB:
ECHO ionic cordova plugin remove cordova-plugin-wkwebview-engine --save
CALL ionic cordova plugin remove cordova-plugin-wkwebview-engine --save


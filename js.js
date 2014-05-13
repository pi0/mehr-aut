if (Ext.syncRequire)
    Ext.syncRequire('Ext.direct.Manager');

Ext.namespace('RPC');
RPC.REMOTING_API = {
    "url": "\/aut\/directtest.php",
    "type": "remoting",
    "namespace": "RPC",
    "descriptor": "RPC.REMOTING_API",
    "actions": {"Actors": [
        {"name": "create", "len": 1},
        {"name": "read", "len": 1},
        {"name": "update", "len": 1},
        {"name": "destroy", "len": 1}
    ],
        "Util": [
        {"name": "date", "len": 1}
    ]}};
Ext.Direct.addProvider(RPC.REMOTING_API);

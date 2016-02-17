/* *****  https://www.sitepoint.com/community/t/recursive-function-to-loop-through-xml-dom/3293 */

define(['jQuery', 'util'], function($, util, undefined){
    'use strict';
    var mIntCounter = 0;
    var mData = null;
    var mNodeDocument = null;
    var mArrayNodes = [];
    var mHashText = {_text:{}};
    var mTEXT_NODE = 3;
    var mELEMENT_NODE = 1;
    var mDOCUMENT_NODE = 9;


var getDocumentElement = function(e, data) {

    //
    //  Output function.
    //
    var o = {
        _text: '',
    };

    //
    //  c = each child
    //
    var c = data.firstChild;

    //
    //  Loop through child nodes.
    //
    while (c) {

        //
        //  Add to _text property if it is a text.
        //
        if (c.nodeName == '#text') {
            o._text += c.nodeValue;

        //
        //  Else if it is a normal node.
        //
        } else if (c.nodeType == 1) {

            //
            //  Create property for each node name.
            //
            if (typeof o[c.nodeName] == 'undefined')
                o[c.nodeName] = [];
            o[c.nodeName][o[c.nodeName].length] = getDocumentElement(e, c);

        }

        //
        //  ...Next!
        //
        c = c.nextSibling;

    }

    //
    //  Now, attributes!
    //
    var a = data.attributes;
    var i = 0;
    if (a) {
        for (var i = 0; i < a.length; i ++) {
            o[a[i].name] = a[i].value;
        }
    }

    //
    //  Clean the text
    //
    if (o._text.match(/^\\s*$/))
        delete o._text;

    //
    //  Finished!
    //
    return o;

}
    var _fnc = {
        setListener:function(){
            $('body').on('http:response', getDocumentElement)
        },
        test:function(){
            _fnc.setListener();
            util.fnc.httpSend({
                url:'data/affiliations.xml',
                selector:'body',
                type:'xml'
            });
           }
    }
    return{fnc:_fnc}
});
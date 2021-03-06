//  temporary stubs required for Vue. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function (fn) { fn() }
global.clearTimeout = function () { };

const styles = require("./styles.css");
const Vue = require("vue").default;
const hello = require("./hello.vue").default
const colorGetFunction = require("./colorGetFunction.js");

const { Artboard, Rectangle, Ellipse, Text, Color } = require("scenegraph");

let dialog;

function getDialog() {
    colorGetFunction(documentRoot);

    if (dialog == null) {
        document.body.innerHTML = `<dialog><div id="container"></div></dialog>`
        dialog = document.querySelector("dialog");
        var app4 = new Vue({
            el: "#container",
            components: { hello },
            render(h) {
                return h(hello, { props: { dialog } })
            }
        })
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: function () {
            getDialog().showModal();
        }
    }
};
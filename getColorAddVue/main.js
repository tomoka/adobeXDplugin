// Add this to the top of your main.js file
const { Artboard, Rectangle, Ellipse, Text, Color } = require("scenegraph");// XD拡張APIのクラスをインポート
const { alert, error } = require("./lib/dialogs.js"); //ダイアログのクラスインポート

//temporary shim until setTimeout is added to XD
global.setTimeout = (fn) => { fn() }
global.clearTimeout = (fn) => {}
//const $ = require("./lib/jquery");
const Vue = require("./lib/vue");
const App = require('./tmp/App.vue');

var el,R1_255,B1_255,G1_255,R1,B1,G1,R2_255,B2_255,G2_255,R2,B2,G2,colorL1,colorL2,nodeL1,nodeL2,nodeL1test,nodeL2test;

function _helloHandlerFunction(documentRoot) { // メインのファンクション
  console.log("my function is called!"); // Developer Consoleに出力
  console.log(documentRoot.items);

  el = new Text(); // XDのTextクラスからインスタンスを生成
  el.text = "Hello, World!";
  el.styleRanges = [ // テキストのスタイルを設定
    {
      length: el.text.length,
      fill: new Color("#99CC00"),
      fontSize: 24
    }
  ];

  nodeL1test = documentRoot.items.length;
  nodeL2test = documentRoot.items[0];
  
  console.log("The selected node is nodeL1: " + nodeL1test);
  console.log("The selected node is nodeL2: " + nodeL2test);

  //selection.insertionParent.addChild(el); // XDノードツリーにテキストオブジェクトを追加
  documentRoot.items[0].addChild(el); // XDノードツリーにテキストオブジェクトを追加
  el.moveInParentCoordinates(100, 100); // テキストオブジェクトの表示位置を指定


  //dummy
  nodeL1 = new Rectangle();
  nodeL1.width = 30;
  nodeL1.height = 20;
  nodeL1.moveInParentCoordinates(30,20);
  nodeL1.fill = new Color("000000");

  nodeL2 = new Rectangle();
  nodeL2.width = 40;
  nodeL2.height = 30;
  nodeL2.moveInParentCoordinates(60,10)
  nodeL2.fill = new Color("ffffff");

  documentRoot.items[0].addChild(nodeL1);
  documentRoot.items[0].addChild(nodeL2);

  nodeL1.moveInParentCoordinates(100, 100);
  nodeL2.moveInParentCoordinates(100, 100);

  /*----------------------------------------------------------------
  一つ目の色
  ------------------------------------------------------------------*/
  R1_255 = nodeL1.fill.r/255; 
  B1_255 = nodeL1.fill.b/255;
  G1_255 = nodeL1.fill.g/255;

  if(R1_255 < 0.03928){
     R1 = R1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R1 = Math.pow(((R1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R1-->" + R1); // Developer Consoleに出力

  if(B1_255 < 0.03928){
     B1 = B1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B1 = Math.pow(((B1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B1-->" + B1); // Developer Consoleに出力

  if(G1_255 < 0.03928){
     G1 = G1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     G1 = Math.pow(((G1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度G1-->" + G1); // Developer Consoleに出力

  /*----------------------------------------------------------------
  ２つ目の色
  ------------------------------------------------------------------*/
 R2_255 = nodeL2.fill.r/255; 
 B2_255 = nodeL2.fill.b/255;
 G2_255 = nodeL2.fill.g/255;

  if(R2_255 < 0.03928){
     R2 = R2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R2 = Math.pow(((R2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R2-->" + R2); // Developer Consoleに出力

  if(B2_255 < 0.03928){
     B2 = B2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B2 = Math.pow(((B2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B2-->" + B2); // Developer Consoleに出力

  if(G2_255 < 0.03928){
     G2 = G2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     G2 = Math.pow(((G2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度G2-->" + G2); // Developer Consoleに出力
  
  //色の相対輝度出し方
  colorL1 = ((R1 * 0.2126) + (G1 * 0.7152) + (B1 * 0.0722));
  colorL2 = ((R2 * 0.2126) + (G2 * 0.7152) + (B2 * 0.0722));

  //console.log("色のコントラスト比@colorL1:colorL2-->" + colorL1 + " : " + colorL2); // Developer Consoleに出力
  console.log("色のコントラスト比@colorL1:colorL-->" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) ); // Developer Consoleに出力
  showAlert();
}

let dialog;
let htmlString;
let id;
function showAlert(id = "dialog") {
    /* we'll display a dialog here */
    console.log("アラート");
    //let htmlString = "<p>" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) + "</p>";
     /*dialog = document.createElement("dialog");
    htmlString = document.createElement("div");
    htmlString.innerHTML = `
        <style>
        dialog {
        background: #FFFFFF;
        }
        header,main,footer {
        padding: 10px 20px;
        }
        form {
        width: auto;
        }
        .h1,.h2{
        padding: 20px;
        text-align: center;
        background: transparent;
        }
        .h2{
        font-size: 24px;
        }
        .box1 > p,
        .box2 > p {
        background: #FFFFFF;
        text-align: center;
        }
        .box {
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        }
        .icon {
        border-radius: 4px;
        width: 24px;
        height: 24px;
        overflow: hidden;
        }
        .box {
        display: flex;
        justify-content: center;
        }
        .box1 {
        width:100px;
        height:100px;
        botder:solod 1px #000;
        background:${ nodeL1.fill.toHex() };
        }
        .box2 {
        width:100px;
        height:100px;
        botder:solod 1px #000;
        background:`+ nodeL2.fill.toHex() +`;
        }
        </style>
        <form method="dialog">
          <header>
            <h1 class="h1">コントラスト比<br><small>[Contrast Ratio]</small></h1>
          </header>
          <main>
            <h2 class="h2">${ ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) }</h2>
            <h3 class="h2">判定<br>${ ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) }</h3>
            <div class="box">
              <div class="box1">
                <p>色１[${nodeL1.fill.toHex()}] </p>
              </div>
              <div class="box2">
                <p>色２[${nodeL2.fill.toHex()}] </p>
              </div>
            </div>
          </main>
          <footer>
            <button type="button" id="cancel">Cancel</button>
            <button type="submit" id="ok" uxp-variant="cta">OK</button>
          </footer>
        </form>
    `;
    //await alert("色のコントラスト比" + htmlString);
    document.body.appendChild(dialog);
    dialog.appendChild(htmlString);
    dialog.showModal();
    console.log(document.body.innerHTML);

    const cancelBtn = document.getElementById("cancel");
          cancelBtn.addEventListener('click', () => {
        　　 dialog.remove();
            return false;
            }, false); */
  }

async function showError() {
    /* we'll display a dialog here */
    console.log("エラー");

    let htmlString = "<p>" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) + "</p>";
    await alert("色のコントラスト比" + htmlString);

}

function createDialog(id = "dialog") {
    document.body.innerHTML = `<dialog id="${id}"><div id="container"></div></dialog>`;
    let dialog = document.getElementById(id);
    new Vue({
        el: "#container",
        components: { App },
        render(h) {
            return h(App, { props: { dialog } });
        },
    });

    return dialog;
}

function replaceText(children, prev, after) {
    children.forEach(elm => {
        if (elm instanceof Text) {
            elm.text = elm.text.replace(prev, after);
        }
    });
}
// エントリポイントとなるメソッドです
async function helloHandlerFunction(selection, root) {
    const dialog = createDialog();
    const result = await dialog.showModal();
    if (result) {
        root.children.forEach(elm => {
            if (elm instanceof Artboard) {
                replaceText(elm.children, new RegExp(result[0], 'g'), result[1]);
            }
        });
    }
}

module.exports = { // コマンドIDとファンクションの紐付け
  commands: {
    helloCommand: helloHandlerFunction
  }
};

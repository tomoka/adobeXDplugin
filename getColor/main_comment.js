const {Text, Color} = require("scenegraph"); // XD拡張APIのクラスをインポート
const { alert, error } = require("./lib/dialogs.js"); //ダイアログのクラスインポート

var el,R1_255,B1_255,G1_255,R1,B1,G1,R2_255,B2_255,G2_255,R2,B2,G2,colorL1,colorL2nodeL1,nodeL2;

function helloHandlerFunction(documentRoot) { // メインのファンクション
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

  nodeL1 = documentRoot.items[0];
  nodeL2 = documentRoot.items[1];
  //console.log("The selected node is b: " + nodeL1.fill.b);
  //console.log("The selected node is b: " + nodeL2.fill.b);

  selection.insertionParent.addChild(el); // XDノードツリーにテキストオブジェクトを追加
  el.moveInParentCoordinates(100, 100); // テキストオブジェクトの表示位置を指定

  //console.log("文字の色取得a" + el.fill.a); // Developer Consoleに出力
  //console.log("文字の色取得r" + el.fill.r); // Developer Consoleに出力
  //console.log("文字の色取得g" + el.fill.g); // Developer Consoleに出力
  //console.log("文字の色取得b" + el.fill.b); // Developer Consoleに出力
  //console.log("RootNode has " + selection.items.length + " children");
  //console.log("color " + selection.items[0].fill.a + " =a");
  //色の相対輝度は、 L =0.2126*R + 0.7152*G + 0.0722*B
  //console.log("文字の色取得a" + el.fill.r/16); // Developer Consoleに出力
  //console.log("文字の色取得b" + el.fill.b/16); // Developer Consoleに出力
  //console.log("文字の色取得g" + el.fill.g/16); // Developer Consoleに出力


  /*----------------------------------------------------------------
  一つ目の色
  ------------------------------------------------------------------*/
  R1_255 = nodeL1.fill.r/255; 
  B1_255 = nodeL1.fill.b/255;
  G1_255 = nodeL1.fill.g/255;

  if(R1_255 < 0.3928){
     R1 = R1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R1 = Math.pow(((R1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R1-->" + R1); // Developer Consoleに出力

  if(B1_255 < 0.3928){
     B1 = B1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B1 = Math.pow(((B1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B1-->" + B1); // Developer Consoleに出力

  if(G1_255 < 0.3928){
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

  if(R2_255 < 0.3928){
     R2 = R2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R2 = Math.pow(((R2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R2-->" + R2); // Developer Consoleに出力

  if(B2_255 < 0.3928){
     B2 = B2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B2 = Math.pow(((B2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B2-->" + B2); // Developer Consoleに出力

  if(G2_255 < 0.3928){
     G2 = G2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     G2 = Math.pow(((G2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度G2-->" + G2); // Developer Consoleに出力

  //console.log("色の相対輝度1-->" + (R1*0.2126/1) + (G1*0.7152/1) + (B1*0.0722/1)); // Developer Consoleに出力
  //console.log("色の相対輝度2-->" + (R2*0.2126/1) + (G2*0.7152/1) + (B2*0.0722/1)); // Developer Consoleに出力
  
  //色の相対輝度出し方
  colorL1 = ((R1*0.2126/1) + (G1*0.7152/1) + (B1*0.0722/1) + 0.05);
  colorL2 = ((R2*0.2126/1) + (G2*0.7152/1) + (B2*0.0722/1) + 0.05);

  console.log("色のコントラスト比@colorL1:colorL2-->" + colorL1 + ":" + colorL2); // Developer Consoleに出力

  //let application = require("application");
  //console.log("Version:", application.version);        // e.g. "13.0.21.3"
  //console.log("XD locale:", application.appLanguage);  // e.g. "en"
  //console.log("OS locale:", application.systemLocale); // e.g. "en_US"
  showAlert();
}

async function showAlert() {
    /* we'll display a dialog here */
    console.log("アラート");
    let htmlString = "<p>" + colorL1 + ":" + colorL2 + "</p>";
    await alert("色のコントラスト比" + htmlString);
}

async function showError() {
    /* we'll display a dialog here */
    console.log("エラー");

    let htmlString = "<p>" + colorL1 + "</p>" + "<p>" + colorL2 + "</p>";
    await alert("色のコントラスト比" + htmlString);

}

module.exports = { // コマンドIDとファンクションの紐付け
  commands: {
    helloCommand: helloHandlerFunction
  }
};

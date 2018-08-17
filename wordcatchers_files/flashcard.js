chrome.storage.sync.get(["dictionary"], function(items){
  var wordDef= items.dictionary;
  for (i = 0; i < wordDef.length; i++) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(wordDef[i]);
    node.appendChild(textnode);
    document.getElementById("wordCatcherList").appendChild(node);
  }});

  window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
      chrome.tabs.create({url:e.target.href})
    };
  })

var dictionary = [];

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if(request.message === "vocab_word") {
      //gets highlighted word
      var selected = (window.getSelection().toString()).split(" ");
      // selected = document.getElementById("definition").string;
      var query = ("https://owlbot.info/api/v2/dictionary/" + selected);
      var request = new XMLHttpRequest();
      request.open('GET', query, false);
      request.send();
      var requestInformation = JSON.parse(request.responseText);
      var def = selected + " means: " + requestInformation[0].definition;
      alert(def);
      //adds word and def to their array
      dictionary.push(selected + " means " + requestInformation[0].definition);
      //set array into storage or append the word to an array in the storage?
      chrome.storage.sync.set({"dictionary": dictionary});
}});

(function(window, undefined) {
  var dictionary = {
    "778f43cb-bbfa-4974-a9ce-ccb012229d27": "recargar saldo",
    "c5b590ba-93c2-4543-9501-24886b8070ca": "revisar saldo",
    "70263960-0986-4fa4-a076-ba5760203dae": "registrar usuario",
    "b12857e6-63ff-4c6d-bfcb-ea7338a12db3": "servicio",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "index",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
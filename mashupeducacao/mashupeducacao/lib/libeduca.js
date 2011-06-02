
var LibEduca = {

   json_education : function getDataJson(url){
        var resp = jQuery.ajax({ url : url, async: false}).responseText;
        objectJson = jQuery.parseJSON(resp);
        return objectJson;
   }
}


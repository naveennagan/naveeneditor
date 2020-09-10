function getLps(pattern){
    var lp = [];
    if(!pattern.length){
        return []
    }
    var lp = [];
    lp[0] = 0;

    for(var i=1;i<pattern.length;i++){
        var charToBeCompared = pattern.charAt(lp[i-1]);
        if(pattern.charAt(i) === charToBeCompared){
            lp[i] = lp[i-1]+1;
        }else{
            lp[i] = 0;
        }
    }

    return lp;
}

function searchPattern(string,pattern){

    if(string.length < 1 || pattern.length < 1){
        return [];
    }
   
    if(string.length < pattern.length){
       return [];
   }

   var lps = getLps(pattern);

   if(lps.length < 1){
       return [];
   }

   var indices = [];
   
   var startIndexString = 0;
   var startIndexPattern = 0;

   while(startIndexString <= string.length-pattern.length){
        var startIndex = startIndexString;
        while(string.charAt(startIndexString) === pattern.charAt(startIndexPattern) && startIndexString<string.length 
         && startIndexPattern < pattern.length){
            startIndexString++;
            startIndexPattern++;
         }
        
        if(startIndexPattern == pattern.length){
            indices.push(startIndex);
            var lpsMatched = lps[startIndexPattern-1];
            startIndexString -= lpsMatched;
        } else{
            if(startIndexPattern > 0){
                var lpsMatched = lps[startIndexPattern-1];
                startIndexString -= lpsMatched; 
             }else{
                 startIndexString++;
             }
        }
        
        startIndexPattern = 0;
   }

   return indices;

}

export default searchPattern;
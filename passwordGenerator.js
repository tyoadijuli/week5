function changeVocals (str) {
    //code di sini
    var before = 'aiueoAIUEOcdghklmnqrstwxyzCDGHKLMNQRSTWXYZbjvfpBJVFP '
    var after =  'bjvfpBJVFPcdghklmnqrstwxyzCDGHKLMNQRSTWXYZbjvfpBJVFP '
    var result = ''
    for ( var i=0; i < str.length; i++){
        for ( var j = 0; j< before.length; j++){
            if( str[i] === before[j]){
                result += after[j]
            }
        }
    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    var awal = changeVocals(str)
    var res = ''
    for(var i = awal.length-1; i >= 0; i--){
        res += awal[i]
    }
    return res
  }
  // console.log(reverseWord('Sergei Dragunov'))
  
  function setLowerUpperCase (str) {
    //code di sini
    var vokal = changeVocals(str)
    var upLow = reverseWord(vokal)
    var before = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
    var after =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
    var res = ''
    for ( var i = 0; i<upLow.length; i++){
        for ( var j =0; j < before.length; j++){
          if (upLow[i] == before[j]){
            res += after[j]
          }
        }
    }
    return res
  }
  // console.log(setLowerUpperCase('Dimitri Wahyudiputra asd'))
  
  function removeSpaces (str) {
    //code di sini
    // var vokal = changeVocals(str)
    // var upLow = reverseWord(vokal)
    var spasi = setLowerUpperCase(str)

    var before = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var after =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var res = ''
    for ( var i = 0; i < spasi.length; i++){
      for ( var j = 0; j < before.length; j++){
        if ( spasi [i] == before[j]){
          res += after [j]
        }
      }
    }
    return res
  }
  // console.log(removeSpaces('Dimitri Wahyudiputra'))
  
  function passwordGenerator (name) {
    //code di sini
    var jumlah = 5
    
    var akhir = removeSpaces(name)
    res = ''
    if( akhir.length < jumlah){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
      return akhir
    }
    // for( var i = 0; i < jumlah; i++){
    //   res += akhir[i]
    // }
    
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
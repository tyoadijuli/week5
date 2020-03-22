function sorting(arrNumber) {
    // code di sini
    // var cek = false
    // if (arrNumber = 0){
    //   return ''
    // }
    // console.log(arrNumber.length)
    
   
    var tampung = []
    for ( var i = 0; i < arrNumber.length; i++){
        // cek = false
       for ( var j = 0; j< (arrNumber.length-i-1); j++ ){
        if ( arrNumber[i] > arrNumber[i+1]){
            // cek = true
            var temp = arrNumber[i]
            arrNumber[i] = arrNumber[i+1]
            arrNumber[i+1] = temp
            
            // tampung.push(temp)
        }
    }
            
        
    }
    
   return arrNumber
  }
//   console.log(sorting([2,3,2,5,4,6,8,6,7,4,8,8,8]))
  
  function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length == 0){
      return ' '
    }
   
    var sort = sorting(arrNumber)
    var hasil = []
    var fix = sort[sort.length-1]
    for ( var i = 0; i < sort.length; i++){
        if (sort[i] == fix){
            hasil.push(sort[i])
        }
    }
    
    return 'angka paling besar adalah ' + fix + ' dan jumlah kemunculannya sebanyak ' + hasil.length + ' kali'
  }
//   console.log(getTotal([2,3,2,5,4,6,8,6,7,4,8,8,8]))
  
  function mostFrequentLargestNumbers(arrNumber) {
    
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''
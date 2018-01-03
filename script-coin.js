
  function flipCoin(){
    var flipResult = Math.random();
    document.getElementById("coin").classList.remove('heads');
    document.getElementById("coin").classList.remove('tails');
    setTimeout(function(){
      if(flipResult <= 0.5){
        document.getElementById("coin").classList.add('heads');
        console.log('it is head');
      }
      else{
        document.getElementById("coin").classList.add('tails');
        console.log('it is tails');
      }
    }, 50);
  };
  
  
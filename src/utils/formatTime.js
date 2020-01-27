export const formatTime = seconds => {
  const argTypeOf = typeof seconds;
  const argBelowZero = seconds < 0;

  if(!seconds || argTypeOf != 'number' || argBelowZero) {
    return null;
  }

  const formatDigits = (sec, moduloInt) => {
    if(moduloInt) {
      return String(Math.floor(sec % moduloInt)).padStart(2, 0);
    }
    
    return String(Math.floor(sec)).padStart(2, 0);
  };

  return formatDigits(seconds/3600) + ':' + formatDigits((seconds/60) , 60) + ':' + formatDigits(seconds, 60);
};
const DH = (secretn1, publichn1, publichn2, word) => {
   let a = '';
   let indexA = 0;
   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let partKey = Math.pow(publichn1, secretn1)%publichn2
   let fullKey = Math.pow(partKey, secretn1)%publichn2
   for(let i = 0; i < word.length; i++){
     indexA = alphabet.indexOf(word[i])+fullKey
     if(indexA>alphabet.length) indexA = indexA%alphabet.length
     a = a + alphabet[indexA]
   }
   return a;
 }
 console.log(DH(1, 3, 5, 'salam'));
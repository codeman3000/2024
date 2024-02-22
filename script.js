function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqurstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}




function makeid2(length) {
    let result2 = '';
    const characters2 = '1234567890';
    const charactersLength2 = characters2.length;
    let counter2 = 0;
    while (counter2 < length) {
      result2 += characters2.charAt(Math.floor(Math.random() * charactersLength2));
      counter2 += 1;
    }
    return result2;
}

var site = "https://prnt.sc/"
site += makeid(2)
site += makeid2(4)
window.open(site, '_blank');
const createKeywords = name => {
    const arrName = [];
    let currName = '';
    name.split('').forEach(letter => {
      currName += letter;
      arrName.push(currName);
    });
    return arrName;
  }
  
  
  export const generateKeywords = (firstName, lastName) => {

    const keywordFullName = createKeywords(`${firstName} ${lastName}`);
    const keywordLastNameFirst = createKeywords(`${lastName} ${firstName}`);
    
    return [
        ...keywordFullName,
        ...keywordLastNameFirst,
      ]
      
  }
const createKeywords = name => {
    const arrName = [];
    let curName = '';
    name.split('').forEach(letter => {
      curName += letter;
      arrName.push(curName);
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
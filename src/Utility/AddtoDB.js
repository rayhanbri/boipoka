const getStoreBook = () =>{

  const sotredBookStr = localStorage.getItem('readlist');

  if(sotredBookStr){
    const storedBookData = JSON.parse(sotredBookStr);
    return storedBookData;
  }
 else{
  return [];
 }
}

const addToStoredDB = (id) =>{

  const storedBookData = getStoreBook();

  if(storedBookData.includes(id)){
    alert ('bhai ei id already ache');
  }
  else{
    storedBookData.push(id);
    // console.log(storedBookData)

    const data = JSON.stringify(storedBookData);
    localStorage.setItem('readlist',data)
  }

}

export {addToStoredDB,getStoreBook};
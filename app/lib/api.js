const result='{"results":[{"gender":"female","name":{"title":"ms","first":"helene","last":"schwarz"},"location":{"street":"8586 feldstraße","city":"memmingen","state":"bayern","postcode":82393},"email":"helene.schwarz@example.com","login":{"username":"blackfish964","password":"chou","salt":"UKGgb1mz","md5":"a394874b8ae7cd37425dace890e291e3","sha1":"b87c3591bb8b43381defa9e133df1ce96cfb1395","sha256":"7f1958df266a79b83290c6f67db47ac259a29a3fd26d2cd36e447e13a969424e"},"dob":"1947-04-25 10:22:54","registered":"2004-08-16 06:29:53","phone":"0336-3809492","cell":"0177-6125468","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/94.jpg","medium":"https://randomuser.me/api/portraits/med/women/94.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/94.jpg"},"nat":"DE"}],"info":{"seed":"b9e87bd02716abed","results":1,"page":1,"version":"1.1"}}';

export const fetchData = async () => {
  try {
    //const response = await fetch("https://randomuser.me/api");
    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
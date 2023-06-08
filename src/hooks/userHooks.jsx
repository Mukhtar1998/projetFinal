export const userProfile = async () => {
    const res = await fetch("http://localhost:4002/api/userprofile", {
      method: "GET",
      headers: 
      {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
    });
    if (res) {
      const responseJson = await res.json();
      if (responseJson) {
          return responseJson.user;
      } else
          return []
    } else
      return []
  };

    // const logedIn = 
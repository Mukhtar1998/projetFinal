export const getCourses = async () => {
  const res = await fetch("http://localhost:4002/api/courses", {
    method: "GET"
  });
  if (res) {
    const responseJson = await res.json();
    if (responseJson) {
        return responseJson.course;
    } else
        return []
  } else
    return []
};

export const userCourse = async () => {
  const res = await fetch("http://localhost:4002/api/users/:id/courses", {
    method: "GET",
    headers: 
      {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
    
  });
  if (res) {
    const responseJson = await res.json();
    // console.log(res);
    if (responseJson) {
        return responseJson.course;
    } else
        return []
  } else
    return []
};

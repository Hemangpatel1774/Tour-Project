const Profile = () => {
  const logOutUser = () =>{
    localStorage.setItem('isLogin',"false")
    location.reload('/')
  }
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={logOutUser}>Log out</button>
    </div>
  )
}

export default Profile

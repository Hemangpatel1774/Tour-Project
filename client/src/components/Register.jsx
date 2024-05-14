
const Register = () => {
  return (
    <div>
      <form className="registration-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="profile-photo">Profile Photo:</label>
          <input type="file" id="profile-photo" name="profile-photo" accept="image/*" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )

}
export default Register

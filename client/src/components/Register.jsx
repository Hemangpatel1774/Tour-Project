import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]*$/.test(name) || name.length===0) {
      alert("enter valid name")
      document.getElementById("name").focus();
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("enter valid email")
      document.getElementById("email").focus();
      return false;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.')
      document.getElementById("password").focus();
      return false;
    }
    setUserData({ name: name, email: email, password: password })
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    setPassword("");
    setEmail("");
    setName("");
    localStorage.setItem('isLogin', 'true');
    navigate('/')
  }
  return (
    <div>
      <form className="registration-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail((e.target.value))} id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={
            password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="profile-photo">Profile Photo:</label>
          <input type="file" id="profile-photo" name="profile-photo" accept="image/*" />
        </div>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )

}
export default Register

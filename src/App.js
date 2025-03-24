import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dob, setDob] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    phonenumber: "",
    dob: "",
  });

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/; // Ensures exactly 10 digits
    return regex.test(phone);
  };

  const validateDob = (dob) => {
    if (!dob) return false;

    const selectedDate = new Date(dob);
    const today = new Date();

    // Ensure birthdate is not in the future
    if (selectedDate > today) {
      return false;
    }else{
      return true
    }

    console.log(selectedDate,today , selectedDate > today);
   

    // return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", phonenumber: "", dob: "" };

    if (!validatePhoneNumber(phonenumber)) {
      alert("Invalid phone number Phone number must be 10 digits");
    }
    if (!validateDob(dob)) {
      alert("Invalid date of birth. Date of Birth cannot be in future");
      // setIsClicked(false);
    } else {
      alert("Form submitted successfully!");
      setIsClicked(false);
    }
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={handleButtonClick}>
        Open Form
      </button>

      {isClicked && (
        <div className="modal">
          <div className="modal-content">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-text">Fill Details</label>
              <label className="label-text">UserName</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                type="text"
              />

              <label className="label-text">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
              {/* {errors.email && <p className="error">{errors.email}</p>} */}

              <label className="label-text">PhoneNumber</label>
              <input
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
                type="text"
                maxLength="10"
              />
              {/* {errors.phonenumber && <p className="error">{errors.phonenumber}</p>} */}

              <label className="label-text">Date of Birth</label>
              <input
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                type="date"
                // max={new Date().toISOString().split("T")[0]} // Prevents future dates
              />

              {/* {errors.dob && <p className="error">{errors.dob}</p>} */}

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

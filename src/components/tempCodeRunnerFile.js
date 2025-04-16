// import React, { useState } from 'react';
// import '/Users/cherry/Desktop/my-portfolio/src/styles/booking.css';

// export default function Booking() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [name, setName] = useState('');

//   const timeSlots = [
//     '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
//     '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
//   ];

//   const handleBooking = async () => {
//     setErrorMsg('');

//     if (!selectedDate || !selectedTime || !name || !email) {
//       setErrorMsg('Please fill out all required fields.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('phone', phone);
//     formData.append('date', selectedDate);
//     formData.append('time', selectedTime);

//     try {
//       await fetch('https://formspree.io/f/xblgejrl', {
//         method: 'POST',
//         body: formData,
//       });

//       setShowConfirmation(true);
//       setTimeout(() => {
//         setShowConfirmation(false);
//         window.location.href = '#contact';
//       }, 3000);
//     } catch (err) {
//       console.error('Error:', err);
//       setErrorMsg('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className="booking-container">
//       <h2>Book a Class</h2>

//       <div className="input-row">
//         <label>Your Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />

//         <label>Your Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />

//         <label>Phone Number (optional):</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Enter your phone number"
//         />

//         <label>Select a Date:</label>
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           required
//         />
//       </div>

//       <div className="time-grid">
//         {timeSlots.map((slot) => (
//           <button
//             key={slot}
//             className={`time-slot-box ${selectedTime === slot ? 'selected' : ''}`}
//             onClick={() => setSelectedTime(slot)}
//           >
//             {slot}
//           </button>
//         ))}
//       </div>

//       {errorMsg && <p className="error-msg">{errorMsg}</p>}

//       <button
//         className="confirm-btn"
//         onClick={handleBooking}
//         disabled={!name || !email || !selectedDate || !selectedTime}
//       >
//         Confirm Booking
//       </button>

//       {showConfirmation && (
//         <div className="confirmation-popup">
//           <div className="popup-content">
//             <h3>✅ Booking Confirmed!</h3>
//             <p>
//               Thank you, <strong>{name}</strong>! Your class for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been
//               successfully submitted. We'll contact you at <strong>{email}</strong>.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
/
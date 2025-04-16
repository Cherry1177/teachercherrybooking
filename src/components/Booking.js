import React, { useState } from 'react';
import '/Users/cherry/Desktop/my-portfolio/src/styles/booking.css';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  ];

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !name || !email) {
      setShowError(true);
      setShowConfirmation(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('date', selectedDate);
      formData.append('time', selectedTime);

      const response = await fetch('https://formspree.io/f/xblgejrl', {
        headers: {
          'Accept': 'application/json',
        },
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowConfirmation(true);
        setShowError(false);

        // Clear form
        setName('');
        setEmail('');
        setPhone('');
        setSelectedDate('');
        setSelectedTime('');

        // Redirect to home page after 3 seconds
        setTimeout(() => {
          setShowConfirmation(false);
          window.location.href = '/';
        }, 3000);
      } else {
        throw new Error('Formspree failed');
      }
    } catch (err) {
      console.error(err);
      setShowError(true);
      setShowConfirmation(false);
    }
  };

  return (
    <div className="page-content">

    <div className="booking-container">
      <h2>Book a Class</h2>

      <div className="input-row">
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Phone (optional)"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="time-grid">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            className={`time-slot-box ${selectedTime === slot ? 'selected' : ''}`}
            onClick={() => setSelectedTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button className="confirm-btn" onClick={handleBooking}>
        Confirm Booking
      </button>

      {/* Success Message */}
      {showConfirmation && (
        <div className="popup-card success">
          <h3>✅ Booking Successful!</h3>
          <p>
            Thank you, <strong>{name}</strong>! We’ll contact you via <strong>{email}</strong>.
          </p>
          <p>You’ll be redirected to the homepage shortly...</p>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="popup error">
          <p>❗Something went wrong</p>
          <span>Please fill all required fields or try again later.</span>
        </div>
      )}
    </div>
    </div>
  );
}

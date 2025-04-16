import React from "react";
import "../styles/home.css"; // Add custom CSS styles

const Home = () => {
  return (
    <div className="page-content">
    <section className="home-container">
      {/* Introduction Section */}
      <div className="intro">
        <h1>Welcome to My English Classes</h1>
        <p>
          I specialize in helping students improve their English skills for 
          conversation, TOEIC exams, and interview preparation.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BVyl2p0RmhU?si=xqi8WgN6oP3Ymzsn"
            title="Teaching Demo"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* What I Can Teach Section */}
      <div className="services">
        <h2>What I Can Help</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Conversational English</h3>
            <p>Improve fluency, pronunciation, and confidence.</p>
          </div>
          <div className="service-card">
            <h3>TOEIC Exam Preparation</h3>
            <p>Practice exams, strategies, and vocabulary.</p>
          </div>
          <div className="service-card">
            <h3>Interview Preparation</h3>
            <p>Mock interviews, resume guidance, and confidence tips.</p>
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="testimonials">
        <div>
          <p>
          <h2>Student Testimonials</h2>
          </p>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">⭐</div>
          <p>"Great teacher! I improved my English skills in just a few weeks!"</p>
          <span>- Student A</span>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">🗣️</div>
          <p>"I learned many pronunciation mistakes from Cherry. She helped me correct these faults. She is smart to use some questions to assist me to understand some phrases. The most impressive thing is she is so sweet that the class is full of joy. It's a wonderful class."</p>
          <span>- Student B</span>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">📚</div>
          <p>"Thanks teacher sepnt a lot of time talk with us.We practise to make a sentence and read article.I enjoy class very much today!"</p>
          <span>- Student C</span>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">🥰</div>
          <p>"Cherry老師很好，隨時問隨時答，學習超有感~感謝"</p>
          <span>- Student D</span>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">✅</div>
          <p>"Helped me pass the TOEIC exam with a high score!"</p>
          <span>- Student E</span>
        </div>
        <div className="testimonial-card">
        <div class="testimonial-avatar">📒</div>
          <p>"老師很溫柔可以緩解學習中的緊張，並且會針對發音進行糾正。"</p>
          <span>- Student F</span>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;

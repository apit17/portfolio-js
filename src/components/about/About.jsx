import "./about.css";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/9199849/pexels-photo-9199849.jpeg?cs=srgb&dl=pexels-rubaitul-azad-9199849.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I'm an iOS Developer based on Bandung, Indonesia with experience in delivering end-to-end iOS application products.
          I'm passionate about developing new application, improve existing application, and constantly looking to learn new things everyday.
          Currently I'm working at GeekSeat based on Bandung, Indonesia. GeekSeat client are mostly in Australia, my role here is Developer as a Service, so basically I'm working based on what client needs, for delivering report we used daily report and also stand up meeting.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;

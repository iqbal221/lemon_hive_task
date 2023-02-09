import Episodes from "../../components/Home/Episodes";
import Header from "../../components/Home/Header";
import Location from "../../components/Home/Location";
import MeetCast from "../../components/Home/MeetCast";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <MeetCast></MeetCast>
      <Episodes></Episodes>
      <Location></Location>
    </div>
  );
};

export default Home;

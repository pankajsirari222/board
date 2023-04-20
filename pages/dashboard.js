import { useEffect, useState } from "react";
import { TfiPieChart } from "react-icons/tfi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { UilMoneyWithdraw } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import Chart1 from "@/components/Chart1";
import axios from "axios";
import Chart2 from "@/components/Chart2";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const dashboard = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redirect to the home page after signing out
  };

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        `https://sample-data-listed.onrender.com/line`
      );
      const series1 = response1?.data?.values?.map((value) => ({
        name: value.datetime,
        "Close Price": value.close,
      }));

      console.log(response1);
      const response2 = await axios.get(
        `https://sample-data-listed.onrender.com/pie`
      );
      console.log(response2);
      const series2 = response2?.data?.values?.map((value) => ({
        name: value.datetime,
        "Close Price": value.close,
      }));

      setData(series1);
      setData2(series2);
      console.log("DATA1", data);
      console.log("DATA2", data2);

      // Redirect to the dashboard after fetching data
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="lcol">
        <div className="dash-left-heading">Board.</div>
        <div className="nav">
          <button type="button">
            <TfiPieChart />
            Dashboard
          </button>
          <button type="button">
            <BsTags />
            Transactions
          </button>
          <button type="button">
            <TbCalendarTime />
            Schedules
          </button>
          <button type="button">
            <BiUserCircle />
            Users
          </button>
          <button type="button">
            <AiOutlineSetting />
            Settings
          </button>
        </div>
        <div className="footer">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="rcol">
        <div className="dash-right-header">
          <div className="dash-r-heading">Dashboard</div>
          <div className="dash-r-profile">
            <div className="search-bar">
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </div>
            <IoMdNotificationsOutline />
            <GoSignOut onClick={handleSignOut} />
            <CgProfile />
          </div>
        </div>
        <div className="dash-right-body">
          <div className="cards">
            <div className="cards-div-1">
              <div className="icon">
                <UilMoneyWithdraw />
              </div>
              <div className="text">
                <p className="cards-text">Total Revenues</p>
                <p className="num">$2,129,430</p>
              </div>
            </div>
            <div className="cards-div-2">
              <div className="icon">
                <BsTags />
              </div>
              <div className="text">
                <p className="cards-text">Total Transactions</p>
                <p className="num">1,520</p>
              </div>
            </div>
            <div className="cards-div-3">
              <div className="icon">
                <AiOutlineLike />
              </div>
              <div className="text">
                <p className="cards-text">Total Likes</p>
                <p className="num">9,721</p>
              </div>
            </div>
            <div className="cards-div-4">
              <div className="icon">
                <UilUsersAlt />
              </div>
              <div className="text">
                <p className="cards-text">Total Users</p>
                <p className="num">892</p>
              </div>
            </div>
          </div>
          <div className="line-chart-div">
            <div className="line-chart-head">Activities</div>
            <select name="line-date" className="line-date">
              <option value="May-June 2021">May-June 2021</option>
              <option value="July-Aug 2021">July-Aug 2021</option>
              <option value="Sept-Nov 2021">Sept-Nov 2021</option>
            </select>
            <div className="line-chart">
              <Chart1 data={data} data2={data2} />
            </div>
          </div>
          <div className="pie-schedule">
            <div className="pie-chart">
              <div className="pie-heading">
                <p className="pie-head">Top products</p>
                <select name="pie-date" className="pie-date">
                  <option value="May-June 2021">May-June 2021</option>
                  <option value="July-Aug 2021">July-Aug 2021</option>
                  <option value="Sept-Nov 2021">Sept-Nov 2021</option>
                </select>
              </div>
              <div className="pie-heading2">
                <Chart2 />
                <div className="pie-data">
                  <p className="pie-text">
                    <span
                      className="dot"
                      style={{ backgroundColor: "#98D89E" }}
                    ></span>
                    Basic Trees
                  </p>
                  <p className="pie-num">55%</p>
                  <p className="pie-text">
                    <span
                      className="dot"
                      style={{ backgroundColor: "#F6DC7D" }}
                    ></span>
                    Custom Short Pants
                  </p>
                  <p className="pie-num">31%</p>
                  <p className="pie-text">
                    <span
                      className="dot"
                      style={{ backgroundColor: "#EE8484" }}
                    ></span>
                    Super Hoodies
                  </p>
                  <p className="pie-num">14%</p>
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="sch-heading">
                <p className="sch-head">Today's schedule</p>
                <p>
                  See All <BiChevronRight />
                </p>
              </div>
              <div className="sch-1">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <h6>14.00-15.00</h6>
                <h6>at Sunset Road, Kuta, Bali</h6>
              </div>
              <div className="sch-2">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <h6>14.00-15.00</h6>
                <h6>at Sunset Road, Kuta, Bali</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;

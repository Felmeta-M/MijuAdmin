import "./largeWidget.css";
import profile from "../../assets/profile.jpg";

const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButton " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget">
      <h3 className="largeWidgetTitle">Latest Transactions</h3>
      <table className="largeWidgetTable">
        <tr className="largeWidgetTr">
          <th className="largeWidgetTh">Customer</th>
          <th className="largeWidgetTh">Date</th>
          <th className="largeWidgetTh">Amount</th>
          <th className="largeWidgetTh">Status</th>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img src={profile} alt="" className="largeWidgetImg" />
            <span className="largeWidgetName">Nosd Tzhoi</span>
          </td>
          <td className="largeWidgetDate">5 Jun 2024</td>
          <td className="largeWidgetAmount">$782.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img src={profile} alt="" className="largeWidgetImg" />
            <span className="largeWidgetName">Gose Doose</span>
          </td>
          <td className="largeWidgetDate">12 Feb 2023</td>
          <td className="largeWidgetAmount">$231.00</td>
          <td className="largeWidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img src={profile} alt="" className="largeWidgetImg" />
            <span className="largeWidgetName">Goob Derol</span>
          </td>
          <td className="largeWidgetDate">3 Mar 2023</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className=" largeWidgetUser">
            <img src={profile} alt="" className="largeWidgetImg" />
            <span className="largeWidgetName">Fered dezz</span>
          </td>
          <td className="largeWidgetDate">21 Apr 2023</td>
          <td className="largeWidgetAmount">$322.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LargeWidget;

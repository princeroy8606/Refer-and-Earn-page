import "./index.scss";

const Card = ({ data }) => {
  console.log(data.id)

  return (
    <div className="card"key={data.id}>
      <div className="card-name-date">
        <div className="name" key={data.id}>{data.name} </div>
        <div className="date">{data.date}</div>
      </div>
      <div className="courses-enrolled">
        Courses Enrolled({data.courses.length})
      </div>

      <div className="course-wrap">
        {data.courses.map((i) => (
          <div className="courses-container">
            <div className="course">{i}</div>
          </div>
        ))}
      </div>

      <div className="amount">
        Referral Amount <span>₹{data.amount}</span>{" "}
      </div>
    </div>
  );
};

export default Card;

import style from "./TeacherFee.module.css"
function TeacherFee() {
  return (
    <div className={style.feeOuter}>
      <h1 className={style.heading}>Fee Details</h1>
      <div className={style.detailContainer}>
        <div className={style.leftDiv}>
          <p className={style.category}>20 Min free trial lesson</p>
          <p className={style.category}>1 Lesson</p>
          <p className={style.category}>5 Lessons</p>
          <p className={style.category}>10 Lessons</p>
        </div>
        <div className={style.rightDiv}>
          <p className={style.category}>$0</p>
          <p className={style.category}>$22</p>
          <p className={style.category}>
            <span className={style.span}>$110</span>$100
          </p>
          <p className={style.category}>
            <span className={style.span}>$220</span>$195
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherFee;

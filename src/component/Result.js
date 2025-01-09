import './Result.css'

const Result = ({count}) => {

return(
    <div className="container">
        <div className="contents">
            현재 카운트:
            <h2>
                {count}
            </h2>
        </div>
    </div>
);

}
export default Result
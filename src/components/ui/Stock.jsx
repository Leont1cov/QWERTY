export default function Stock({
    stockName,
    companyName,
    currentPrice,
    differencePercentage,
    up,
}) {
    return (
        <div className="stock">
            <div className="stock__namesContainer">
                <div className="stock__namesContainer--stockName">
                    {stockName}
                </div>
                <span className="stock__namesContainer--companyName">
                    {companyName}
                </span>
            </div>

            <span className="stock__currentPrice">{currentPrice}</span>

            {up ? (
                <div className="stock__differencePercentageUp">
                    {differencePercentage}
                </div>
            ) : (
                <div className="stock__differencePercentageDown">
                    {differencePercentage}
                </div>
            )}
        </div>
    )
}

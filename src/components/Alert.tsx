import PriceTag from "../assets/DollarPriceTag.png";

function Alert() {
    return (
        <div className="bg-[#C5B9E4] w-full text-sm font-light flex items-center justify-center ">
            <div className="max-w-[1440px] mx-auto flex items-center py-1 px-[90px]" style={{ letterSpacing: '1%' }}>
                <img src={PriceTag} alt="Price Tag" className="w-4 h-4 mr-2" />
                <p>
                    First time user special <span className="font-semibold text-[#6D4394]">$4.99 </span>
                    for the first five minutes
                </p>
            </div>
        </div>
    );
}

export default Alert;
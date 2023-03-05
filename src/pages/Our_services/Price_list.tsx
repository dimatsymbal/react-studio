type Props = {}
const Price_list = (props: Props) => {
    return (
        <div className="Price_list">
            <h2 className="title_in_Price_list">Our services</h2>
            <div className="Price_list_content_block">
                <div className="row">
                    <div className="col">
                        <img
                            className="price_list_img1"
                            src="/images/price_list_img1.jpg"
                            alt="price_list_img1"
                        />
                    </div>
                    <div className="col">Column</div>
                </div>
            </div>
        </div>
    )
}
export default Price_list

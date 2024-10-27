const Form = (props) => {

    //creating and handling change by using parent function
    const handleInput = e => {
        props.onChangeInput(e)
    }
    return (
        <form onSubmit={props.onFormSubmission}>
                    <h2>Item Card Details</h2>
                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input 
                        name='title'
                        type="text" 
                        placeholder="Enter Title" 
                        value={props.item.title} 
                        // onChange={handleTitle}
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                        name="price"
                        type="number" 
                        placeholder="Enter Price" 
                        value={props.item.price} 
                        // onChange={handlePrice}
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="discountPrice">Discount Price</label>
                        <input 
                        name="discountedPrice"
                        type="number" 
                        placeholder="Enter Discounted Price" 
                        value={props.item.discountedPrice} 
                        // onChange={handleDiscountedPrice}
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input 
                        name="thumbnail"
                        type="text" 
                        placeholder="Enter Thumbnail name" 
                        value={props.item.thumbnail} 
                        // onChange={handleThumbnail}
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div className={"submit-wrap"}>
                        <button>Update</button>
                    </div>
        </form>
    )
}

export default Form
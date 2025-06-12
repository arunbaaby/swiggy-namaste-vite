const ResCategory = ({data})=>{
    console.log('data: ', data);
    const {title, itemCards } = data;
    return (
        <div className="my-8">
            <div className="title text-xl text-gray-800 font-bold">{title} ({itemCards.length})</div>
        </div>
    )
}

export default ResCategory;
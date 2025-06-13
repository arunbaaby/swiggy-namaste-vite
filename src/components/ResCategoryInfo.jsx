import { RES_ITEM_URL } from "../../utils/constants";

const ResCategoryInfo = ({ data }) => {
    console.log('res cat info', data);
    const { name, price, description, imageId } = data.card.info;

    return (
        <div className="">
            <div className="grid grid-cols-[3fr_1fr] shadow-md gap-4 mt-8 p-4">
                <div className="flex flex-col justify-between mx-5">
                    <div className="font-bold text-gray-700 text-xl">{name}</div>
                    <div className="font-bold">₹ {price/100}</div>
                    <div className="text-gray-900">{description}</div>
                </div>
                <div className="w-[156px] h-[144px]">
                    <img className="rounded-xl w-full h-full object-cover" src={RES_ITEM_URL+imageId} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ResCategoryInfo;
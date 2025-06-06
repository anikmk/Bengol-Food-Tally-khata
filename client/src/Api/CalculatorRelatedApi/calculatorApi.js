import axiosPublic from "../../hooks/useAxiosPublic"

export const postCalculatorMoney = async (money) => {
    const {data} = await axiosPublic.post("dailySellMoney",money);
    return data;
}
export const getDailySellMoney = async () => {
    const {data} = await axiosPublic.get("/findDailySellMoney");
    return data;
}
export const deleteAllDailyMoney = async () => {
    const {data} = await axiosPublic.delete("/deleteAllDailyCalculateMoney");
    return data;
}
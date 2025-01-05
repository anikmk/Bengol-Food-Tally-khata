import axiosPublic from "../../hooks/useAxiosPublic"
// todo: i will bake get data status wise , when create debts then status will be create, after that admin update debts status will be update.and then all update status will be show single debts more info. show more info about debts usesing status or id will be matched: 
// create debts
export const createAllDebts = async (debtsData) => {
    const {data} = await axiosPublic.post('/createAllDebts',debtsData);
    return data;
}

// find debts by name searching,sorting by price,status filtering
export const findAllDebtsByQuery = async(searchText,sorting,status) => {
    const {data} = await axiosPublic.get(`/findAllDebtsByQuery/search/?searchText=${searchText}&sorting=${sorting}&status=${status}&limit=${8}`);
    return data;
}

// find single debts by id
export const findSingleDebtsById = async (id) => {
    const {data} = await axiosPublic.get(`/findSingleDebtsById/${id}`);
    return data;
}

// admin update single debts balance handler
export const updateSingleDebtsBelance = async ({ id, moreMoney, backMoney, name, updateBalanceId, formattedDate }) => {
    const { data } = await axiosPublic.put(`/updateSingleDebtsBelance/${id}`, {
        moreMoney,
        backMoney,
        updateBalanceId,
        name,
        formattedDate,
    });
    return data;
};


// show more debts transjection belance details:
export const showMoreTransjectionDetails = async (id) => {
    const {data} = await axiosPublic.get(`/moreTransjection/${id}`);
    return data;
}

// delete singel debbts with all money transactions:
export const deleteSingleDebtsWithMoneyTransactions = async (id) => {
    const {data} = await axiosPublic.delete(`/deleteSingleDebtsWithMoneyTransactions/${id}`);
    return data;
}
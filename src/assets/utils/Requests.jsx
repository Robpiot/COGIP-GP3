export const RequestInvoices = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/invoices`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

export const RequestCompanies = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/companies`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

export const RequestContacts = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/contacts`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

export const RequestLastInvoices = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/invoices?_sort=due_date&_order=desc`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data.slice(-5);
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

export const RequestLastCompanies = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/companies`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data.slice(-5);
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

export const RequestLastContacts = async () => {
    try {
        const response = await fetch(
            `https://cogip-990e44950882.herokuapp.com/contacts`
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
        return data.data.slice(-5);
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};

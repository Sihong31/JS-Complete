const customers = ['Bob', 'Phil', 'Dorus'];

const activeCustomers = ['Bob', 'Phil'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
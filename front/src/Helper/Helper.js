export const roles = [
  {
    value: 1,
    label: "Category",
  },
  {
    value: 2,
    label: "Food Item",
  },
  {
    value: 3,
    label: "Table",
  },
  {
    value: 4,
    label: "Waiter",
  },
  {
    value: 5,
    label: "Waiter Table",
  },
  {
    value: 6,
    label: "Billing",
  },
  {
    value: 7,
    label: "Sales Report",
  },
  {
    value: 8,
    label: "Employee",
  },
  {
    value: 9,
    label: "Dashboard",
  },
];

export const rolesNum = {
  CATEGORY: 1,
  FOODITEM: 2,
  TABLE: 3,
  WAITER: 4,
  WAITERTABLE: 5,
  BILLING: 6,
  SALESREPORT: 7,
  EMPLOYEE: 8,
  DASHBOARD: 9,
};

export const validateRole = (val) => {
  let data = JSON.parse(localStorage.getItem("ADMIN")).role;
  if (data.includes("#")) {
    data = data.split("#");
    data = data.map(function (x) {
      return parseInt(x, 10);
    });
  } else if (data != "Admin") {
    data = [parseInt(data)];
  }

  if (data == "Admin") {
    if (rolesNum.COURSE == val && rolesNum.BATCH == val) {
      return false;
    } else {
      return true;
    }
  } else {
    return data.indexOf(val) != -1;
  }
};

export const showStatus = {
  0: "Deactive",
  1: "Active",
};

export const getDataFromStore = () => {
  let data = JSON.parse(localStorage.getItem("ADMIN"));
  return data;
};
export const stringToInt = (data) => {
  var data = data.map(function (x) {
    return parseInt(x, 10);
  });
  return data;
};

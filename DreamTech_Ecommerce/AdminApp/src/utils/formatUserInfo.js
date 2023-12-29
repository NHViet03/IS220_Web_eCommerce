import formatMoney from "./formatMoney";

const formatUserInfo = (data) => {
    const newData = {};
    newData.id = data.id;
    newData.name = data.name;

    let head_email = data.email.split("@")[0];
    let tail_email = data.email.split("@")[1];
    head_email =
      head_email.slice(0, 3) + head_email.slice(3).replace(/./g, "*");
    newData.email = head_email + "@" + tail_email;

    newData.phone =
      data.phone.slice(0, 4) + data.phone.slice(4).replace(/./g, "*");
    newData.total = formatMoney(data.total);

    if (data.total > 2500000000) {
      newData.level = "Diamond";
    } else if (data.total > 1500000000) {
      newData.level = "Platinum";
    } else {
      newData.level = "Bronze";
    }

    return newData;
  };

  export default formatUserInfo;
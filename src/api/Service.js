export default class Service {
  static async getPollsInfo() {
    const data = await new Promise((res, rej) => {
      setTimeout(( ) => {
        res([{
          name: "Respondent age",
          value: "age",
          type: "range",
          values: []
        },{
          name: "Loyalty card type",
          value: "type",
          type: "type",
          values: [
            { name: "Gold", value: "gold" },
            { name: "Silver", value: "Silver" }
          ]
        },{
          name: "Loyalty card status",
          value: "status",
          type: "status",
          values: [
            { name: "Active", value: "active" },
            { name: "Disabled", value: "disabled" }
          ]
        }]);
      }, 200)
    })

    return data;
  }

  static async getPollsTranslate() {
    const data = await new Promise((res, rej) => {
      setTimeout(( ) => {
        res({
          range: "Range",
          status: "Status",
          type: "Type",
        })
      }, 200)
    });
    return data;
  }

  static async sendForm(data) {
    const res = await fetch("some.api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    return res;
  }
}
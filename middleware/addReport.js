const fetch = require("node-fetch");

const addReport = async (type, id) => {
  if (type == 0) {
    const url = `${process.env.SERVICE_CONTENT}/reportcontent/${id}`;
    try {
      const rawResponse = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      const response = await rawResponse.json();
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }

  if (type == 1) {
    const url = `${process.env.SERVICE_CONTENT}/reportcomment/${id}`;
    try {
      const rawResponse = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      const response = await rawResponse.json();
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }
};

module.exports = addReport;

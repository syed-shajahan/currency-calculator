export const getExchangeRateFromApi = async (
  fromCurrency: string,
  toCurrency: string
) => {
  try {
    const apiUrl = `${process.env.REACT_APP_BASEURL}/${process.env.REACT_APP_APIKEY}/pair/${fromCurrency}/${toCurrency}`;
    const data = await fetch(apiUrl);
    console.log(process.env.REACT_APP_BASEURL, "env? ");
    if (!data.ok) {
      throw new Error(`Error fetching data: ${data.statusText}`);
    }

    const res = await data.json();
    return res;
  } catch (error) {
    console.error("Error fetching API:", error);
  }
};

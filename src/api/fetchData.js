const fetchData = async (URL) => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw response;
    } 

    const data = await response.json();

    if (!data) {
      throw new Error(`"data" is empty: ${data}`);
    }

    return data;

  } catch (error) {
    console.warn("Cant fetch current weather: ");
    console.warn(error);
  }
};

export default fetchData;

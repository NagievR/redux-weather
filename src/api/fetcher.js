const fetcher = async (URL) => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw response.status;
    } 

    const data = await response.json();

    return data;

  } catch (error) {
    console.warn("Cant fetch current weather: ");
    console.warn(error);
  }
};

export default fetcher;

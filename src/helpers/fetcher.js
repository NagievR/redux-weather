const fetcher = async (URL) => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw await response.json();
    } 

    const data = await response.json();

    return data;

  } catch (error) {
    console.warn("Cant fetch data");
    console.warn(error);
  }
};

export default fetcher;

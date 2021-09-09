class Http {
  get = async (url: string) => {
    try {
      const result = await fetch(url);
      const data = await result.json();

      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  post = async (url: string, body: any) => {
    const result = await fetch(url, body);
    const data = await result.json();
  };
}

export default Http;

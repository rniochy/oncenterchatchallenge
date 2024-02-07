async function fetchData() {
    try {
      const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries');
      const data = await response.json();

      console.log(data.data)
      return data.data;
    } catch (error) {
      console.error('Error to get covid\'s countries data :', error);
      return [];
    }
  }
  
  export default fetchData;
  
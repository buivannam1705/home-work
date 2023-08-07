const Test = () => {

    const storedData = localStorage.getItem('nam@gmail.com');
  const parsedData = storedData ? JSON.parse(storedData) : null;
    console.log(parsedData);
    return (
        <div>
            Test
            <p>Name: {parsedData?.email}</p>
        </div>
    )
}
export default Test;
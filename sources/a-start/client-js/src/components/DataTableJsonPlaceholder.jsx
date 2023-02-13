import { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";

const DataTableJsonPlaceholder = () => {
  // Fetch data dari JSONPlaceholder
  // Untuk bisa membuat loader, artinya membutuhkan 2 buah state:
  // - State untuk menyatakan sedang loading (isLoading)
  // - State untuk data todos yang akan diambil (data)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Untuk bisa mengambil data yang ada, kita akan membutuhkan useEffect
  useEffect(
    // Parameter pertama dari useEffect adalah callback handler
    // Ingat callback handler ini TIDAK BISA berupa async function !
    () => {
      // Bila ingin menggunakan fetch versi async, definisikan di dalam fungsi async di dalam sini
      const fetchDataFromJsonPlaceholder = async () => {
        try {
          // Set isLoading menjadi true
          setIsLoading(true);

          // Di dalam sini bisa menggunakan await
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const responseJson = await response.json();

          // set data di sini
          setData(responseJson);
        } catch (err) {
          // Di sini kita hanya log ke dalam console
          console.log(err);
        } finally {
          // Apapun yang terjadi, set isLoading menjadi false
          setIsLoading(false);
        }
      };

      // Invoke functionnya di sini
      fetchDataFromJsonPlaceholder();
    },

    // Parameter keedua dari useEffect adalah dependency list
    []
  );

  if (isLoading) {
    return (
      <section className="flex flex-row min-h-screen items-center justify-center">
        <CustomLoader />
      </section>
    );
  }

  return (
    <>
      <p className="text-base font-semibold text-center">
        Data JSONPlaceholder
      </p>

      <table className="mx-auto">
        <thead>
          <tr>
            <th className="p-2">User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>isCompleted</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo, idx) => (
            <tr key={idx}>
              <td className="p-2">{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.isCompleted ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTableJsonPlaceholder;

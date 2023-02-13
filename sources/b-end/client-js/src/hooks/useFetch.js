import { useEffect, useState } from "react";

// di sini kita akan mencoba untuk membuat custom hooks
// Karena ini adalah sebuah "function"
// maka ini bisa menerima parameter
const useFetch = (urlToFetch) => {
  // Karena ini dianggap sebagai sebuah "component"
  // maka kita bisa menggunakan hooks di dalam sini
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Karena ini dianggap sebagai sebuah "component"
  // maka kita bisa menggunakan hooks lainnya juga di dalam sini
  useEffect(
    // Parameter pertama useEffect adalah callback handler
    () => {
      // Di sini kita akan membuat async function
      const fetchFromUrl = async () => {
        // di dalam sini kita bisa menggunakan await
        try {
          // Dan di dalam sini kita bisa menggunakan setter setIsLoading
          setIsLoading(true);

          // Sekarang kita bisa fetch dari parameter yang diberikan
          // di dalam "component", yaitu (urlToFetch)
          const response = await fetch(urlToFetch);
          const responseJson = await response.json();

          // Di sini juga kita bisa memanggil setter data kita (setData)
          setData(responseJson);
        } catch (err) {
          console.log(err);
        } finally {
          // Mirip dengan yang sebelumnya juga
          setIsLoading(false);
        }
      };

      // Jangan lupa untuk invoke fungsi async di atas !
      fetchFromUrl();
    },
    // Parameter kedua useEffect adalah dependency list
    // Karena hanya ingin dipanggil satu kali saja, maka kita biarkan array kosong saja
    []
  );

  // kita kembalikan saja apa yang diinginkan dari sini
  return {
    isLoading,
    data,
  };
};

export default useFetch;

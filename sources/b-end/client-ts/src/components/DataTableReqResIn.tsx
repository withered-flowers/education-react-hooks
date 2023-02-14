// Kita juga akan menggunakan loader CustomLoader yang sudah dibuat
import CustomLoader from "../components/CustomLoader";

// Di sini kita tidak akan import useState dan useEffect lagi
// Karena sudah dihandle oleh useFetch yang kita buat sebelumnya
// (Lihat /src/hooks/useFetch.js)
import useFetch from "../hooks/useFetch";

const DataTableReqresIn = () => {
  // Karena kita mengetahui bahwa useFetch mengembalikan object
  // Maka kita akan menggunakan hal tersebut via destructuring object

  // Karena kita mengetahui bahwa useFetch menerima url,
  // kita set di sini urlnya
  const { isLoading, data } = useFetch("https://reqres.in/api/colors");

  // Kita akan menggunakan logic yang mirip dengan DataTableJsonPlaceholder di sini
  if (isLoading) {
    return (
      <section className="flex flex-row min-h-screen items-center justify-center">
        <CustomLoader />
      </section>
    );
  }

  return (
    <>
      <p className="text-base font-semibold text-center">Data ReqresIn</p>

      {/* TODO: Buat hooks custom di sini */}
      <table className="mx-auto">
        <thead>
          <tr>
            <th className="p-2">id</th>
            <th>name</th>
            <th>year</th>
            <th>color</th>
          </tr>
        </thead>
        <tbody>
          {/* Gunakan "data" seperti umumnya */}

          {/* Perbedaannya dengan JS adalah di sini data wajib ada */}
          {/* Sehingga harus dicek terlebih dahulu */}
          {data &&
            data.data.map((color) => (
              <tr key={color.id}>
                <td className="p-2">{color.id}</td>
                <td className="capitalize">{color.name}</td>
                <td>{color.year}</td>
                <td style={{ color: color.color }}>{color.color}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTableReqresIn;

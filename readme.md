# Education React Hooks (Custom Hooks)

## Table of Content

- [Apa itu Hooks](#apa-itu-hooks)
- [Aturan Penggunaan Hooks](#aturan-penggunaan-hooks)
- [Demo Custom Hooks](#demo-custom-hooks)

### Apa itu Hooks

Dulu, React itu dedefinisikan dalam class, namun sejak React 16.8, React itu menggunakan function.

Nah, sehubungan dengan yang ada di atas, Hooks adalah fungsi yang disediakan oleh React yang membuat functional component dalam React bisa mengakses fitur fitur React (Sebelumnya hanya dapat digunakan di class component saja).

### Aturan Penggunaan Hooks

- Hooks hanya bisa dipanggil dari Fungsi React
- Hooks hanya boleh didefinisikan di atas Komponen atau di dalam Hooks
- Hooks tidak boleh dipanggil di dalam kondisional, iterasi, ataupun nested function

Dokumentasi:

- https://react.dev/warnings/invalid-hook-call-warning

### Demo Custom Hooks

Sekarang mari kita coba untuk membuat sebuah aplikasi sederhana yah. Aplikasi ini akan menggunakan data dari 2 tempat:

- JSONPlaceholder (Todos)
- ReqResIn (Colors)

Aplikasi akan menampilkan data dari kedua tempat tersebut dalam dua buah Component Table yang berbeda.

Di sini kita akan mencoba untuk menggunakan `useState` dan `useEffect` serta membuat sebuah `custom hooks` (Hooks yang dibuat secara mandiri) untuk menggabungkan keduanya. `custom hooks` yang dibuat bernama `useFetch`

DISCLAIMER:

- Source Code yang didemokan di sini menggunakan Vite sebagai build toolsnya.
- Apabila menggunakan Create-React-App (CRA) dalam meng-inisialisasi project, harap disesuaikan yah !

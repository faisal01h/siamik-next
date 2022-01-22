import { FunctionComponent } from 'react'

const NotFound: FunctionComponent = () => {
  return (
    <div className="w-screen h-[80vh] flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-4xl text-gray-800 hover:text-red-500 select-none">Page Not Found</h1>
      <p className="w-fit text-center px-8">
        Halaman yang anda kunjungi tidak ditemukan. Mohon periksa kembali alamat yang anda masukkan.
      </p>
    </div>
  )
}

export default NotFound

import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Reguler() {
    const router = useRouter()
    const { id } = router.query;

    const [ kelas, setKelas ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ noData, setNoData ] = useState(false);

    useEffect(() => {
        if(id) {
            axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/kelas/reguler?id=${id}`)
            .then((e) => {
                console.log("len", e.data.payload.length)
                if(e.data.payload.length > 0) {
                    setKelas(e.data.payload)
                } else setNoData(true);
            })
            .catch(console.error)
        }
    }, [id])

    return (
        <div>
            <Head>
                <title>Daftar Kelas - Sistem Informasi Akademik UPN &quot;Veteran&quot; Jawa Timur</title>
            </Head>
            <div>
                <div className="mx-8 md:mx-20 py-12">
                    <h1 className="text-4xl font-bold">Daftar Kelas</h1>
                    <div className="flex flex-col min-w-[365px] text-sm gap-2 my-5">
                        {
                            kelas.length > 0 ?
                            <div className="flex flex-col sticky top-2 z-50">
                                <input type="text" placeholder="Masukkan kata kunci pencarian..." className="px-3 py-2 acrylic border-b border-b-transparent hover:border-b-green-500 focus:border-b-green-600 outline-none rounded-lg" onChange={e=>setSearchQuery(e.currentTarget.value)} />
                            </div> : false
                        }
                        <div className="grid grid-cols-6 w-full rounded-lg gap-2 acrylic px-3 py-2 text-base items-center sticky top-[3.25rem] z-50">
                            <span className="col-span-1">Kode</span>
                            <span className="col-span-2">Mata Kuliah</span>
                            <span className="col-span-1">SKS</span>
                            <span className="col-span-1">Kelas</span>
                            <span className="col-span-1">Jumlah Mahasiswa</span>
                        </div>
                        {
                            kelas.length > 0 ?
                            kelas.map((e:any, i) => {
                                if(searchQuery.length > 0) {
                                    if(e.code.toLowerCase().includes(searchQuery.toLowerCase()) || e.name.toLowerCase().includes(searchQuery.toLowerCase()) || e.kelas.toLowerCase().includes(searchQuery.toLowerCase())) return (
                                        <Link key={i} href={`detail?kelas=${e.parameters.kelas}&prodi=${e.parameters.prodi}&kode=${e.parameters.kode}`}>
                                            <a className={`grid grid-cols-6 w-full rounded-lg gap-2 px-3 py-2 green-glow ${e.jumlah >49 ? "bg-gray-200 text-gray-800" : "acrylic"}`}>
                                                <span className="col-span-1 break-words">{e.code}</span>
                                                <span className="col-span-2">{e.name}</span>
                                                <span className="col-span-1">{e.sks}</span>
                                                <span className="col-span-1">{e.kelas}</span>
                                                <span className="col-span-1">{e.jumlah}</span>
                                            </a>
                                        </Link>
                                    ) 
                                    else return ""
                                } else return (
                                    <Link key={i} href={`detail?kelas=${e.parameters.kelas}&prodi=${e.parameters.prodi}&kode=${e.parameters.kode}`}>
                                        <a className={`grid grid-cols-6 w-full rounded-lg gap-2 px-3 py-2 green-glow ${e.jumlah >49 ? "bg-gray-200 text-gray-800" : "acrylic"}`}>
                                            <span className="col-span-1 break-words">{e.code}</span>
                                            <span className="col-span-2">{e.name}</span>
                                            <span className="col-span-1">{e.sks}</span>
                                            <span className="col-span-1">{e.kelas}</span>
                                            <span className="col-span-1">{e.jumlah}</span>
                                        </a>
                                    </Link>
                                )
                            }) : noData ? "Tidak ada data" : "Loading..."
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Days, Months } from "../../../utils/kit";

export default function() {

    type ClassType = {
        name: string,
        major: string
    }

    const router = useRouter()
    const { kelas, prodi, kode } = router.query

    const [ classInfo, setClassInfo ] = useState();
    const [ mahasiswa, setMahasiswa ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(() => {
        if(kelas && prodi && kode) {
            axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/kelas/reguler/detail?kelas=${kelas}&prodi=${prodi}&kode=${kode}`)
            .then((e) => {
                console.log(e.data.payload)
                setMahasiswa(e.data.payload)
            })
        }
    }, [kelas, prodi, kode])

    return (
        <div>
            <Head>
                <title>Detail Kelas - Sistem Informasi Akademik UPN "Veteran" Jawa Timur</title>
            </Head>
            <div className="mx-8 md:mx-20 my-12">
                <div>
                    <h1 className="text-4xl font-bold">Detail Kelas</h1>
                </div>
                {
                    classInfo ?
                    <div>
                    
                    </div> : false
                }
                <div className="flex flex-col min-w-[325px] text-sm gap-2 my-5">
                    {
                        mahasiswa.length > 0 ?
                        <div className="flex flex-col sticky top-2 z-50">
                            <input type="text" placeholder="Masukkan kata kunci pencarian..." className="px-3 py-2 acrylic border-b border-b-transparent hover:border-b-green-500 focus:border-b-green-600 outline-none rounded-lg" onChange={e=>setSearchQuery(e.currentTarget.value)} />
                        </div> : false
                    }

                    <div className="grid grid-cols-4 w-full rounded-lg gap-2 acrylic px-3 py-2 text-base items-center sticky top-[3.25rem] z-50">
                        <span className="col-span-1">NPM</span>
                        <span className="col-span-2">Nama</span>
                        <span className="col-span-1">Registrasi</span>
                    </div>

                    {
                        mahasiswa.length > 0 ?
                        mahasiswa.map((e:any, i) => {
                            if(searchQuery.length > 0) {
                                if(e.npm.toLowerCase().includes(searchQuery.toLowerCase()) || e.name.toLowerCase().includes(searchQuery.toLowerCase())) return (
                                    <div key={i}>
                                        <a className={`grid grid-cols-4 w-full rounded-lg gap-2 px-3 py-2 green-glow ${!e.ukt ? "bg-gray-200 text-gray-800" : "acrylic"}`}>
                                            <span className="col-span-1 break-words">{e.npm}</span>
                                            <span className="col-span-2">{e.name}</span>
                                            <span className="col-span-1">{e.ukt}</span>
                                        </a>
                                    </div>
                                ) 
                                else return ""
                            } else {
                                let dt = null
                                if(e.ukt) {
                                    dt = new Date(e.ukt)
                                }
                                return (
                                    <div key={i}>
                                        <a className={`grid grid-cols-4 w-full rounded-lg gap-2 px-3 py-2 green-glow ${!e.ukt ? "bg-gray-200 text-gray-800" : "acrylic"}`}>
                                            <span className="col-span-1 break-words">{e.npm}</span>
                                            <span className="col-span-2">{e.name}</span>
                                            {
                                                dt ? <span className="col-span-1">{Days[dt.getDay()]}, {dt.getDate()} {Months[dt.getMonth()]} {dt.getFullYear()}</span> 
                                                : <span className="col-span-1"></span>
                                            }
                                        </a>
                                    </div>
                                )
                            }
                            
                        }) : "Loading"
                    }
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react"
import { AlertYellow } from "../../components/alerts"
import { BsConeStriped, BsChevronRight } from "react-icons/bs"
import axios from "axios"
import Link from "next/link"
import Head from "next/head"
export default function Kelas() {

    const [ reguler, setReguler ] = useState<Array<any>>([])
    const [ mkdu, setMkdu ] = useState([])
    const [ regIsLoading, setRegIsLoading ] = useState<boolean>(true);

    const ProdiMap : Map<string, string> = new Map();
    
    //FISIP
    ProdiMap.set("AE", "Administrasi Negara")
    ProdiMap.set("AH", "Hubungan Internasional")
    ProdiMap.set("AI", "Administrasi Bisnis")
    ProdiMap.set("AK", "Ilmu Komunikasi")
    ProdiMap.set("AP", "Pariwisata")

    //FEB
    ProdiMap.set("EA", "Akuntansi")
    ProdiMap.set("EM", "Manajemen")
    ProdiMap.set("ES", "Ekonomi Pembangunan")

    //FH
    ProdiMap.set("HK", "Ilmu Hukum")

    //FT
    ProdiMap.set("PG", "Agroteknologi")
    ProdiMap.set("PS", "Agribisnis")

    //FIK
    ProdiMap.set("SD", "Sains Data")
    ProdiMap.set("SI", "Sistem Informasi")
    ProdiMap.set("TF", "Informatika")

    //FAD
    ProdiMap.set("TA", "Arsitektur")
    ProdiMap.set("TV", "Desain Komunikasi Visual")

    //FT
    ProdiMap.set("TI", "Teknik Industri")
    ProdiMap.set("TK", "Teknik Kimia")
    ProdiMap.set("TL", "Teknik Lingkungan")
    ProdiMap.set("TM", "Teknik Mesin")
    ProdiMap.set("TP", "Teknologi Pangan")
    ProdiMap.set("TS", "Teknik Sipil")

    React.useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/kelas`)
        .then((e) => {
            let pl = e.data.payload
            let arr:Array<any> = []
            pl.forEach((el:any) => {
                arr.push(el)
                // console.log(el)
            })
            setReguler(arr)
            setRegIsLoading(false)
            
            
        })
    }, [])

    return (
        <div className="flex flex-col gap-10">
            <Head>
                <title>Kelas - Sistem Informasi Akademik UPN &quot;Veteran&quot; Jawa Timur</title>
            </Head>
            <div className="mx-8 md:mx-20 -mb-10 mt-5">
                <AlertYellow icon={BsConeStriped} text="Maaf, untuk saat ini, halaman ini sedang dalam pengembangan pada sisi backend untuk scraping data." title="Fitur dalam pengembangan" />
            </div>
            <div className="mx-8 md:mx-20 mt-10 flex flex-col gap-5">
                <div className="flex items-baseline gap-5">
                    <h1 className="font-semibold text-3xl">Reguler</h1>
                    {reguler.length > 0 ? <span className="text-sm">{reguler.length} program studi</span> : false}
                </div>
                <div className="flex flex-wrap gap-3">
                {
                    regIsLoading ? "Loading..." :
                    reguler.length > 0 ?
                    reguler.map((e:any, i) => {
                        return (
                            <Link href={`/kelas/reguler/${e.code}`} key={i}>
                                <a className="flex justify-between items-center acrylic w-full md:w-64 px-3 py-2 rounded green-glow">
                                    <span>{ProdiMap.get(e.abbrev)?ProdiMap.get(e.abbrev):e.abbrev}</span>
                                    <BsChevronRight />
                                </a>
                            </Link>
                        )
                    })
                    : "Tidak ada kelas"
                }
                </div>
            </div>
            <div className="mx-8 md:mx-20 pb-10 flex flex-col gap-5">
                <h1 className="font-semibold text-3xl">Gabungan</h1>
                {
                    mkdu.length > 0 ?
                    mkdu.map((e, i) => '')
                    : "Tidak ada kelas"
                }
            </div>
        </div>
    )
}
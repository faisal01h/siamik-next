import { useState, useEffect } from "react";
import { AlertGreen, AlertRed, AlertYellow, AlertModern } from "../components/alerts";
import PostsComponent from "../components/posts";
import { BsCheck2Circle as IcCheck, BsInfoCircle as IcInfo, BsXCircle as IcErr, BsExclamationTriangle as IcWarn } from 'react-icons/bs'
import axios from "axios";
import Head from "next/head";

interface AlertObject {
    type: string,
    title: string,
    body: string
}

interface PostObject {
    date: Date | undefined,
    title: string,
    body: string,
    icon: string,
    links: Array<string>
}

export default function Landing() {

    const [ alerts, setAlerts ] = useState<Array<Partial<AlertObject>>>([]);
    const [ posts, setPosts ] = useState<Array<Partial<PostObject>>>([]);
    const [ showAlert, setShowAlert ] = useState<Boolean>(true);
    const [ isLoading, setIsLoading ] = useState<Boolean>(true);

    useEffect(() => {

        setAlerts(
            [
                {
                    type: 'modern-info',
                    title: 'SIAMIK Tapi Apik alpha release v0.3a',
                    body: 'Stack: React+NextJS Frontend, NodeJS+Express Backend. Functional features: Pengumuman, list kelas.'
                },
                // {
                //     type: 'fail',
                //     title: 'COVID-19',
                //     body: 'Hindari kontak dengan orang lain.'
                // }
            ]
        );

        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/pengumuman`)
        .then((e) => {
            let p :Array<any> = []
            e.data.payload.forEach((x: { date: any; body: any; title: any; icon: any; links: any }) => {
                p.push({
                    date: x.date,
                    title: x.title,
                    body: x.body,
                    icon: x.icon,
                    links: x.links
                })
            })
            setPosts(p)
            // setPosts([
            //     ...posts,
                
            //     {
            //         date: e.data.payload.date,
            //         title: '',
            //         body: e.data.payload.body,
            //     }
            // ])
            setIsLoading(false);
        })
            
        document.title = "Beranda"

    }, [])

    return (
        <div>
            <Head>
                <title>Beranda - Sistem Informasi Akademik UPN &quot;Veteran&quot; Jawa Timur</title>
            </Head>
            <div>
                <div className={`mx-8 md:mx-12 md:px-8 py-7 mt-5 flex flex-col space-y-3 max-h-80 overflow-y-auto transition-all duration-300 ${showAlert ? "h-fit" : "h-0 invisible -my-12"}`}>
                    
                    {
                        alerts.length > 0 ?
                        alerts.map((e : Partial<AlertObject>, i) => {
                            if(e.type === 'ok') return <AlertGreen key={'AOK'+i} icon={IcCheck} text={e.body} title={e.title} />
                            else if(e.type === 'warn') return <AlertYellow key={'AWR'+i} icon={IcWarn} text={e.body} title={e.title} />
                            else if(e.type === 'fail') return <AlertRed key={'AFL'+i} icon={IcErr} text={e.body} title={e.title} />
                            else if(e.type === 'modern-info') return <AlertModern key={'AIF'+i} icon={IcInfo} text={e.body} title={e.title} />
                            else return false;
                        }) :  "Tidak ada notifikasi"
                    }
                    
                    
                </div>
                <div className="flex flex-row justify-center md:justify-end md:mx-20">
                    <button className="acrylic rounded-lg px-3 py-1 hover:bg-gray-300" onClick={e=>{setShowAlert(!showAlert)}}>{showAlert?"Sembunyikan":"Tampilkan"} notifikasi</button>
                </div>
            </div>
            
            <div className="mx-8 md:mx-20 mt-10 pb-10 flex flex-col space-y-3">
                {
                    isLoading ? "Loading..." :
                    posts.length > 0 ? 
                    posts.map((e : Partial<PostObject>) => {
                        let i = 0;
                        return <PostsComponent key={i+(e.body||"")} title={e.title} body={e.body} date={e.date} icon={e.icon} links={e.links} />
                    })
                    : false
                }
            </div>
        </div>
    )
}
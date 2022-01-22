import { BsArrowRight } from "react-icons/bs";

export default function Posts(props: {title : string | undefined; body : string | undefined; date : any, icon?: any, links?: Array<string>}) {

    const dt = new Date(props.date)
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    function twoDigits(x: number) {
        let s = x.toString()
        if(s.length == 1) {
            s = "0"+s;
        }
        return s
    }

    return (
        <div>
            <div className="acrylic rounded-lg shadow p-5">
                <div className="flex flex-col space-y-3 text-black">
                    <div className="flex flex-col space-y-1">
                        <div className="flex flex-row items-center gap-3">
                            <img src={props.icon} alt="image" className="w-6 h-6" />
                            <h2 className="font-semibold text-xl">{props.title}</h2>
                        </div>
                        <span className="text-gray-800 ml-9">{days[dt.getDay()]}, {dt.getDate()} {months[dt.getMonth()]} {dt.getFullYear()} pukul {twoDigits(dt.getHours())}:{twoDigits(dt.getMinutes())} WIB</span>
                    </div>
                    <div className="ml-9" dangerouslySetInnerHTML={{__html:`<p>${props.body}</p>`}} />
                    <div className="ml-9 flex flex-wrap gap-2">
                        {
                            props.links?.map((e, i) => {
                                return (
                                    <a href={e} key={i} className="acrylic px-2 py-1 rounded green-glow flex items-center gap-2 hover:gap-3" target="_blank" rel="noreferrer">Link {i+1} <BsArrowRight /></a>
                                )
                            })
                        }  
                    </div>
                </div>
            </div>
        </div>
    )
}
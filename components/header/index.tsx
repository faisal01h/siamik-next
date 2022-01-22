import { useContext } from "react";
import Link from "next/link"
import { PageContext } from "../../contexts/Context";
import Logo from '../../resources/images/logo.png';

export default function Header() {
    const Ctx = useContext(PageContext);
    
    return(
        <div className="pt-8">
            <div className="sticky top-0 bg-gray-50 shadow-lg rounded-lg mx-5 lg:mx-20 h-16">
                <div className="flex flex-row justify-between">
                    <Link href="/">
                        <a className="logo flex items-center h-16 p-5 flex-shrink gap-3">
                            <img src={Logo.src} alt="" className="max-h-10" />
                            <div className="hidden lg:flex flex-col gap-0 text-sm">
                                <p className="font-semibold">Sistem Informasi Akademik</p>
                                <p className="text-xs">UPN "Veteran" Jawa Timur</p>
                            </div>
                        </a>
                    </Link>

                    <div className="nav-el flex flex-row items-center justify-end p-3 gap-5 flex-grow">
                        <Link href="/" ><a className="hover:text-green-600 p-2">Beranda</a></Link>
                        <Link href="/kelas" ><a className="hover:text-green-600 p-2">Kelas</a></Link>
                        {
                            Ctx.isAuthenticated ? 
                            <div className="flex flex-row items-center justify-end space-x-5">
                                <Link href="/krs" ><a className="hover:text-green-600 p-2">KRS</a></Link>
                                <Link href="/khs" ><a className="hover:text-green-600 p-2">KHS</a></Link>
                                <Link href="/transkrip" ><a className="hover:text-green-600 p-2">Transkrip</a></Link>
                            </div> :
                            <Link href="/login" ><a className="hover:text-green-600 p-2 hidden">KRS</a></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"

function AlertGreen(props:{icon? : any; text : string | undefined; title? : string | undefined; addclass? : string | undefined}) {
    return(
        <div className="bg-green-600 text-white rounded-lg ">
            <div className={"flex flex-row  px-3 py-2 items-center space-x-3 " + props.addclass}>
                {props.icon ? 
                    <div className="flex items-center">
                        {<props.icon />}
                    </div>
                    : false
                }
                {
                    props.text ?
                    <div className="flex flex-col">
                        {
                            props.title ? <b className="font-semibold">{props.title}</b> : false
                        }
                        <p>{props.text}</p>
                    </div>
                    : false
                }
            </div>
        </div>
        
    )
}

function AlertYellow(props:{icon? : any; text : string | undefined; title? : string | undefined; addclass? : string | undefined}) {
    return(
        <div className="bg-orange-400 text-white rounded-lg ">
            <div className={" flex flex-row  px-3 py-2 items-center space-x-3 " + props.addclass}>
                {props.icon ? 
                    <div>
                        {<props.icon />}
                    </div>
                    : false
                }
                {
                    props.text ?
                    <div className="flex flex-col">
                        {
                            props.title ? <b className="font-semibold">{props.title}</b> : false
                        }
                        <p>{props.text}</p>
                    </div>
                    : false
                }
            </div>
        </div>
        
    )
}

function AlertRed(props:{icon? : any; text : string | undefined; title? : string | undefined; addclass? : string | undefined}) {
    return(
        <div>
            <div className={"bg-red-600 text-white rounded-lg " + props.addclass}>
                <div className={" flex flex-row  px-3 py-2 items-center space-x-3 "}>
                    {props.icon ? 
                        <div>
                            {<props.icon />}
                        </div>
                        : false
                    }
                    {
                        props.text ?
                        <div className="flex flex-col">
                            {
                                props.title ? <b className="font-semibold">{props.title}</b> : false
                            }
                            <p>{props.text}</p>
                        </div>
                        : false
                    }
                </div>
            </div>
        
        </div>
    )
}

function AlertModern(props:{icon? : React.FC; text : string | undefined; title? : string | undefined; addclass? : string | undefined}) {
    return(
        <div className="acrylic rounded-lg">
            <div className=" text-black">
                <div className={"flex flex-row px-3 py-2 items-center space-x-3 " + props.addclass}>
                    {props.icon ? 
                        <div>
                            {<props.icon />}
                        </div>
                        : false
                    }
                    {
                        props.text ?
                        <div className="flex flex-col">
                            {
                                props.title ? <b className="font-semibold">{props.title}</b> : false
                            }
                            <p>{props.text}</p>
                        </div>
                        : false
                    }
                </div>
            </div>
        
        </div>
    )
}

export { AlertGreen, AlertYellow, AlertRed, AlertModern }
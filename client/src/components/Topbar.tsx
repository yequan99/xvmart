import xvmartLogo from '../assets/images/xvmart.jpg';

export default function Topbar() {
    return (
        <div className="flex flex-row container m-auto mt-4 items-center justify-between">
            <div className="flex items-center">
                {/* eslint-disable-next-line */}
                <img className="h-16 w-48" src={xvmartLogo} />
                <div className="pl-5">
                    CATEGORIES
                </div>
            </div>
            <div>
                CART
            </div>
        </div>
    )
}
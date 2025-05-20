const Header = () => {
    return (
        <>
            <div className="flex justify-between m-auto px-7 py-4">
                <div className="flex">
                    {/* <img src="./ss.png" alt="logo" /> */}
                    <p className="text-orange-500 text-4xl">Swiggy</p>
                </div>
                <div className="flex ">
                    <ul className="flex gap-8 text-xl text-orange-300 items-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
            <hr className="border-t-3 border-orange-500"></hr>
        </>
    )
}

export default Header;
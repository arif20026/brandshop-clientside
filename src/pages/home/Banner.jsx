
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-blue-minimalist-technology-computer-banner-image_188887.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
                    <p className="mb-5">Discover Tech Bliss at <span className="font-bold text-orange-500">happy</span><span className="text-black">shop</span>: Elevate Your Lifestyle with Cutting-Edge Gadgets & Devices</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
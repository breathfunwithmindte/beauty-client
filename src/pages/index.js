import Homepage from "./Homepage/Homepage";
import Salons from "./Salons/Salons";
import Salon from "./Salon/Salon";
import Store from "./store/Store";

const pages = [
    {
        path: "/",
        Component: Homepage
    },
    {
        path: "/s/:id/*",
        Component: Store
    },
    {
        path: "/s/:id/search",
        Component: Salons
    },
    {
        path: "/s/:id/search1",
        Component: Salon
    }
]

export default pages;
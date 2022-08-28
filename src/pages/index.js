import Homepage from "./Homepage/Homepage";
import Salons from "./Salons/Salons";
import Salon from "./Salon/Salon";

const pages = [
    {
        path: "/",
        Component: Homepage
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
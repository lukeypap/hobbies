import Hero from "~/components/Hero";
import Hobbies from "~/components/Hobbies";
import Nav from "~/components/Nav";

export default function Index() {
    return (
        <div className="bg-black">
            <Nav />
            <Hero />
            <Hobbies />
        </div>
    );
}

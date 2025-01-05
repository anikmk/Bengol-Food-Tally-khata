
import useAuth from "../../hooks/useAuth";
import Hero from "./HomeComponents/Hero/Hero";

const Home = () => {
    const {user} = useAuth()
    console.log(user);

    return (

        <>
        <Hero />
        </>
    );
};

export default Home;
import Load from "../../Componnents/Shared/Loader/load/Load";
import useAuth from "../../hooks/useAuth";
import Hero from "./HomeComponents/Hero/Hero";

const Home = () => {
    const {user} = useAuth()
    console.log(user);

    return (

        <>
        <Hero />
        <Load />
        </>
    );
};

export default Home;
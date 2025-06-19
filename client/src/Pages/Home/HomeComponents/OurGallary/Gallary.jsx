import Container from "../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../Componnents/Shared/Heading/Heading";

const Gallary = () =>{
    return <>
    <Container>
        <div>
            <Heading heading={'আমাদের গ্যালারি'} subHeading={'ছবিতে আমাদের সেরা মুহূর্তগুলো'}/>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-3">
                <div><img src="/contact.png" alt="" /></div>
                <div><img src="/contact.png" alt="" /></div>
                <div><img src="/contact.png" alt="" /></div>
                <div><img src="/contact.png" alt="" /></div>
                <div><img src="/contact.png" alt="" /></div>
                <div><img src="/contact.png" alt="" /></div>

            </div>
        </div>
    </Container>
    </>
}
export default Gallary;
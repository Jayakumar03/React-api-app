import react from "react";
import {Card, CardBody, CardTitle, CardText}  from "reactstrap";
import {FaEnvelope, DefaultContext, FaPhone} from "react-icons";

const Card1 = (details) => {
    // console.log( `img:${details.picture?.large}`);

    return(
        <Card>
            <CardBody className="text-center">

                <img height="150" width="150"
                className="rounded-circle img-thumnnail border-danger" 
                src= {details.picture?.large} />

                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">
                            {details.name?.title}
                        </span>
                        <span>
                            {details.name?.first}
                        </span>
                        <span>
                            {details.name?.last}
                        </span>
                    </h1>
                </CardTitle>
                <CardText>
                    {/* <DefaultContext /> */}
                    {details.location?.city}
                    <p>{details.phone}</p>  
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Card1